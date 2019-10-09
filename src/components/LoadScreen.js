import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';
import {  Spinner } from './common';

import { CameraKitCameraScreen } from 'react-native-camera-kit';

//redux
import { bindActionCreators } from "redux";
import { ownerAsync } from "../store/actions";
import { getOwnersDataAsync } from "../store/actions";
import { getPoliceDataAsync } from "../store/actions";
import { invoiceAsync } from "../store/actions";
import { vehicleAsync } from "../store/actions";
import { connect } from "react-redux";

class QRScanner extends Component {
  static navigationOptions = {
    header: null
  }

  constructor() {
    super();
    this.state = {
      QR_Code_Value: '',
      Start_Scanner: false,
      loading: false
    };
  } 



  async onQR_Code_Scan_Done (QR_Code){
    this.setState({ QR_Code_Value: QR_Code });
    this.setState({ Start_Scanner: false, loading: false});
    console.log("this.state.QR_Code_Value")
    console.log(this.state.QR_Code_Value)

    console.log("anssssssssssssssssssssssssssssssssssssss33333344444444444443")
    res = this.state.QR_Code_Value.split("-");
    console.log(res)
    if( this.state.QR_Code_Value) {
    await this.props.ownerAsync(res[0]);
    await this.props.vehicleAsync(res[1]);
    await this.props.invoiceAsync(res[0]);
    // this.setState({count: ++this.state.count})
    this.props.navigation.navigate('MainScreen', { qrCodeValue: this.state.QR_Code_Value })
    }

   
    // if( this.state.QR_Code_Value && (this.state.count > 0)) {
    // this.props.navigation.navigate('MainScreen', { qrCodeValue: this.state.QR_Code_Value , name: 'AIjaz anas' })
    // }
  }


  render() {
    console.log("agyaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

    return (
      <View style={{ flex: 1 }}>
        {!this.state.loading ? (
        <CameraKitCameraScreen
          showFrame={true}
          scanBarcode={true}
          laserColor={'#FF3D00'}
          frameColor={'#00C853'}
          colorForScannerFrame={'white'}
          onReadCode={event =>
          this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
        }
        />
        ) :
        (
          <Spinner size="small" />
        )}

      </View>
    );
  }
}

const mapStateToProps = state => ({
  owner: state.owner.ownerEntity,
  owners: state.ownersData.ownersEntities
});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      ownerAsync,
      getOwnersDataAsync,
      getPoliceDataAsync,
      vehicleAsync,
      invoiceAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QRScanner);