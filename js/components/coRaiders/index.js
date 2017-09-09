
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


class CoRaiders extends Component {
  state = {
     names: [
        {
           id: 0,
           name: 'Raider Name -1',
           time: '10:30 AM'
        },
        {
           id: 1,
           name: 'Raider Name -2',
           time: '10:35 AM'
        },
        {
           id: 2,
           name: 'Raider Name -3',
           time: '10:40 AM'
        }
     ]
  }

  alertItemName = (item) => {
    // alert('Booked - '+item.name)
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
           {
              this.state.names.map((item, index) => (
                 <TouchableOpacity
                    key = {item.id}
                    style = {styles.container}
                    onPress = {() => this.alertItemName(item)}>
                    
                    <Text style = {styles.text}>
                       {item.name} 
                    </Text>
                    <Text style = {styles.text}>
                       {item.time} 
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

export default connect(mapStateToProps, bindAction)(CoRaiders);

 

const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     backgroundColor: '#000000',
     alignItems: 'center',
  },
  text: {
     color: '#00FF00'
  }
})