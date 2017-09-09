
import React, { Component } from 'react';
import { Image, View, TouchableOpacity,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';

const signUp = require('../../../images/BG-signUp.png');
const headerLogo = require('../../../images/Header-Logo.png');


class ShareCodes extends Component {
  state = {
     names: [
        {
           id: 0,
           name: 'Share Code - XYZABC',
        },
        {
           id: 1,
           name: 'Share Code-123456',
        },
        {
           id: 2,
           name: 'Share Code-wwATL',
        }
     ]
  }

  alertItemName = (item) => {
     Actions.coRaiders();
  }
  render() {
     return (
      <Container theme={theme}>
      <Header>
        <Left>
          <Button transparent onPress={this.props.openDrawer} >
            <Icon active name="menu" />
          </Button>
        </Left>
      </Header>
      <Content padder>
      <View> 
      <Text>
                      RRR
       </Text>
           {
              this.state.names.map((item, index) => (
                 <TouchableOpacity
                    key = {item.id}
                    style = {styles.container}
                    onPress = {() => this.alertItemName(item)}>
                    
                    <Text style = {styles.text}>
                       {item.name}
                    </Text>
                 </TouchableOpacity>
              ))
           }
        </View>
      </Content> 
        </Container>
     )
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

export default connect(mapStateToProps, bindAction)(ShareCodes);

 

const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     backgroundColor: '#FF0000',
     alignItems: 'center',
  },
  text: {
     color: '#FF0000'
  }
})