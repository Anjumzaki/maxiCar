import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Linking, TouchableOpacity, PermissionsAndroid } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

var font = 'Pacifico-Regular';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    loggedIn: false
  }

  componentWillMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
  }

  open_QR_Code_Scanner = () => {

    var that = this;

    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA, {
              'title': 'Camera App Permission',
              'message': 'Camera App needs access to your camera '
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {

            // that.setState({ QR_Code_Value: '' });
            // that.setState({ Start_Scanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err", err);
          console.warn(err);
        }
      }
      requestCameraPermission();
    } else {
      // that.setState({ QR_Code_Value: '' });
      // that.setState({ Start_Scanner: true });
    }
  }

  onButtonClick() {
    this.open_QR_Code_Scanner();
    this.props.navigation.navigate('QRScanner')
  }

  render() {
    return (

      <Card style={{ height: "100%" }}>
        <Image
          style={{ width: "100%", height: 120, marginTop: 30, marginBottom: 30, alignItems: 'center' }}
          source={require('../images/logo-MexiCar.png')}
        />
        <View >

        {/* <RNCamera
          ref={ref => {
            this.camera = ref;
          }}

          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}

          style={{
            flex: 1,
            width: '100%',
          }}
        >
        </RNCamera> */}
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 200,
              height: 200,
              backgroundColor: '#0095cd',
              borderRadius: 100,
              alignSelf: 'center',
              marginTop: 30,
              marginBottom: 30,
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowOpacity: 0.9,
              elevation: 15,
              shadowRadius: 10,
              shadowOffset: { width: 1, height: 50 },

            }}
            onPress={() => this.onButtonClick()}
          >

            <Text>
              <Icon name="qrcode-scan" size={80} color="#000" />
            </Text>
          </TouchableOpacity>


          <Text style={{
            fontSize: 20,
            alignSelf: 'center',
            marginBottom: 150,
            fontFamily: font,
            fontSize: 24
          }}>Scan Now!</Text>

          {/* <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection> */}
        </View>
      </Card >


    );
  }
}



