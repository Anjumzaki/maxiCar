import React, { Component } from 'react';
import { Avatar } from 'react-native-paper';
import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { ListItem, Divider } from 'react-native-elements'
import { Spinner } from './common';

//redux
import { bindActionCreators } from "redux";
import { vehicleAsync } from "../store/actions";
import { connect } from "react-redux";
import axios from 'axios';
import Pdf from 'react-native-pdf';
import { Buffer } from 'buffer'
import {Dimensions} from 'react-native';

// var Buffer = require('buffer').Buffer

// const resources = {
//     file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
//     url: 'http://localhost:5000/getpdf/SCAN-DOC-5d23c505f4b6aa0178289339.pdf',
//     base64: 'JVBERi0xLjMKJcfs...',
//   };

class Vehicle extends Component {
    static navigationOptions = {
        header: null
    }

    constructor() {

        super();

        this.state = {
            pdf: ""
        };
    }


     componentWillMount() {


        // axios
        // .get('http://192.168.0.102:3000/api/owners/getownersdata')
        // .then((ownersData) => {
        //     console.log("owwwwwwwwwwww")
        //     console.log(ownersData)
        // }).catch((error) => {
        //   console.log("mongodb get owners data error")
        // })

        // axios
        // .get('http://192.168.0.102:5000/api/owners/getownersdata')
        // .then((ownersData) => {
        //     console.log("owwwwwwwwwwww")
        //     console.log(ownersData)
        // }).catch((error) => {
        //   console.log("mongodb get owners data error")
        // })
        // const source = {uri:'http://192.168.0.102:5000/getpdf/SCAN-DOC-5d23c1ad303c4c128836f7de.pdf',cache:true};
        // this.setState({pdf: source});

        // var self = this;
        //  axios.get('http://localhost:5000/getpdf/SCAN-DOC-5d23c505f4b6aa0178289339.pdf',{responseType: 'arraybuffer'})
        //     .then((response) => {
        //         // alert("The file is successfully uploaded");
        //         console.log("file show")
        //         var img = new Buffer(response.data, 'binary').toString('base64')
        //         console.log(img);
        //     }).catch((error) => {
        //         console.log("heloo error")
        //         console.log(error)
        //     });
    }



    render() {
        // const source = require('http://localhost:5000/getpdf/SCAN-DOC-5d23c505f4b6aa0178289339.pdf');
        const resourceType = 'base64';
        const source = {uri:'http://192.168.0.102:5000/getpdf/SCAN-DOC-5d23c1ad303c4c128836f7de.pdf',cache:true};
        // this.setState({pdf: source});

        return (

            <View style={styles.container}>
                <Text style={styles.textStyle}>Scanned Documents</Text>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>


        //     <View style={{ flex: 1 }}>
        //     {/* Some Controls to change PDF resource */}
        //     <Text>Hello</Text>
        //     {/* <Image
        //         style={{width: 100, height: 100}}
        //         source={{uri: `data:image/gif;base64,${this.state.picture}`}}
        //     /> */}
        //     <PDFView
        //       fadeInDuration={250.0}
        //       style={{ flex: 1 }}
        //       resource={resources[resourceType]}
        //       resourceType={resourceType}
        //       onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
        //       onError={(error) => console.log('Cannot render PDF', error)}
        //     />
        //   </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width: Dimensions.get('window').width,
    },
    textStyle: {
        fontSize: 32,
        alignSelf: 'center',
        color: '#0095cd'
    }
});

const mapStateToProps = state => ({
    vehicle: state.vehicle.vehicleEntity,
});
const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators(
        {
            vehicleAsync,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vehicle);