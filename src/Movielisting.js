
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MovieListItem from './MovieListItem'
import { API_BASE_URL } from './Constants';

export class Movielisting extends React.Component {

    getData() {
        return [
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            }
        ]
    }

    render() {
        return (<View style={styles.container}>
            <FlatList style={styles.list} data={this.getData()}
                renderItem={({ item }) => {
                    return (<MovieListItem title={item.title} />);
                }
            }
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