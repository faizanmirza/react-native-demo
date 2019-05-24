import React from 'react';
import { StyleSheet, Button, Image, View, Text, ReactNative } from 'react-native';
import axios from 'axios'


export default class MovieDetail extends React.Component {



    componentDidMount() {
        axios.get('http://www.omdbapi.com/?apikey=3ca237af&i=' + this.props.id).then(response => {

            var data = response.data
            console.log(data);

        }).catch(function (error) {

            console.log(error);

        })
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    }

})

