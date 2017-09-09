import React, { Component } from 'react';
import { Image, Platform, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Item, Input, Button, Icon, View, Left, Right, Form, Label } from 'native-base';
import * as firebase from 'firebase';

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
        if (that.state.username !== '' && that.state.homeAddress !== '') {
            firebase.database().ref('user/').push({
                username: that.state.username,
                homeAddress: that.state.homeAddress,
                workAddress: that.state.workAddress,
                timeToLeaveForWork: that.state.timeToLeaveForWork,
                timeUserLeaveWork: that.state.timeUserLeaveWork,
                busStation: that.state.busStation,
                trainStation: that.state.trainStation,
            });
        } else {
            alert('Please fill all fields')
        }
    }

    render() {
        return (
            <Content>
                <ScrollView>
                    <KeyboardAvoidingView behavior={'padding'}>
                        <Form>
                            <Item underline floatingLabel>
                                <Label>Username</Label>
                                <Input 
                                onChangeText={username => this.setState({ username })}
                                />
                            </Item>
                            <Item underline floatingLabel>
                                <Label>Home Address</Label>
                                <Input 
                                onChangeText={homeAddress => this.setState({ homeAddress })}
                                />
                            </Item>
                            <Item underline floatingLabel>
                                <Label>Work Address</Label>
                                <Input
                                onChangeText={workAddress => this.setState({ workAddress })}
                                />
                            </Item>
                            <Item underline floatingLabel>
                                <Label>Time you leave for work</Label>
                                <Input
                                onChangeText={timeToLeaveForWork => this.setState({ timeToLeaveForWork })}
                                />
                            </Item>
                            <Item underline floatingLabel>
                                <Label>Time you leave work</Label>
                                <Input
                                onChangeText={timeUserLeaveWork => this.setState({ timeUserLeaveWork })}
                                />
                            </Item>
                            <Item underline floatingLabel>
                                <Label>Preferred Bus Station</Label>
                                <Input
                                onChangeText={busStation => this.setState({ busStation })}
                                />
                            </Item>
                            <Item underline floatingLabel>
                                <Label>Preferred Train Station</Label>
                                <Input
                                onChangeText={trainStation => this.setState({ trainStation })}
                                />
                            </Item>
                        </Form>
                        <Button large block full onPress={() => this.handleOnSubmit()} style={{ marginTop: 15 }}>
                            <Text>Submit</Text>
                        </Button>
                    </KeyboardAvoidingView>
                </ScrollView>
            </Content>
        );
    }
}

export default UserProfileForm;