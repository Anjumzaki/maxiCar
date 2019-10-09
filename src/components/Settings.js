import React, { Component } from 'react';
// import { BottomNavigation } from 'react-native-paper';
import firebase from 'firebase';
import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';
// import { withNavigation } from 'react-navigation';

const logout = (props) => {
  firebase.auth().signOut();
  props.navigation.navigate('Login');
}

const Settings = (props) => (
  <View style={styles.MainContainer}>
    {/* <TouchableOpacity
      onPress={() => onButtonClick(props)}
      style={styles.button}>
      <Text style={{ color: '#FFF', fontSize: 14 }}>
        Recent Scanned
      </Text>
    </TouchableOpacity> */}
    <TouchableOpacity
      onPress={() => logout(props)}
      style={styles.button}>
      <Text style={{ color: '#FFF', fontSize: 14 }}>
        Logout
      </Text>
    </TouchableOpacity>
  </View>
);

export default Settings;



const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0095cd',
    alignItems: 'center',
    padding: 12,
    width: 300,
    marginTop: 14
  },
});
