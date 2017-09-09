import React, { Component } from "react";
import {
  Image,
  Platform,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity
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

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        workAddress: this.props.profileData.workAddress,
        homeAddress: this.props.profileData.homeAddress,
    }
  }

  render() {
    const props = this.props.profileData;
    return (
      <View>
        <Header style={{ backgroundColor: '#84C3E2', height: 60 }}>
          <Left>
            <Button transparent />
          </Left>
          <Body>
            <Text>Account</Text>
          </Body>
          <Right>
            <Button transparent />
          </Right>
        </Header>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
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
              name="md-home"
              style={{ color: 'black', marginHorizontal: 10 }}
            />
            <Text style={{ color: 'black' }}>
              Home -{' '}
              <Text style={{ color: '#F67423' }}>{props.homeAddress || this.state.homeAddress}</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 15,
            }}
          >
            <Icon
              name="md-briefcase"
              style={{ color: 'black', marginHorizontal: 10 }}
            />
            <Text style={{ color: 'black' }}>
              Work -{' '}
              <Text style={{ color: '#F67423' }}>{props.workAddress || this.state.workAddress}</Text>
            </Text>
          </View>
          <TouchableOpacity onPress={() => Actions.martaAccount()}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}
            >
              <Icon
                name="md-train"
                style={{ color: 'black', marginHorizontal: 10 }}
              />
              <Text style={{ color: 'black' }}>Marta Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.uberAccount()}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}
            >
              <Icon
                name="md-car"
                style={{ color: 'black', marginHorizontal: 10 }}
              />
              <Text style={{ color: 'black' }}>Uber Authorization</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default UserProfile;
