import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { openDrawer } from '../actions/drawer';

import theme from '../themes/base-theme';

const signUp = require('../../images/BG-signUp.png');
const headerLogo = require('../../images/Header-Logo.png');

class Details extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container>
          <Content>
          <View
            style={{
              height: 90,
              width: "100%",
              backgroundColor: "#F67423",
            }}
          >
            <View style={{flexDirection: 'row',  marginTop: 30, paddingLeft: 25}}>
                <Icon name="md-car" style={{color: 'white', fontSize: 20}} />
                <Text style={{color: 'white'}}> - </Text>
                <Icon name="md-train" style={{color: 'white', fontSize: 20, paddingRight: 30}} />
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>$6 - 9</Text>
                <Text style={{color: 'white', fontSize: 13}}>Price Estimate</Text>
              </View>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}> 1hr 30min </Text>
                <Text style={{color: 'white', fontSize: 13}}>ETA</Text>
              </View>
              <Icon name="ios-arrow-forward" />
            </View>

            <View>
                <Image source={require('../../images/details2.png')} style={{width: '100%', height: 600}}/>
            </View>
          </View>
          </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Details);