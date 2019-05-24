import React from 'react';
import { StyleSheet, Button, Image, View, Text, ReactNative } from 'react-native';


export default class MovieListItem extends React.Component {



    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.props.image_url }} style={styles.photo} />
                <View style={styles.container_text}>
                    <View style={styles.header_text}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <Text style={styles.rating} >
                            {this.props.year}
                        </Text>
                    </View>
                    <Button style={styles.description} title="Rate It" />
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