import React, { Component } from 'react';
import { Avatar } from 'react-native-paper';
import { StyleSheet, View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import { ListItem, Divider } from 'react-native-elements'
import { Spinner } from './common';

//redux
import { bindActionCreators } from "redux";
import { ownerAsync } from "../store/actions";
import { vehicleAsync } from "../store/actions";
import { invoiceAsync } from "../store/actions";
import { postPoliceDataAsync } from "../store/actions";
import { connect } from "react-redux";

var font = 'Lobster-Regular';


class Owner extends Component {
    static navigationOptions = {
        header: null
    }

    constructor() {

        super();

        this.state = {
            QR_Code_Value: '',
            Start_Scanner: false,
            policeId: ""
        };
    }


    async componentWillMount() {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("user////////////: ")
                console.log(user.uid)
                console.log("$$$$$$$$$")
                this.setState({ policeId: user.uid });
            }
            else {
                this.setState({ policeId: "nhi aya yr" });
            }
        });
        // var res = this.props.ids.split("-");
        // if (!this.props.owner.data)
        // await this.props.ownerAsync(this.props.navigation.getParam('qrCodeValue', 'NO-ID'));
        // await this.props.ownerAsync("5cddd0a117bc2225cc7de6d6");
        // console.log("gggggggggggggggggggggggg")
        // console.log(this.props.navigation.getParam('qrCodeValue', 'NO-ID'))
        // await this.props.ownerAsync("5cddd1e21c9d440000d49a4f");
        // await this.props.vehicleAsync("5d375f203d69b106904d08e0");
        // await this.props.invoiceAsync("5d375e1d3d69b106904d08dd");

    }

    saveData = () => {
        var today = new Date();
        this.props.postPoliceDataAsync({
            policeId: this.state.policeId,
            name: this.props.owner.data.name,
            ownerId: this.props.owner.data._id,
            vehicleId: this.props.vehicle.data._id,
            invoiceId: this.props.invoice.data._id,
            date: today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
            time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        });
    }



    render() {
        console.log("///////////////////");
        console.log(this.props.owner.data);
        return (

            <View >
                {/* <Text style={{ fontSize: 18, textAlign: 'center' }}>
                    {'Scanned QR Code: ' + this.props.qrCodeValue}
                </Text> */}
                {/* <Text>ids: {this.props.ids}</Text>    //require('../images/avatar.jpg' */}
                {this.props.owner.data ? (

                    <ScrollView >
                        
                        <View style={{ marginTop: 20 }}>
                        <Image source={{ uri: this.props.owner.data.picture }} style={{width: 120, height: 120, borderRadius:20, alignSelf: 'center'}} />
                            <Text style={{ fontSize: 18, alignSelf: "center", fontFamily: font, fontSize: 18  }}>{this.props.owner.data.name.toUpperCase()}</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Gender :   {this.props.owner.data.gender}</Text>}
                                leftIcon={<Icon name="gender-male-female" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Date Of Birth :  {this.props.owner.data.dateOfBirth.substring(0, 10)}</Text>}
                                leftIcon={<Icon name="calendar" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Age :  {this.props.owner.data.age}</Text>}
                                leftIcon={<Icon name="calendar-clock" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Mobile Number :  {this.props.owner.data.mobileNumber}</Text>}
                                leftIcon={<Icon1 name="mobile1" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Driving License Number :  {this.props.owner.data.drivingLicenseNumber}</Text>}
                                leftIcon={<Icon4 name="hashtag" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Insurrance Company :  {this.props.owner.data.insurranceCompany}</Text>}
                                leftIcon={<Icon name="registered-trademark" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>IPNumber :  {this.props.owner.data.IPNumber}</Text>}
                                leftIcon={<Icon4 name="hashtag" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>CURP :  {this.props.owner.data.CURP}</Text>}
                                leftIcon={<Icon4 name="hashtag" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Address :  {this.props.owner.data.address}</Text>}
                                leftIcon={<Icon2 name="address" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Street:  {this.props.owner.data.street}</Text>}
                                leftIcon={<Icon3 name="streetview" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Nieghbourhood :  {this.props.owner.data.nieghbourhood}</Text>}
                                leftIcon={<Icon2 name="creative-commons-attribution" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>City:  {this.props.owner.data.city}</Text>}
                                leftIcon={<Icon name="city" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>State :  {this.props.owner.data.state}</Text>}
                                leftIcon={<Icon name="map-marker" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Country :  {this.props.owner.data.country}</Text>}
                                leftIcon={<Icon name="map-marker-circle" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Postal Code:  {this.props.owner.data.postalCode}</Text>}
                                leftIcon={<Icon name="postage-stamp" size={30} color="#000" />}
                            />
                            <Divider />
                            <ListItem
                                title={<Text style={{ fontSize: 16, fontFamily: font, fontSize: 18  }}>Created Date :  {this.props.owner.data.createdDate.substring(0, 10)}</Text>}
                                leftIcon={<Icon name="calendar" size={30} color="#000" />}
                            />
                            <Divider />
                        </View>
                        <TouchableOpacity
                            onPress={() => this.saveData()}
                            style={styles.button}>
                            <Text>
                                Save Data
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>

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
        backgroundColor: '#0095cd',
        alignItems: 'center',
        padding: 12,
        width: "100%",
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
    owner: state.owner.ownerEntity,
    vehicle: state.vehicle.vehicleEntity,
    invoice: state.invoice.invoiceEntity
});
const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators(
        {
            ownerAsync,
            vehicleAsync,
            invoiceAsync,
            postPoliceDataAsync
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Owner);