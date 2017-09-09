
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button, Icon, Left, Body, Right } from 'native-base';
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
      <Container theme={theme} style={{ backgroundColor: '#01cfa1' }}>
        <Image source={glow2} style={styles.container} >
          <Header>
            <Left>
              <Button transparent style={styles.btnHeader} onPress={() => Actions.pop()}>
                <Icon active name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Image source={headerLogo} style={styles.imageHeader} />
            </Body>
            <Right>
              <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                <Icon active name="menu" />
              </Button>
            </Right>
          </Header>

          <Content />
        </Image>
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
