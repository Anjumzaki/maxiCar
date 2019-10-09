import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Spinner } from './common';
import Settings from './Settings'
import Owner from './Owner'
import Vehicle from './Vehicle';
import HomeSc from './HomeScreen';
import Invoice from './Invoice';
import Recent from './RecentScanned';
import Scan from './Scan';

//redux
import { bindActionCreators } from "redux";
import { ownerAsync } from "../store/actions";
import { getOwnersDataAsync } from "../store/actions";
import { getPoliceDataAsync } from "../store/actions";
import { invoiceAsync } from "../store/actions";
import { vehicleAsync } from "../store/actions";
import { connect } from "react-redux";

var res = [];

class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {

    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'owner', title: 'Owner', icon: 'person', color: '#0095cd' },
        { key: 'vehicle', title: 'Vehicle', icon: 'album', color: '#0095cd' },
        { key: 'invoice', title: 'Invoice', icon: 'shopping-cart', color: '#0095cd' },
        { key: 'scanFile', title: 'Scan File', icon: 'shopping-cart', color: '#0095cd' },
        { key: 'qrscanner', title: 'Scanner', icon: 'camera', color: '#0095cd' },
        { key: 'recent', title: 'Recent', icon: 'history', color: '#0095cd' },
        { key: 'setting', title: 'Settings', icon: 'settings', color: '#0095cd' },
      ],
      QR_Code_Value: '',
      Start_Scanner: false,
      ids: props.navigation.getParam('qrCodeValue', 'NO-ID'),
      pdf: "",
      count: 0
    };
  }



  QRScannerRoute = () => <HomeSc navigation={this.props.navigation} />
  OwnersRoute = () => <Owner navigation={this.props.navigation} ids={this.state.ids} />
  VehcilesRoute = () => <Vehicle navigation={this.props.navigation} />
  InvoicesRoute = () => <Invoice navigation={this.props.navigation} />;
  ScanRoute = () => <Scan navigation={this.props.navigation} pdf={this.state.pdf} />;
  RecentRoute = () => <Recent navigation={this.props.navigation} />;
  SettingssRoute = () => <Settings navigation={this.props.navigation} />;

  _handleIndexChange = index => this.setState({ index });
 
  _renderScene = BottomNavigation.SceneMap({
    owner: this.OwnersRoute,
    vehicle: this.VehcilesRoute,
    qrscanner: this.QRScannerRoute,
    invoice: this.InvoicesRoute,
    scanFile: this.ScanRoute,
    recent: this.RecentRoute,
    setting: this.SettingssRoute,
  });

  async componentWillMount() {
    
    const QRValue = this.props.navigation.getParam('qrCodeValue', 'NO-ID');
    console.log("saaaaaaaaaaaaaaaaadddddddsddddddaaaaaaa")
    console.log(QRValue)
    console.log("anssssssssssssssssssssssssssssssssssssss33333344444444444443")
    res = QRValue.split("-");
    console.log(res)

    // await this.props.ownerAsync("5d370034e76dc005301a430e");
    // await this.props.vehicleAsync("5d37007ee76dc005301a430f");
    // await this.props.invoiceAsync("5d370034e76dc005301a430e");
    //  await this.props.ownerAsync('5d370034e76dc005301a430e');
    await this.props.getPoliceDataAsync();
    const source = {uri:'http://192.168.0.102:5000/getpdf/SCAN-DOC-5d23c1ad303c4c128836f7de.pdf',cache:true};
    this.setState({pdf: source});
    //  this.setState({ids: })
        // this.props.getOwnersDataAsync();
  }

  // async callfunc(id1, id2){
  //   // console.log("anssssssssssssssssssssssssssssssssssssss")
  //   // console.log("saaaaaaaaaaaaaaaaaaaaaaaa")
  //   // console.log(this.props.navigation.getParam('qrCodeValue', 'NO-ID'))
  //   console.log("iddddddddddddddddddddddddssssss")
  //   // var res = this.props.navigation.getParam('qrCodeValue', 'NO-ID').split("-");
  //   console.log(id1+ ' asd ' + id2)
  //   await this.props.ownerAsync("5d370034e76dc005301a430e");
  //   await this.props.vehicleAsync("5d37007ee76dc005301a430f");
  //   await this.props.invoiceAsync("5d370034e76dc005301a430e");
  //   this.setState({count: ++this.state.count})
 
  // }

  render() {
    // const { navigation } = this.props;
    // const QRValue = navigation.getParam('qrCodeValue', 'NO-ID');
    // console.log("saaaaaaaaaaaaaaaaadddddddsddddddaaaaaaa")
    // console.log(QRValue)
    // console.log("anssssssssssssssssssssssssssssssssssssss33333344444444444443")
    // res = QRValue.split("-");
    // console.log(res)
    // if(this.state.count < 6){
    //   console.log("iddddddddddddddddddddddddssssss")
    //   console.log(res[0]+ ' asd ' + res[1])
    //   this.setState({count: ++this.state.count})
    //   // this.callfunc(res[0], res[1]);
    // }

    return (
      // <View>
      //   {this.props.navigation.getParam('qrCodeValue', 'NO-ID') ? (
      //     <View>
      //       <Text>idss:{this.state.ids}</Text>
      //       <Text>{this.props.navigation.getParam('qrCodeValue', 'NO-ID')}</Text>
      //     </View>
      //   ) : (<Text>no</Text>)
      //   }
      // </View>
       <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        /> 
    );

  }
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  QR_text: {
    color: '#000',
    fontSize: 19,
    padding: 8,
    marginTop: 12
  },
  button: {
    backgroundColor: '#2979FF',
    alignItems: 'center',
    padding: 12,
    width: 300,
    marginTop: 14
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
)(MainScreen);