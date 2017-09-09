
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Icon, View, Button } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class HeaderContent extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <View style={styles.header} >
        {/* <View style={styles.rowHeader}>
          <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
            <Icon name="ios-menu" />
          </Button>
        </View> */}
      </View>
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

export default connect(mapStateToProps, bindAction)(HeaderContent);
