import React, { Component } from "react";
import {
  Image,
  Platform,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
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

class UberAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <View>
        <Header style={{ backgroundColor: '#0383C1', height: 60 }}>
          <Left>
            <Icon
              andriod="android-arrow-back"
              ios="ios-arrow-back"
              name="back-arrow"
              onPress={() => Actions.pop()}
            />
          </Left>
          <Body>
              <Text style={{ color: 'white' }}>Uber Account</Text>
          </Body>
          <Right>
              <Button transparent />
          </Right>
        </Header>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
          <View style={{}}>
            <Text style={{ fontSize: 30, color: '#EEE' }}>UBER</Text>
          </View>
          <View>
            <Item
              style={{
                backgroundColor: "transparent",
                marginTop: 40,
                borderWidth: 2,
                borderColor: "#eee",
                marginBottom: 10,
                width: "90%",
                alignSelf: "center",
                borderTopWidth: 2,
                borderTopColor: "#eee",
                borderLeftWidth: 2,
                borderLeftColor: "#eee",
                borderRightWidth: 2,
                borderRightColor: "#eee",
                borderRadius: 5
              }}
            >
              <Input
                placeholder="Email"
                placeholderTextColor="#eee"
                autoCapitalize="none"
                style={{ color: '#eee' }}
                onTextChange={email => this.setState({ email })}
              />
            </Item>

            <Item
              style={{
                backgroundColor: 'transparent',
                marginTop: 10,
                borderWidth: 2,
                borderColor: '#eee',
                marginBottom: 30,
                width: '90%',
                alignSelf: 'center',
                borderTopWidth: 2,
                borderTopColor: '#eee',
                borderLeftWidth: 2,
                borderLeftColor: '#eee',
                borderRightWidth: 2,
                borderRightColor: '#eee',
                borderRadius: 5,
              }}
            >
              <Input
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#eee"
                autoCapitalize="none"
                style={{ color: '#eee' }}
                onTextChange={password => this.setState({ password })}
              />
            </Item>
          </View>
          <Button large block style={{ width: '90%', backgroundColor: '#eee', alignSelf: 'center' }}>
              <Text style={{ color: 'black' }}>LOG IN</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default UberAccount;
