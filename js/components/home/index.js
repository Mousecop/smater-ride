
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

import UserProfileForm from '../user-profile-form';


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
          <Header style={{ backgroundColor: '#84C3E2' }}>
            <Left>
              <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                <Icon active name="menu" />
              </Button>
            </Left>
          </Header>
          <Content padder>
            <UserProfileForm />
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
