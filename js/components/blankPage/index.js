
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button, Icon, Left, Body, Right } from 'native-base';

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

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(BlankPage);
