'use strict'

import buffer from 'buffer';
import {AsyncStorage} from 'react-native';
import _ from 'lodash';

const authKey = "auth";
const userKey = "user";

export default class AuthService{

  getAuthInfo(cb){
    AsyncStorage.multiGet([authKey, userKey], (err,val)=>{
      if(err){
        return cb(err);
      }

      if(!val){
        return cb();
      }

      var zippedObj = _.fromPairs(val);
      console.log ("Zipped Object: " + zippedObj[authKey]);
      if(!zippedObj[authKey]){
        return cb();
      }

      var authInfo = {
        header: {
          Authorization: 'Basic ' + zippedObj[authKey]
        },
        user: JSON.parse(zippedObj[userKey])
      }

      return cb(null, authInfo);
    })
  }

  login(credentials, cb){
    var b = new buffer.Buffer(credentials.username + ":" + credentials.password);
    var encodedAuth = b.toString('base64');

    fetch('https://api.github.com/user', {
      headers: {
        'Authorization' : 'Basic ' + encodedAuth
      }
    })
    .then((response) => {
      if(response.status >= 200 && response.status < 300){
        return response
      }
      throw {
        badCredentials: response.status == 401,
        unknownError: response.status != 401
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      AsyncStorage.multiSet( [
        [authKey, encodedAuth ],
        [userKey, JSON.stringify(results)]
      ], (err)=> {
        if(err){
          throw err;
        }
        return cb( Object.assign({success: true}, results));
      })
    })
    .catch((err)=> {
      return cb(Object.assign({success: false}, err));
    })
    .finally(()=> {
      // do some clean up?
    })
  }
}
