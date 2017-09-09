
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { Container, Content, Text, Icon, ListItem } from 'native-base';

import { Actions } from 'react-native-router-flux';
import { closeDrawer } from '../../actions/drawer';
import styles from './style';

const singUp = require('../../../images/BG-signUp.png');

class SideBar extends Component {


  render() {
    return (
      <Container style={{ backgroundColor: '#0383C1' }}s>
          <Content style={styles.drawerContent}>
              <ListItem
                button iconLeft
                onPress={() => { Actions.home(); this.props.closeDrawer(); }}
                style={styles.links}
              >
                <Icon name="home" />
                <Text style={styles.linkText} >HOME</Text>
              </ListItem>

              <ListItem
                button iconLeft
                onPress={() => { Actions.blankPage(); this.props.closeDrawer(); }}
                style={styles.links}
              >
                <Icon name="map" />
                <Text style={styles.linkText}>MAP</Text>
              </ListItem>
              <ListItem
                button iconLeft
                onPress={() => { Actions.userProfile(); this.props.closeDrawer(); }}
                style={styles.links}
              >
              <Icon name='md-person' />
              <Text style={styles.linkText}>Profile</Text>
              </ListItem>
          </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(SideBar);
