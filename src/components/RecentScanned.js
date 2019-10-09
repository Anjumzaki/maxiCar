import React, { Component } from 'react';
import { Avatar } from 'react-native-paper';
import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, ScrollView } from 'react-native';
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
import { getPoliceDataAsync } from "../store/actions";
import { connect } from "react-redux";

var font = 'Pacifico-Regular';


class RecentScanned extends Component {
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

        // await this.props.getPoliceDataAsync();

    }

    buttonclick(props) {
        props.navigation.navigate('MainScreen');
    }


    render() {
        console.log("POLICEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        console.log(this.props);
        return (


            <View >

                {this.props.policeData ? (

                    <ScrollView >
                        <Text style={styles.textStyle}>Recent Scannings</Text>
                        {this.props.policeData.map((pd, index) =>
                            <ListItem
                                title={
                                    <View>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('MainScreen')}
                                            style={styles.button}
                                            >
                                            <View >
                                                <Text style={{  fontFamily: font, fontSize: 18, color: "#fff" }}>Name:   {pd.ownerName}  </Text>
                                                <View style={{ display: "flex", flexDirection: "row" }}>
                                                    <Text style={{  fontFamily: font, fontSize: 14, color: "#fff" }}>Date:   {pd.date}    </Text>
                                                    <Text style={{ fontFamily: font, fontSize: 14, color: "#fff" }}>Time:   {pd.time}      </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                }
                                key={index}
                            />
                        )}
                    </ScrollView>) : (<Text>No Recent Scan</Text>)

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
        padding: 9,
        width: "100%",
        borderRadius:20,
        // shadowColor: 'rgba(46, 229, 157, 0.4)',
        // shadowOpacity: 1.5,
        // elevation: 8,
        // shadowRadius: 20,
        // shadowOffset: { width: 10, height: 13 },
        // marginTop: 14
    },
    contentContainer: {
        paddingVertical: 20
    },
    Header: {
        display: 'flex',
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 32,
        alignSelf: 'center',
        color: '#0095cd',
        fontFamily: font,
        fontSize: 24
    }
});

const mapStateToProps = state => ({
    policeData: state.getPoliceData.policeEntities,
});
const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators(
        {
            getPoliceDataAsync
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecentScanned);