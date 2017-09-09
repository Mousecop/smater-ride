
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';


const signUp = require('../../../images/BG-signUp.png');
const headerLogo = require('../../../images/Header-Logo.png');

class Home extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
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

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
