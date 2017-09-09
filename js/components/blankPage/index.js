
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button, Icon, Left, Body, Right } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
var accessToken = require('../config/strings');
var rider1 = require('../config/rider1');
var rider2 = require('../config/rider2');
var rider3 = require('../config/rider3');

import { openDrawer } from '../../actions/drawer';
// import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';


const headerLogo = require('../../../images/Header-Logo.png');
const glow2 = require('../../../images/glow2.png');

class BlankPage extends Component { // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }


  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container theme={theme}>
        <Header>
            <Left>
              <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                <Icon active name="menu" />
              </Button>
            </Left>
          </Header>
        <Content>
            <View style={{flexDirection: 'row', padding: 20, position: 'absolute', backgroundColor: 'rgba(255,255,255,0.1)', zIndex: 1000}}>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 30}}>
                <Icon name="md-car" style={{color: 'black', paddingRight: 10}} />
                <Icon name="md-train" style={{color: 'black'}} />
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 30}}>
                <Icon name="md-bus" style={{color: 'black', paddingRight: 10}} />
                <Icon name="md-train" style={{color: 'black'}} />
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 30}}>
                <Icon name="md-walk" style={{color: 'black', paddingRight: 10}} />
                <Icon name="md-train" style={{color: 'black'}} />
              </TouchableOpacity>
            </View>
              <MapView
              ref="map"
              style={{height: 400, width: '100%'}}
              region={{
                latitude: 33.937640,
                longitude: -84.380100,
                latitudeDelta: 0.319429,
                longitudeDelta: 0.62392,
              }}>
        
            </MapView>
            </Content>
      </Container>
    );
  }
}

componentDidMount() {
    fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=eda9f740-8b7e-4071-a680-821a1c3396fe', {
        method: 'GET'
    })
        .then((response) => {
            console.log(response._bodyInit);
        })
        .catch((error) => {
            console.error(error);
        });

    //Call for rider1
    fetch('https://sandbox-api.uber.com/v1.2/requests/estimate', {
        method: 'POST',
        headers: {
            'Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "start_latitude": rider1.start_latitude,
            "start_longitude": rider1.start_longitude,
            "end_latitude": rider1.end_latitude,
            "end_longitude": rider1.end_longitude
        })
    })
    .then((response) => {
        console.log(response._bodyInit);
    })
    .catch((error) => {
        console.error(error);
    });

    //Call for rider2
    fetch('https://sandbox-api.uber.com/v1.2/requests/estimate', {
        method: 'POST',
        headers: {
            'Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "start_latitude": rider2.start_latitude,
            "start_longitude": rider2.start_longitude,
            "end_latitude": rider2.end_latitude,
            "end_longitude": rider2.end_longitude
        })
    })
    .then((response) => {
        console.log(response._bodyInit);
    })
    .catch((error) => {
        console.error(error);
    });

    //Call for rider3
    fetch('https://sandbox-api.uber.com/v1.2/requests/estimate', {
        method: 'POST',
        headers: {
            'Authorization': accessToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "start_latitude": rider3.start_latitude,
            "start_longitude": rider3.start_longitude,
            "end_latitude": rider3.end_latitude,
            "end_longitude": rider3.end_longitude
        })
    })
    .then((response) => {
        console.log(response._bodyInit);
    })
    .catch((error) => {
        console.error(error);
    });
    }
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(BlankPage);
