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
import AuthService from './AuthService'

export default class Login extends Component<{}>{

  constructor(props){
    super(props);
    this.state = {
      showProgress: false
    }
  }

  getErrorLabel(){
    var errorView = <View />;

    if(!this.state.success && this.state.badCredentials){
      errorView = <Text style={styles.error}>
        User name and password did not work
        </Text>;
    }

    if(!this.state.success && this.state.unknownError){
      errorView = <Text style={styles.error}>
        Unkown error
        </Text>;
    }

    return errorView;
  }

  render(){

    const errorLabel = this.getErrorLabel();

    return(
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./images/github-logo.png')} />
        <Text style={styles.heading}> Github browser </Text>
        <TextInput
          onChangeText={(text) => this.setState({
            username: text
          })}
          style={styles.input}
          placeholder="Github username"
          autoCapitalize="none" />
        <TextInput style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          placeholder="Github password"
          autoCapitalize="none"
          autoComplete="none"
          secureTextEntry={true}/>
        <TouchableHighlight
          onPress={this.onLoginPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}> Log in </Text>
        </TouchableHighlight>
        {errorLabel}
        <ActivityIndicator
          animating={this.state.showProgress}
          size="large"
          style={styles.loader}/>
      </View>
    );
  }

  onLoginPressed(){
    console.log("Clicked button with username: " + this.state.username);
    this.setState({ showProgress: true});

    var authService = new AuthService();
    authService.login({
      username: this.state.username,
      password: this.state.password
    }, (results)=> {
      console.log("What is going on:" + JSON.stringify(results));
      this.setState({showProgress: false});
      this.setState(results);
      if(results.success && this.props.onLogin){
        this.props.onLogin();
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
  loader: {
    marginTop: 20
  },
  error: {
    color: 'red',
    paddingTop: 10
  }

});
