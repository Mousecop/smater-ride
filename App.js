import React from 'react';
import * as firebase from 'firebase';
import Setup from './js/setup';

const firebaseConfig = {
  apiKey: 'AIzaSyAT8lnLbmI-UIcue60Pd6BHtovAz2mWxVw',
  authDomain: 'omnitransport-86a22.firebaseapp.com',
  databaseURL: 'https://omnitransport-86a22.firebaseio.com/',
  projectId: 'omnitransport-86a22',
  storageBucket: 'omnitransport-86a22.appspot.com',
  messagingSenderId: '641010057336'
}
firebase.initializeApp(firebaseConfig);


export default class App extends React.Component {
  render() {
    return (
      <Setup />
    );
  }
}