
import React from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import MovieListItem from './MovieListItem'
import { API_BASE_URL } from './Constants';
import axios from 'axios'

export class Movielisting extends React.Component {

    state =
        {
            movieList: [],
            page: 1,
        }

    componentDidMount() {
        this.getMovies()
    }

    getMovies() {
        const { movieList, page } = this.state;
        
        axios.get('http://www.omdbapi.com/?apikey=3ca237af&s=mission&page=' + page)
            .then(response => {

                data = response.data['Search']
                this.setState({
                    movieList: page === 1 ? data : [...movieList, ...data]
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    loadMoreMovies = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.getMovies();
        });
    };

    renderFooter = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}><ActivityIndicator size="large" color="#ff6a00" /></View>
        );
    };

    render() {

        movies = this.state.movieList;

        return (<View style={styles.container}>
            <FlatList style={styles.list} data={movies}
                onEndReached={this.loadMoreMovies}
                onEndThreshold={0}
                renderItem={({ item }) => {
                    return (<MovieListItem title={item.Title} year={item.Year} key={i => item.imdbID} type={item.Type}
                        image_url={item.Poster} />);
                }
                }
                keyExtractor={(item, index) => item.imdbID}
                ListFooterComponent={this.renderFooter}
            />
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flexGrow: 0
    }
})