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
  ActivityIndicator,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';
import Feed from './Feed';
import Search from './Search';


export default class AppContainer extends Component<{}>{

  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'feed'
    }
  }

  render(){

    return(
      <TabBarIOS style={styles.tabBar}>
        <TabBarIOS.Item
          title="Feed"
          selected={this.state.selectedTab == 'feed'}
          icon={require('./images/ic_rss_feed.png')}
          onPress={()=>this.setState({selectedTab: 'feed'})}>
          <NavigatorIOS
            style={{
              flex: 1
            }}
            initialRoute={{
              component: Feed,
              title: 'Feed'
            }}
          >
          </NavigatorIOS>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Search"
          selected={this.state.selectedTab == 'search'}
          icon={require('./images/ic_search.png')}
          onPress={()=>this.setState({selectedTab: 'search'})}>
          <NavigatorIOS
            style={{
              flex: 1
            }}
            initialRoute={{
              component: Search,
              title: 'Search'
            }}
          >
          </NavigatorIOS>
        </TabBarIOS.Item>
      </TabBarIOS>
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
