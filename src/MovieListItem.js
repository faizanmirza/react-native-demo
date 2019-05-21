import React from 'react';
import { StyleSheet, View, Text, ReactNative } from 'react-native';

export default class MovieListItem extends React.Component {

    render() {
        return (
            <View style={styles.headerBackground}>
                <Text style={styles.headerText}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerText: {        
        color: 'white',
        alignSelf: "center"
    },
    headerBackground: {
        height: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    }
})