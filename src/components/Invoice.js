import React, { Component } from 'react';
import { Avatar } from 'react-native-paper';
import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { ListItem, Divider } from 'react-native-elements'
import { Spinner } from './common';

//redux
import { bindActionCreators } from "redux";
import { invoiceAsync } from "../store/actions";
import { connect } from "react-redux";

var font = 'Lobster-Regular';


class Invoice extends Component {
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
        console.log(this.props.invoice.data);
        return (

            <View >
                {/* <Text style={{ fontSize: 18, textAlign: 'center' }}>
                    {'Scanned QR Code: ' + this.props.qrCodeValue}
                </Text> */}
                {this.props.invoice.data ? (

                    <ScrollView >

                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 22, fontFamily: font, fontSize: 22 , alignSelf: 'center', alignContent: 'center' }}>Challan Number</Text>
                            <Text style={{ fontSize: 22,fontFamily: font, fontSize: 22,  alignSelf: 'center', alignContent: 'center' }}>{this.props.invoice.data.challanNumber} </Text>
                            <View style={{ width: '100%', height: 60, backgroundColor: "#0095cd" }}>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff', alignSelf: 'center', alignContent: 'center', paddingTop: 10, textDecorationLine: 'underline' }}>INVOICE FROM</Text>
                        </View>

                            <ListItem
                                title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 18  }}>Owner :   {this.props.invoice.data.owner}</Text>}
                                leftIcon={<Icon name="arrow-right-bold" size={20} color="#000" />}
                            />
                            <ListItem
                                title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 18  }}>Address :   {this.props.invoice.data.addressLine1}  {this.props.invoice.data.addressLine2}</Text>}
                                leftIcon={<Icon name="arrow-right-bold" size={20} color="#000" />}
                            />
                            <ListItem
                                title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 18  }}>Mobile :   {this.props.invoice.data.mobileNumberFrom}</Text>}
                                leftIcon={<Icon name="arrow-right-bold" size={20} color="#000" />}
                            />
                            <ListItem
                                title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 18  }}>Email :   {this.props.invoice.data.emailFrom}</Text>}
                                leftIcon={<Icon name="arrow-right-bold" size={20} color="#000" />}
                            />
                            {/* <View style={{ width: '100%', height: 60, backgroundColor: "#0095cd" }}>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff', alignSelf: 'center', alignContent: 'center', paddingTop: 10, textDecorationLine: 'underline' }}>INVOICE TO</Text>
                            </View> */}
                            {/* <ListItem
                                title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 18 }}>Name :   {this.props.invoice.data.firstName}</Text>}
                                leftIcon={<Icon name="arrow-right-bold" size={20} color="#000" />}
                            />
                            <ListItem
                                title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 18 }}>Address :   {this.props.invoice.data.address} </Text>}
                                leftIcon={<Icon name="arrow-right-bold" size={20} color="#000" />}
                            />
                           <ListItem
                                title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 18 }}>Mobile :   {this.props.invoice.data.mobileNumberTo}</Text>}
                                leftIcon={<Icon name="arrow-right-bold" size={20} color="#000" />}
                            />
                            <ListItem
                                title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 18 }}>Email :   {this.props.invoice.data.emailTo}</Text>}
                                leftIcon={<Icon name="arrow-right-bold" size={20} color="#000" />}
                            /> */}
                            <Divider />
                            <Divider />
                            <View style={{ marginLeft: 15 }}>
                                <ListItem
                                    title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 14 }}>Description :   {this.props.invoice.data.description1}</Text>}
                                />
                                <ListItem
                                    title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 14 }}>Quantity :   {this.props.invoice.data.quantity1}</Text>}
                                />
                                <ListItem
                                    title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 14 }}>Amount :   {this.props.invoice.data.amount1}</Text>}
                                />
                                <ListItem
                                    title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 14 }}>Tax :   {this.props.invoice.data.tax1}</Text>}
                                />
                                <ListItem
                                    title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 14 }}>Discount :   {this.props.invoice.data.discount}</Text>}
                                />
                                <ListItem
                                    title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 14 }}>Total Amount :   {this.props.invoice.data.totalAmount}</Text>}
                                />
                                <ListItem
                                    title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 14 }}>Billing Date :   {this.props.invoice.data.billingDate.substring(0, 10)}</Text>}
                                />
                                <ListItem
                                    title={<Text style={{ fontSize: 13, fontFamily: font, fontSize: 14 }}>Status :   {this.props.invoice.data.status}</Text>}
                                />
                            </View>
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
    invoice: state.invoice.invoiceEntity,
});
const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators(
        {
            invoiceAsync,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Invoice);