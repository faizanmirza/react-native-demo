import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import {Movielisting} from "./src/Movielisting";
import {MovieDetail} from "./src/MovieDetail";

const Project= createStackNavigator({
  Listing: {
   screen: Movielisting
   
  },
  Detail: {
   screen: MovieDetail
  }
},{
    initialRouteName: "Listing"
  });
export default createAppContainer(Project);