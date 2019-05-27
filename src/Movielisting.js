
import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator, FlatList } from 'react-native';
import MovieListItem from './MovieListItem'
import { API_BASE_URL } from './Constants';
import axios from 'axios'

export class Movielisting extends React.Component {
   
    static navigationOptions = {
        title: 'Movielisting'
       };

    state =
        {
            movieList: [],
            page: 1,
            title: 'mission'
        }

    componentDidMount() {
        this.getMovies()
    }

    getMovies() {
        const { movieList, page, title } = this.state;

        axios.get('http://www.omdbapi.com/?apikey=3ca237af&s=' + title + '&page=' + page)
            .then(response => {

                data = response.data['Search']
                this.setState({
                    movieList: page === 1 ? data : [...this.state.movieList, ...data],
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

    onTitleChange = (text) => {
        var title = this.text;

        this.setState({
            title: String(title).length > 3 ? text : "mission"
        })
        this.setState({
            movieList: [],
            page: 1
        })

        this.getMovies()
    };

    rowItem = (item) => {
        return (<TouchableOpacity onPress={() => this.onListItemClick(item)}><MovieListItem title={item.Title} year={item.Year} key={i => item.imdbID} type={item.Type}
            image_url={item.Poster} /></TouchableOpacity>)
    };

    onListItemClick = (item) => {
        console.log("Imdb Id " + item.imdbID);
        this.props.navigation.navigate('Detail')
    }

    render() {

        movies = this.state.movieList;

        return (<View style={styles.container}>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.searchTitle}
                    editable={true}
                    maxLength={40}
                    multiline={false}
                    clearButtonMode="while-editing"
                    borderStyle="solid"
                    placeholder="Title"
                    onChangeText={(text) => this.onTitleChange(text)} />

            </View>
            <FlatList style={styles.list} data={movies}
                onEndReached={this.loadMoreMovies}
                onEndThreshold={0}
                renderItem={({ item }) => {
                    return this.rowItem(item)
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
    },
    searchBox: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10
    },
    searchTitle: {
        height: 40,
        padding: 10,
        borderBottomColor: 'grey'
    }
})