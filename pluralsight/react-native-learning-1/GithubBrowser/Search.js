'use strict';

import React, { Component } from 'react';
import buffer from 'buffer';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import AuthService from './AuthService';
import SearchResults from './SearchResults';

export default class Search extends Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.setState({
            searchQuery: text
          })}
          style={styles.input}
          placeholder="Search Query"
          autoComplete="none"
          autoCapitalize="none" />
        <TouchableHighlight
          onPress={this.onSearchPressed.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}> Search </Text>
        </TouchableHighlight>
      </View>
    );
  }

  onSearchPressed(){
    console.log("Attempting to search for: " + this.state.searchQuery);
    this.props.navigator.push({
      component: SearchResults,
      title: "Results",
      passProps: {
          searchQuery: this.state.searchQuery
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingTop:100,
    marginTop: 100
  },
  logo: {
    width: 100,
    height: 100
  },
  heading: {
    marginTop: 10,
    marginBottom: 40,
    fontWeight: "bold",
    fontSize: 30
  },
  input:{
    height: 50,
    width: 300,
    marginTop: 10,
    padding:4,
    fontSize:18,
    borderWidth:1,
    borderColor: '#48bbee'
  },
  button:{
    height: 50,
    backgroundColor: '#48bbec',
    width: 300,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },


});
