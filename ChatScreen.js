// 第二個畫面
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Image
} from 'react-native';

import {
    StackNavigator
} from 'react-navigation';

// 將此畫面 export 出去
export class ChatScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
      title: `Chat with ${navigation.state.params.user}`,
  });

  /*
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  */

  render() {

    const { params } = this.props.navigation.state;

    return (
        <View>
            <Text>Chat with {params.user} </Text>

            <Image source={require('./img/my-icon.png')} style={{height: 40, width: 40}}/>

            <Image source={require('./img/background.jpg')} style={{width: 200, height: 200, borderRadius: 20}} >
                <Text>Text On Images</Text>
            </Image>

            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
               style={{width: 300, height: 300, borderRadius: 150}} />
        </View>
    );
  }
}

// export {ChatScreen};