import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps'
var accessToken = require("../config/strings");
var rider1 = require("../config/rider1");
var rider2 = require("../config/rider2");
var rider3 = require("../config/rider3");

import { openDrawer } from "../../actions/drawer";
// import HeaderContent from './../headerContent/';

import theme from "../../themes/base-theme";
import styles from "./styles";

const headerLogo = require("../../../images/Header-Logo.png");
const glow2 = require("../../../images/glow2.png");

class BlankPage extends Component {
  // eslint-disable-line
  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string
    })
  };

  constructor() {
    super();
    this.state = {
      presssBtn: "white",
      notPressBtn: "rgba(255,255,255,0.0)",
      name: "",
      coords: [],
      mode: "drive",
      estTime: false
    };
  }

  componentDidMount() {
    fetch(
      "http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=eda9f740-8b7e-4071-a680-821a1c3396fe",
      {
        method: "GET"
      }
    )
      .then(response => {
        console.log(response._bodyInit);
      })
      .catch(error => {
        console.error(error);
      });

    //Call for rider1
    fetch("https://sandbox-api.uber.com/v1.2/requests/estimate", {
      method: "POST",
      headers: {
        Authorization: accessToken,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        start_latitude: rider1.start_latitude,
        start_longitude: rider1.start_longitude,
        end_latitude: rider1.end_latitude,
        end_longitude: rider1.end_longitude
      })
    })
      .then(response => {
        console.log(response._bodyInit);
      })
      .catch(error => {
        console.error(error);
      });

    //Call for rider2
    fetch("https://sandbox-api.uber.com/v1.2/requests/estimate", {
      method: "POST",
      headers: {
        Authorization: accessToken,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        start_latitude: rider2.start_latitude,
        start_longitude: rider2.start_longitude,
        end_latitude: rider2.end_latitude,
        end_longitude: rider2.end_longitude
      })
    })
      .then(response => {
        console.log(response._bodyInit);
      })
      .catch(error => {
        console.error(error);
      });

    //Call for rider3
    fetch("https://sandbox-api.uber.com/v1.2/requests/estimate", {
      method: "POST",
      headers: {
        Authorization: accessToken,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        start_latitude: rider3.start_latitude,
        start_longitude: rider3.start_longitude,
        end_latitude: rider3.end_latitude,
        end_longitude: rider3.end_longitude
      })
    })
      .then(response => {
        console.log(response._bodyInit);
      })
      .catch(error => {
        console.error(error);
      });
  }

  async getDirections(startLoc, destinationLoc, mode) {
    try {
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=AIzaSyCKAtoYP6wyS0wCX2v4eii_JtGzbWsKZ64&mode=${this
          .state.mode}`
      );
      let respJson = await resp.json();
      let points = this.decode(respJson.routes[0].overview_polyline.points);
      let coords = points.map((point, index) => {
        console.log(point.latitude);
        return {
          latitude: point.latitude,
          longitude: point.longitude
        };
      });
      this.setState({ coords: coords, estTime: true });
      return coords;
    } catch (error) {
      alert(error);
      return error;
    }
  }

  decode = function(t, e) {
    for (
      var n,
        o,
        u = 0,
        l = 0,
        r = 0,
        d = [],
        h = 0,
        i = 0,
        a = null,
        c = Math.pow(10, e || 5);
      u < t.length;

    ) {
      (a = null), (h = 0), (i = 0);
      do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
      while (a >= 32);
      (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
      do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
      while (a >= 32);
      (o = 1 & i ? ~(i >> 1) : i >> 1),
        (l += n),
        (r += o),
        d.push([l / c, r / c]);
    }
    return (d = d.map(function(t) {
      return { latitude: t[0], longitude: t[1] };
    }));
  };

  showEst() {
    if (!this.state.estTime) {
      console.log('error')
    } else if (this.state.estTime) {
      return (
        <View
          style={{
            height: 100,
            width: "100%",
            backgroundColor: "#F67423",
            position: "relative",
            zIndex: 10000,
            top: -150
          }}
        >
          <Text>ferferf</Text>
        </View>
      );
    }
  }

  render() {
    // eslint-disable-line class-methods-use-this
    // console.log(this.state.coords);
    return (
      <Container theme={theme}>
        {/* <Header>
            <Left>
              <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                <Icon active name="menu" />
              </Button>
            </Left>
          </Header> */}
        <Content>
          <View
            style={{
              paddingTop: 30,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#0383C1",
              flexDirection: "row"
            }}
          >
            <Button
              transparent
              style={styles.btnHeader}
              onPress={this.props.openDrawer}
            >
              <Icon active name="menu" style={{ color: "white" }} />
            </Button>
            <View>
              <View style={{ flexDirection: "row", paddingBottom: 10 }}>
                <Icon
                  name="md-arrow-dropdown-circle"
                  style={{ color: "white", paddingRight: 10, fontSize: 20 }}
                />
                <View
                  style={{
                    backgroundColor: "white",
                    width: 230,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ backgroundColor: "rgba(255,255,255,0.0)" }}>
                    Home
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 10 }}>
                <Icon
                  name="md-pin"
                  style={{ color: "white", paddingRight: 15, fontSize: 20 }}
                />
                <View
                  style={{
                    backgroundColor: "white",
                    width: 230,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ backgroundColor: "rgba(255,255,255,0.0)" }}>
                    Work
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 7,
              paddingBottom: 7,
              backgroundColor: "black",
              zIndex: 1000,
              justifyContent: "space-between"
            }}
          >
            <TouchableOpacity
              style={{
                paddingTop: 5,
                paddingBottom: 5,
                flexDirection: "row",
                marginRight: 30,
                backgroundColor: this.state.notPressBtn,
                paddingLeft: 10,
                paddingRight: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
              onPress={() => {
                this.getDirections("40.1884979, 29.061018", "41.0082,28.9784");
                
              }}
            >
              <Icon
                name="md-car"
                style={{ color: "white", paddingRight: 10, fontSize: 20 }}
              />
              <Icon name="md-train" style={{ color: "white", fontSize: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingTop: 5,
                paddingBottom: 5,
                flexDirection: "row",
                marginRight: 30,
                backgroundColor: this.state.notPressBtn,
                paddingLeft: 10,
                paddingRight: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
            >
              <Icon
                name="md-bus"
                style={{ color: "white", paddingRight: 10, fontSize: 20 }}
              />
              <Icon name="md-train" style={{ color: "white", fontSize: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingTop: 5,
                paddingBottom: 5,
                flexDirection: "row",
                marginRight: 30,
                backgroundColor: this.state.notPressBtn,
                paddingLeft: 10,
                paddingRight: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5
              }}
              onPress={() => {
                this.setState({ mode: "walk" });
              }}
            >
              <Icon
                name="md-walk"
                style={{ color: "white", paddingRight: 10, fontSize: 20 }}
              />
              <Icon name="md-train" style={{ color: "white", fontSize: 20 }} />
            </TouchableOpacity>
          </View>
          <MapView
            style={{ height: 600, width: "100%" }}
            initialRegion={{
              latitude: 41.0082,
              longitude: 28.9784,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <MapView.Polyline
              coordinates={this.state.coords}
              strokeWidth={4}
              strokeColor="blue"
            />
          </MapView>
            <View
            style={{
              height: 90,
              width: "100%",
              backgroundColor: "#F67423",
              position: "relative",
              zIndex: 10000,
              top: -90,
              bottom: 0,
            }}
          >
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 30}}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>$6 - 9</Text>
                <Text style={{color: 'white', fontSize: 13}}>Price Estimate</Text>
              </View>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}> 1hr 30min </Text>
                <Text style={{color: 'white', fontSize: 13}}>ETA</Text>
              </View>
              <Icon name="ios-arrow-forward" />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer())
  };
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, bindAction)(BlankPage);
