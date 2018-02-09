import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import Login from './Login';
import AppContainer from './AppContainer';
import AuthService from './AuthService'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component<{}> {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      checkingAuth: true
    }
  }

  componentDidMount(){
    var authService = new AuthService();
    authService.getAuthInfo((err, authInfo)=>{
      console.log("authInfo: " + JSON.stringify(authInfo));
      this.setState({
        checkingAuth: false,
        isLoggedIn: authInfo != null
      });
    });

  }

  render() {
    if(this.state.checkingAuth){
      return(
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={styles.loader} />
        </View>
      );
    }
    var nextView = < View />;
    if(this.state.isLoggedIn){
      nextView = <AppContainer/>
    }else{
      nextView = <Login onLogin={this.onLogin.bind(this)} />;
    }
    return(nextView);
  }

  onLogin(){
    console.log("Calling it");
    this.setState({isLoggedIn: true});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
