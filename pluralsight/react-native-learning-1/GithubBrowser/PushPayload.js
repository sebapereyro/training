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
import moment from 'moment';

export default class PushPayload extends Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource : ds.cloneWithRows(props.pushEvent.payload.commits)
    }
  }

  renderRow(rowData){
    return(
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderColor: '#D7D7D7',
          borderBottomWidth: 1,
          paddingTop: 20,
          paddingBottom: 20,
          padding: 10
        }}>
        <Text style={{paddingBottom: 5 }}>
          <Text style={styles.bold}>{rowData.sha.substring(0,6)}</Text> - {rowData.message}
        </Text>
      </View>
    );
  }

  render(){
    return(
      <View style={{
        flex: 1,
        paddingTop: 80,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Image
          source={{uri: this.props.pushEvent.actor.avatar_url}}
          style={{
            height:120,
            width:120,
            borderRadius:60
          }}
        />
        <Text style={{
          paddingTop: 20,
          paddingBottom: 20,
          fontSize:20
        }}>
          {moment(this.props.pushEvent.created_at).fromNow()}
        </Text>
        <Text><Text style={styles.bold}>{this.props.pushEvent.actor.login}</Text> pushed to</Text>
        <Text><Text style={styles.bold}>{this.props.pushEvent.payload.ref.replace('refs/heads', '')}</Text></Text>
        <Text>at <Text style={styles.bold}>{this.props.pushEvent.repo.name}</Text></Text>
        <Text style={{
          paddingTop: 40,
          fontSize: 20
        }}>{this.props.pushEvent.payload.commits.length} Commits</Text>
        <ListView
          contentInset={{
            top: -50
          }}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "800",
    fontSize: 16
  }
});
