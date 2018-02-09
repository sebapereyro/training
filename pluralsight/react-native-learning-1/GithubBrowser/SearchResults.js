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

export default class SearchResults extends Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource : ds,
      showProgress: true,
      searchQuery: props.searchQuery
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
    this.doSearch();
  }

  doSearch(){
    console.log('Doing search for ', this.state.searchQuery);
    const url = 'http://api.github.com/search/repositories?q=' +
      encodeURIComponent(this.state.searchQuery);
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          repositories: responseData.repositories,
          dataSource: this.state.dataSource
            .cloneWithRows(responseData.items)
        });
      })
      .finally(()=> {
        this.setState({
          showProgress: false
        })
      });
  }

  renderRow(rowData){
    return (
      <View style={{
        padding: 20,
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
      }}>
        <Text style={{
            fontSize: 20,
            fontWeight: '600'
        }}>
          {rowData.full_name}
        </Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginBottom: 20
        }}>
          <View style={styles.repoCell}>
            <Image source={require('./images/github-logo.png')} style={styles.repoCellIcon}></Image>
            <Text style={styles.repoCellLabel}>
              {rowData.stargazers_count}
            </Text>
          </View>
          <View style={styles.repoCell}>
            <Image source={require('./images/github-logo.png')} style={styles.repoCellIcon}></Image>
            <Text style={styles.repoCellLabel}>
              {rowData.forks}
            </Text>
          </View>
          <View style={styles.repoCell}>
            <Image source={require('./images/github-logo.png')} style={styles.repoCellIcon}></Image>
            <Text style={styles.repoCellLabel}>
              {rowData.open_issues}
            </Text>
          </View>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  repoCell: {
    width: 50,
    alignItems: 'center'
  },
  repoCellIcon: {
    width: 20,
    height: 20
  },
  repoCellLabel: {
    textAlign: 'center'
  }
});
