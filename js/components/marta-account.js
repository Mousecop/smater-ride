import React, { Component } from 'react';
import {
  Image,
  Platform,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  View,
  Left,
  Right,
  Form,
  Label,
  Header,
  Body
} from "native-base";
import * as firebase from "firebase";

class MartaAccount extends Component {
  render() {
    return (
      <View>
        <Header style={{ backgroundColor: '#84C3E2', height: 60 }}>
          <Left>
            <Icon
              andriod="android-arrow-back"
              ios="ios-arrow-back"
              name="back-arrow"
              onPress={() => Actions.pop()}
            />
          </Left>
          <Body>
              <Text style={{ color: 'white' }}>MARTA Account</Text>
          </Body>
          <Right>
              <Button transparent />
          </Right>
        </Header>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 30,
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 15,
            }}
          >
            <Icon
              name='md-card'
              style={{ color: 'black', marginHorizontal: 10 }}
            />
            <Text style={{ color: 'black' }}>Breeze Account</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 15,
            }}
          >
            <Icon
              name='md-train'
              style={{ color: 'black', marginHorizontal: 10 }}
            />
            <Text style={{ color: 'black' }}>Home Station</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MartaAccount;
