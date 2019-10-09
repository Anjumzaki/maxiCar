import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';
import {  Spinner } from './common';

import { CameraKitCameraScreen , CameraKitCamera} from 'react-native-camera-kit';

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
      loading: false,
      result: ''
    };
  } 



   onQR_Code_Scan_Done (QR_Code){
    // this.setState({ QR_Code_Value: QR_Code });
    // this.setState({ Start_Scanner: false, loading: false});
    // console.log("this.state.QR_Code_Value")
    // console.log(this.state.QR_Code_Value)

    console.log("hello")
     res = QR_Code.split("-");
    // console.log(res)
     this.callData(res)
    // if( this.state.QR_Code_Value) {
        
    // }

   
    // if( this.state.QR_Code_Value && (this.state.count > 0)) {
    // this.props.navigation.navigate('MainScreen', { qrCodeValue: this.state.QR_Code_Value , name: 'AIjaz anas' })
    // }
  }

   callData(res){
     this.props.ownerAsync(res[0]);
     this.props.vehicleAsync(res[1]);
     this.props.invoiceAsync(res[0]);
     this.props.navigation.navigate('MainScreen', { qrCodeValue: this.state.QR_Code_Value })
  }

  onSuccess = (e) => {
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
    console.log("scan rese: ",e.data)
  }

  

  render() {
    console.log("agyaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    // react-native-camera-kit
    return (
      <View style={{ flex: 1 }}>
        {!this.state.loading ? (
        <CameraKitCameraScreen
          showFrame={false}
          scanBarcode={true}
          onReadCode={event =>
            this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
          }
          // onReadQRCode={(event) => console.log("sacn res:",event.nativeEvent.qrcodeStringValue)}
        // }
        />

      //   <CameraKitCameraScreen
      //             showFrame={false}
      //             //Show/hide scan frame
      //             scanBarcode={true}
      //             //Can restrict for the QR Code only
      //             laserColor={'blue'}
      //             //Color can be of your choice
      //             frameColor={'yellow'}
      //             //If frame is visible then frame color
      //             colorForScannerFrame={'black'}
      //             //Scanner Frame color
      //             onReadCode={event =>
      //               this.onBarcodeScan(event.nativeEvent.codeStringValue)
      //             }
      // />


        // <CameraKitCameraScreen
        //     actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
        //     onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
        //     scanBarcode={true}
        //     laserColor={"blue"}
        //     frameColor={"yellow"}
        
        //     onReadQRCode={((event) => console.log("Qr code found"))} //optional
        //     hideControls={false}           //(default false) optional, hide buttons and additional controls on top and bottom of screen
        //     showFrame={true}   //(default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
        //     offsetForScannerFrame = {10}   //(default 30) optional, offset from left and right side of the screen
        //     heightForScannerFrame = {300}  //(default 200) optional, change height of the scanner frame
        //     colorForScannerFrame = {'red'} //(default white) optional, change colot of the scanner frame
        // />


    

        ) :
        (
          <Spinner size="small" />
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});


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



// is is an example code to Scan QR code//
// import React, { Component } from 'react';
// //import react in our code.
// import { Text, View, Linking, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
// // import all basic components
// import { CameraKitCameraScreen, } from 'react-native-camera-kit';
// //import CameraKitCameraScreen we are going to use.
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       //variable to hold the qr value
//       qrvalue: '',
//       opneScanner: false,
//     };
//   }
//   onOpenlink() {
//     //Function to open URL, If scanned 
//     Linking.openURL(this.state.qrvalue);
//     //Linking used to open the URL in any browser that you have installed
//   }
//   onBarcodeScan(qrvalue) {
//     //called after te successful scanning of QRCode/Barcode
//     this.setState({ qrvalue: qrvalue });
//     this.setState({ opneScanner: false });
//   }
//   onOpneScanner() {
//     var that =this;
//     //To Start Scanning
//     if(Platform.OS === 'android'){
//       async function requestCameraPermission() {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.CAMERA,{
//               'title': 'CameraExample App Camera Permission',
//               'message': 'CameraExample App needs access to your camera '
//             }
//           )
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             //If CAMERA Permission is granted
//             that.setState({ qrvalue: '' });
//             that.setState({ opneScanner: true });
//           } else {
//             alert("CAMERA permission denied");
//           }
//         } catch (err) {
//           alert("Camera permission err",err);
//           console.warn(err);
//         }
//       }
//       //Calling the camera permission function
//       requestCameraPermission();
//     }else{
//       that.setState({ qrvalue: '' });
//       that.setState({ opneScanner: true });
//     }    
//   }
//   render() {
//     let displayModal;
//     //If qrvalue is set then return this view
//     if (!this.state.opneScanner) {
//       return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>React Native QR Code Example</Text>
//             <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: '+this.state.qrvalue : ''}</Text>
//             {this.state.qrvalue.includes("http") ? 
//               <TouchableHighlight
//                 onPress={() => this.onOpenlink()}
//                 style={styles.button}>
//                   <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
//               </TouchableHighlight>
//               : null
//             }
//             <TouchableHighlight
//               onPress={() => this.onOpneScanner()}
//               style={styles.button}>
//                 <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
//                 Open QR Scanner
//                 </Text>
//             </TouchableHighlight>
//         </View>
//       );
//     }
//     return (
//       <View style={{ flex: 1 }}>
//         <CameraKitCameraScreen
//           showFrame={false}
//           //Show/hide scan frame
//           scanBarcode={true}
//           //Can restrict for the QR Code only
//           laserColor={'blue'}
//           //Color can be of your choice
//           frameColor={'yellow'}
//           //If frame is visible then frame color
//           colorForScannerFrame={'black'}
//           //Scanner Frame color
//           onReadCode={event =>
//             this.onBarcodeScan(event.nativeEvent.codeStringValue)
//           }
//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'white'
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#2c3539',
//     padding: 10,
//     width:300,
//     marginTop:16
//   },
//   heading: { 
//     color: 'black', 
//     fontSize: 24, 
//     alignSelf: 'center', 
//     padding: 10, 
//     marginTop: 30 
//   },
//   simpleText: { 
//     color: 'black', 
//     fontSize: 20, 
//     alignSelf: 'center', 
//     padding: 10, 
//     marginTop: 16
//   }
// });