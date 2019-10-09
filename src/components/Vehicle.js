import React, { Component } from 'react';
import { Avatar } from 'react-native-paper';
import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, ScrollView, Image } from 'react-native';
// import { Image } from 'react-native-elements';
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

// import logos from "../images/carsLogo/index"
var font = 'Lobster-Regular';

class Vehicle extends Component {
    static navigationOptions = {
        header: null
    }

    constructor() {

        super();

        this.state = {
            QR_Code_Value: '',
            Start_Scanner: false,

        };
    }


    async componentWillMount() {
        // if (!this.props.owner.data)
        // await this.props.vehicleAsync(this.props.navigation.getParam('qrCodeValue', 'NO-ID'));
        // await this.props.vehicleAsync("5cddd0c017bc2225cc7de6d7");
        // this.props.getOwnersDataAsync();
    }

    openLink_in_browser = () => {
        Linking.openURL(this.state.QR_Code_Value);
    }



    render() {
        console.log("///////////////////");
        console.log(this.props.vehicle.data);
        return (

            <View >
                {/* <Text style={{ fontSize: 18, textAlign: 'center' }}>
                    {'Scanned QR Code: ' + this.props.qrCodeValue}
                </Text> */}
                {this.props.vehicle.data ? (

                    <ScrollView >
                        {/* <View style={{ marginTop: 20 }}>
                        <Image source={require('../images/avatar.jpg')} style={{width: 120, height: 120, borderRadius:20, alignSelf: 'center'}} />
                            <Text style={{ fontSize: 18, alignSelf: "center", fontWeight: 'bold' }}>{this.props.vehicle.data.ownerName.toUpperCase()}</Text>
                        </View> */}
                        <View style={{ width: '100%', height: 25, backgroundColor: "#0095cd" }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff', paddingLeft: 10, paddingTop: 2 }}>Vehicle Details</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                            <Text style={{ paddingTop: 10, paddingLeft: 20, fontFamily: font, fontSize: 18 }}>Registration</Text>
                            <View style={{display: 'flex', flexDirection: "row",  paddingLeft: 80}}>
                            <View style={{
                                height: 40,
                                backgroundColor: "#0000FF",
                                width: '8%',
                                borderBottomLeftRadius: 4,
                                borderTopLeftRadius: 4,
                                borderWidth: 0.5,
                                borderColor: '#000',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 7,
                                },
                                shadowOpacity: 0.41,
                                shadowRadius: 9.11,
                                paddingTop: 8,
                                elevation: 14,
                            }}>
                            </View>
                            <View style={{
                                height: 40,
                                backgroundColor: "#fff",
                                width: '60%',
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 4,
                                borderWidth: 0.5,
                                borderColor: '#000',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 7,
                                },
                                shadowOpacity: 0.41,
                                shadowRadius: 9.11,
                                paddingTop: 8,
                                elevation: 14,
                            }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000', alignSelf: 'center' }}>{this.props.vehicle.data.plates}</Text>
                            </View>
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Text style={{ marginLeft: -38, paddingTop: 30, fontFamily: font, fontSize: 18  }}>Make</Text>
                             {/* <Image 
                                source={logos[this.props.vehicle.data.vehicleBrand]} 
                                /> */}
                            <Image
                                style={{ width: 130, height: 130 }}
                                source={{uri:'https://mexicar.appspot.com/getlogo/'+this.props.vehicle.data.vehicleBrand+'.png'}}
                            />
                        </View>
                        <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Text style={{ paddingTop: 30, fontFamily: font, fontSize: 18  }}>Vehicle Image</Text>
                            <Image
                                style={{ width: 200, height: 100 }}
                                // source={{uri:'http://192.168.0.102:3000/getlogo/'+this.props.vehicle.data.vehicleBrand+'.png',cache:true}}
                                source={require('../images/cars/corolla.jpg')}
                            />
                        </View>

                        <View style={{ width: '100%', height: 25, backgroundColor: "#0095cd", marginTop: 10 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff', paddingLeft: 10, paddingTop: 2 }}>Basic Details</Text>
                        </View>


                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>vehicleType :   {this.props.vehicle.data.vehicleType}</Text>}
                                leftIcon={<Icon name="car" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Vehicle Brand :  {this.props.vehicle.data.vehicleBrand}</Text>}
                                leftIcon={<Icon name="car" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Vehicle Model :  {this.props.vehicle.data.vehicleModel}</Text>}
                                leftIcon={<Icon name="car" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Vehicle Color :  {this.props.vehicle.data.vehicleColor}</Text>}
                                leftIcon={<Icon name="format-color-fill" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Purchase Year :  {this.props.vehicle.data.purchaseYear.substring(0, 10)}</Text>}
                                leftIcon={<Icon name="calendar" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Plates :  {this.props.vehicle.data.plates}</Text>}
                                leftIcon={<Icon3 name="confirmation-number" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Vehicle Identification Number :  {this.props.vehicle.data.vehicleIdentificationNumber}</Text>}
                                leftIcon={<Icon1 name="idcard" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Registartion Date :  {this.props.vehicle.data.registartionDate.substring(0, 10)}</Text>}
                                leftIcon={<Icon name="calendar" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Car Status :  {this.props.vehicle.data.carStatus}</Text>}
                                leftIcon={<Icon name="check" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Created Date:  {this.props.vehicle.data.createdDate.substring(0, 10)}</Text>}
                                leftIcon={<Icon name="calendar" size={30} color="#000" />}
                            />
                        </View>

                    </ScrollView>



                    // <View>
                    //     <Text style={{ fontSize: 18, textAlign: 'center' }}>Name: {this.props.owner.data.name}</Text>
                    //     <Text style={{ fontSize: 18, textAlign: 'center' }}>Gender: {this.props.owner.data.gender}</Text>
                    //     <Text style={{ fontSize: 18, textAlign: 'center' }}>Mobile Number: {this.props.owner.data.mobileNumber}</Text>
                    //     <Text style={{ fontSize: 18, textAlign: 'center' }}>City: {this.props.owner.data.city}</Text>
                    // </View>
                ) : (
                        <View style={{ alignSelf: 'center' }}>
                            <Spinner size="large" />
                        </View>
                    )}
                {this.state.QR_Code_Value.includes("http") ?
                    <TouchableOpacity
                        onPress={this.openLink_in_browser}
                        style={styles.button}>
                        <Text style={{ color: '#FFF', fontSize: 14 }}>Open Link in default Browser</Text>
                    </TouchableOpacity> : null
                }
            </View>
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
    contentContainer: {
        paddingVertical: 20
    },
    Header: {
        display: 'flex',
        flexDirection: 'row'
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