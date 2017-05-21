/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert
} from 'react-native';

import * as firebase from "firebase";

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

export default class P20170411 extends Component {

    constructor(props) {
        super(props);
        this.state = { account: 'account@google.com',
                       password: 'passowrd'
        };

        firebase.initializeApp({
            apiKey: "AIzaSyDtW2Q6PTuWLAi8PugOeBfEmGOE2plBANk",
            authDomain: "rndemo-c23d6.firebaseapp.com",
            databaseURL: "https://rndemo-c23d6.firebaseio.com",
            storageBucket: "rndemo-c23d6.appspot.com"
        });
    }

    onSignupPress() {
            
        Alert.alert('onSignupPress');


        this.signup(this.state.account, this.state.password);
    }

    async signup(email, pass) {

        Alert.alert('signup');


        try {
            await firebase.auth()
                .createUserWithEmailAndPassword(email, pass);

            console.log("Account created");

            // Navigate to the Home page, the user is auto logged in

        } catch (error) {
            console.log(error.toString())
        }
    }

    // 
    render() {

        return (

          // 
          <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>

          <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', flex: 4, backgroundColor: 'red'}} >
              <Text style={{fontSize:60, }}>
              XXXX 系統
              </Text>
          </View>
        
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', flex: 2, width: 500, backgroundColor: 'powderblue'}} >

              <Text style={{fontSize:20, }}>
              帳號：
              </Text>

              <TextInput
                  style = {{height: 40, width:300, borderColor: 'gray', borderWidth: 0}}
                  onChangeText = {(text) => this.setState({account:text})}
                  value = {this.state.account}
              />

          </View>        
        
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', flex: 2, width: 500, backgroundColor: 'skyblue'}} >

              <Text style={{fontSize:20, }}>
              密碼：
              </Text>

              <TextInput
                  style = {{height: 40, width:300, borderColor: 'gray', borderWidth: 0}}
                  onChangeText = {(text) => this.setState({password:text})}
                  value = {this.state.password}
              />

          </View>

          <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', flex: 2, width: 500, backgroundColor: 'steelblue'}} >

              <Button state={{height:100, width:100}}
                onPress={onButtonPress}
                title="登入"
                accessibilityLabel="This sounds great!"
              />

              <Button state={{height:100, width:100}}
                onPress={() => this.onSignupPress()}
                title="註冊"
                accessibilityLabel="This sounds great!"
              />

          </View>
        </View>
    );
  }
}

/*
        {/*  
      <View style={styles.container}>
      </View>


        <Text style={{width: 300, height: 100, fontSize: 50, fontStyle: 'italic', color:'black', backgroundColor: 'powderblue'}}>
          XXXX 系統
        </Text>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

*/


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

AppRegistry.registerComponent('P20170411', () => P20170411);
