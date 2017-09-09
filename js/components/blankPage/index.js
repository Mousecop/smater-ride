
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button, Icon, Left, Body, Right } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


import { openDrawer } from '../../actions/drawer';
// import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';


const headerLogo = require('../../../images/Header-Logo.png');
const glow2 = require('../../../images/glow2.png');

const mapStyle = [
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

class BlankPage extends Component { // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  constructor(){
    super();
    this.state = {
        presssBtn: 'white',
        notPressBtn: 'rgba(255,255,255,0.0)',
        name: ''
    }
}

  componentDidMount(){

    return fetch('http://66.228.50.212/main_smart_rider.js')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson.firstname)
    })
    .catch((error) => {
      console.error(error);
    });
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
            <View style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 7, paddingBottom: 7, backgroundColor: '#0383C1', zIndex: 1000, justifyContent: 'space-between'}}>
              <TouchableOpacity style={{paddingTop: 5, paddingBottom: 5, flexDirection: 'row', marginRight: 30, backgroundColor: this.state.notPressBtn, paddingLeft: 10, paddingRight:10, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                <Icon name="md-car" style={{color: 'black', paddingRight: 10, fontSize: 20}} />
                <Icon name="md-train" style={{color: 'black', fontSize: 20}} />
              </TouchableOpacity>
              <TouchableOpacity style={{paddingTop: 5, paddingBottom: 5, flexDirection: 'row', marginRight: 30, backgroundColor: this.state.notPressBtn, paddingLeft: 10, paddingRight:10, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                <Icon name="md-bus" style={{color: 'black', paddingRight: 10, fontSize: 20}} />
                <Icon name="md-train" style={{color: 'black', fontSize: 20}} />
              </TouchableOpacity>
              <TouchableOpacity style={{paddingTop: 5, paddingBottom: 5, flexDirection: 'row', marginRight: 30, backgroundColor: this.state.notPressBtn, paddingLeft: 10, paddingRight:10, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                <Icon name="md-walk" style={{color: 'black', paddingRight: 10,  fontSize: 20}} />
                <Icon name="md-train" style={{color: 'black', fontSize: 20}} />
              </TouchableOpacity>
            </View>
              <MapView
              ref="map"
              customMapStyle={mapStyle}
              style={{height: 600, width: '100%'}}
              provider={PROVIDER_GOOGLE}
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

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(BlankPage);
