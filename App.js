/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header'
import {Movielisting} from './src/Movielisting'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="On Demand List" />
        <Movielisting></Movielisting>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})