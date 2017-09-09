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
  Label
} from "native-base";
import * as firebase from "firebase";

class UserProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      homeAddress: '',
      workAddress: '',
      timeToLeaveForWork: '',
      timeUserLeaveWork: '',
      busStation: '',
      trainStation: '',
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit() {
    const that = this;
    if (that.state.username !== "" && that.state.homeAddress !== "") {
      firebase
        .database()
        .ref("user/")
        .push({
          username: that.state.username,
          homeAddress: that.state.homeAddress,
          workAddress: that.state.workAddress,
          timeToLeaveForWork: that.state.timeToLeaveForWork,
          timeUserLeaveWork: that.state.timeUserLeaveWork,
          busStation: that.state.busStation,
          trainStation: that.state.trainStation,
        });
    } else {
      alert('Please fill all fields');
    }
  }

  resetState() {
    this.setState({
      username: '',
      homeAddress: '',
      workAddress: '',
      timeToLeaveForWork: '',
      timeUserLeaveWork: '',
      busStation: '',
      trainStation: '',
    });
  }

  render() {
    return (
      <Content>
        <ScrollView>
          <KeyboardAvoidingView behavior={'padding'}>
            <Form>
              <Item underline floatingLabel>
                <Label>Username</Label>
                <Input value={this.state.username} onChangeText={username => this.setState({ username })} style={{ paddingLeft: 15 }} />
              </Item>
              <Item underline floatingLabel>
                <Label>Home Address</Label>
                <Input
                  value={this.state.homeAddress}
                  onChangeText={homeAddress => this.setState({ homeAddress })}
                  style={{ paddingLeft: 15 }}
                />
              </Item>
              <Item underline floatingLabel>
                <Label>Work Address</Label>
                <Input
                  value={this.state.workAddress}
                  onChangeText={workAddress => this.setState({ workAddress })}
                  style={{ paddingLeft: 15 }}
                />
              </Item>
              <Item underline floatingLabel>
                <Label>Time you leave for work</Label>
                <Input
                  value={this.state.timeToLeaveForWork}
                  onChangeText={timeToLeaveForWork =>
                    this.setState({ timeToLeaveForWork })}
                  style={{ paddingLeft: 15 }}
                />
              </Item>
              <Item underline floatingLabel>
                <Label>Time you leave work</Label>
                <Input
                  value={this.state.timeUserLeaveWork}
                  style={{ paddingLeft: 15 }}
                  onChangeText={timeUserLeaveWork =>
                    this.setState({ timeUserLeaveWork })}
                />
              </Item>
              <Item underline floatingLabel>
                <Label>Preferred Bus Station</Label>
                <Input
                  value={this.state.busStation}
                  style={{ paddingLeft: 15 }}
                  onChangeText={busStation => this.setState({ busStation })}
                />
              </Item>
              <Item underline floatingLabel>
                <Label>Preferred Train Station</Label>
                <Input
                  value={this.state.trainStation}
                  style={{ paddingLeft: 15 }}
                  onChangeText={trainStation => this.setState({ trainStation })}
                />
              </Item>
            </Form>
            <Button
              large
              block
              full
              onPress={() => {
                this.handleOnSubmit();
                Actions.userProfile({ profileData: this.state });
                this.resetState();
              }}
              style={{ marginTop: 15 }}
            >
              <Text>Submit</Text>
            </Button>
          </KeyboardAvoidingView>
        </ScrollView>
      </Content>
    );
  }
}

export default UserProfileForm;
