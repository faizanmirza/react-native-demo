import React from 'react';
import { StyleSheet, Button, ActivityIndicator, Image, View, Text, ReactNative } from 'react-native';
import axios from 'axios'


export class MovieDetail extends React.Component {

    static navigationOptions = {
        title: 'MovieDetail'
    };

    state =
        {
            movieDetail: {},
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
            return (
                <View style={styles.container}>
                    <Text style={styles.header_text}>Work In Progress</Text>                    
                </View>
            )
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
  
    },  
    header_text: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        fontSize:20        
    }
});