import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Linking } from 'react-native';
import firebase from 'firebase';
import {createStackNavigator, createAppContainer, createBottomTabNavigator,} from 'react-navigation';

import { Header, Button, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import HomeScreen from './components/HomeScreen'
import QRScanner from './components/QRScanner'
import MainScreen from './components/MainScreen'
import BottomNavigator from './components/BottomNavigator'
import Settings from './components/Settings'
import Owner from './components/Owner'
import RecentScanned from './components/RecentScanned'


const MainNavigator = createStackNavigator({
  Login: LoginForm,
  Signup: SignupForm,
  HomeSc: HomeScreen,
  QRScanner: QRScanner,
  MainScreen: MainScreen,
  BottomNavigator: BottomNavigator,
  Settings: Settings,
  Owner: Owner,
  RecentScanned: RecentScanned
});

const App = createAppContainer(MainNavigator);

export default App;


// export default class App extends Component {
//   state = {
//     loggedIn: false
//   }

//   componentWillMount() {
//     firebase.initializeApp({
//       apiKey: "AIzaSyDYg6dhnjGXu0fn5DZ8PPE16C99eiBmLqc",
//       authDomain: "rnauthapp-e84d1.firebaseapp.com",
//       databaseURL: "https://rnauthapp-e84d1.firebaseio.com",
//       projectId: "rnauthapp-e84d1",
//       storageBucket: "rnauthapp-e84d1.appspot.com",
//       messagingSenderId: "685951200040",
//       appId: "1:685951200040:web:bef2d64dd3509ab5"
//     })

//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({ loggedIn: true });
//       }
//       else {
//         this.setState({ loggedIn: false });
//       }
//     });
//   }

//   renderContent() {
//     if (this.state.loggedIn) {
//       return (
//         <CardSection>
//           <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
//         </CardSection>
//       );
//     }

//     return <AppContainer />
//   }

//   render() {
//     return (
//       <Card>

//         {/* <Header headerText='Authentication' /> */}
        
//         {this.renderContent()}
      
//       </Card>
//     );
//   }
// }



