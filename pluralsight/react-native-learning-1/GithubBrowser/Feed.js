'use strict';

import React, { Component } from 'react';
import buffer from 'buffer';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator,
  Image,
  TouchableHighlight
} from 'react-native';
import AuthService from './AuthService';
import PushPayload from './PushPayload';
import moment from 'moment';

export default class Feed extends Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource : ds,
      showProgress: true
    }
  }

  render(){
    if(this.state.showProgress){
      return(
        <View style={{
          flex: 1,
          justifyContent: 'center'
        }}>
        <ActivityIndicator
          size="large"
          animating={true}/>
        </View>
      )
    }

    return(
      <View style={{
        flex: 1,
        justifyContent: 'flex-start'
      }}>
        <ListView
          style={{
            marginTop: 50
          }}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }

  componentDidMount(){
    this.fetchFeed();
  }

  fetchFeed(){
    new AuthService().getAuthInfo((err, authInfo)=>{
      var url = 'https://api.github.com/users/'
        + authInfo.user.login
        + '/received_events';
      fetch(url, {
        headers: authInfo.header
      })
      .then((response)=> response.json())
      .then((responseData)=> {
        var feedItems = responseData.filter((ev)=> ev.type == 'PushEvent');
        console.log(feedItems);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(feedItems),
          showProgress: false
        });
      })
    });
  }

  pressRow(rowData){
    console.log(rowData);
    this.props.navigator.push({
      title: 'Push Event',
      component: PushPayload,
      passProps: {
        pushEvent: rowData
      }
    })
  }

  renderRow(rowData){
    return (
      <TouchableHighlight
        onPress={()=>this.pressRow(rowData)}
        underlayColor='#ddd'>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          padding: 20,
          alignItems: 'center',
          borderColor: '#D7D7D7',
          borderBottomWidth: 1,
        }}>
          <Image source={{uri: rowData.actor.avatar_url}}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25
            }}/>
          <View style={{
            paddingLeft: 20
          }}>
            <Text style={{backgroundColor: '#fff'}}>
              {moment(rowData.created_at).fromNow()}
            </Text>
            <Text style={{
                backgroundColor: '#fff',
                fontWeight: "600"
              }}>
              {rowData.actor.login}
            </Text>
            <Text style={{backgroundColor: '#fff'}}>
              {rowData.payload.ref.replace('refs/heads', '')}
            </Text>
            <Text style={{ backgroundColor: '#fff' }}>
              at <Text style={{fontWeight: "600"}}>{rowData.repo.name}</Text>
            </Text>
          </View>
        </View>
      </TouchableHighlight>

    );
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
    marginTop: 50,
  }

});
