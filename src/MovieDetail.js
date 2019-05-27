import React from 'react';
import { StyleSheet, Button, ActivityIndicator, Image, View, Text, ReactNative } from 'react-native';
import axios from 'axios'


export class MovieDetail extends React.Component {

    static navigationOptions = {
        title: 'MovieDetail'
    };

    state =
        {
            movieDetail: null,
            loading: true,
        }


    componentDidMount() {

        axios.get('http://www.omdbapi.com/?apikey=3ca237af&i=tt1229238').then(response => {

            var data = response.data
            this.setState({
                movieDetail: data,
                loading: false,
            })

        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {

        const { movieDetail } = this.state;
        console.log(movieDetail);       

        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Image style={styles.photo} />
                <View style={styles.container_text}>
                    <View style={styles.header_text}>
                        <Text style={styles.title}>
                            {this.movieDetail.Title}
                        </Text>
                        <Text style={styles.rating} >
                            {this.movieDetail.Title}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    rating: {
        fontSize: 14,
        color: 'grey',
        fontStyle: 'italic',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    description: {
        fontSize: 12,
        marginTop: 10
    },
    photo: {
        height: 150,
        marginBottom: 8
    },
    header_text: {
        flex: 1,
        flexDirection: 'row',
    }
});