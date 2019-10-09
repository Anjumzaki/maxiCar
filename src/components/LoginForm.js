import React, { Component } from 'react';
import firebase from 'firebase';
import { TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

export default class LoginForm extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
        loggedIn: false
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDYg6dhnjGXu0fn5DZ8PPE16C99eiBmLqc",
            authDomain: "rnauthapp-e84d1.firebaseapp.com",
            databaseURL: "https://rnauthapp-e84d1.firebaseio.com",
            projectId: "rnauthapp-e84d1",
            storageBucket: "rnauthapp-e84d1.appspot.com",
            messagingSenderId: "685951200040",
            appId: "1:685951200040:web:bef2d64dd3509ab5"
        })

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ loggedIn: true });
            // console.log("user: ")
            // console.log(user.uid)
            this.props.navigation.navigate('HomeSc');
          }
          else {
              console.log("not loged in")
        }});
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        // this.props.navigation.navigate('MainScreen');

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                this.onLoginFail();
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
        this.props.navigation.navigate('HomeSc');
    }

    onLoginFail() {
        this.setState({
            error: 'The email/password that you have entered is incorrect.',
            loading: false
        })
    }

    renderButton() {
        // if (this.state.loading) {
        //     return <Spinner size="small" />
        // }
         return (
            <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
         );
    }

    callSignup() {
        this.setState({
            email: '',
            password: '',
            error: ''
        })
        this.props.navigation.navigate('Signup');
    }

    render() {
        return (
            <Card>
                <Image
                    style={{ width: "100%", height: 120, marginTop: 30, marginBottom: 30, alignItems: 'center' }}
                    source={require('../images/logo-MexiCar.png')}
                />
                <Card>
                    <CardSection>
                        <Input
                            placeholder="user@gmail.com"
                            label='Email'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email: email })}
                        />
                    </CardSection>
                </Card>
                <Text>
                    {"\n"}
                </Text>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="password"
                            label='Password'
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                </Card>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <Text>
                    {"\n"}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <Text>
                    {"\n"}
                    {"\n"}
                </Text>
                <TouchableOpacity onPress={() => this.callSignup()} style={{ alignItems: "center" }}>
                    <Text style={{ color: 'blue' }}>
                        Don't have an account? Sign up
                    </Text>
                </TouchableOpacity>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 13,
        alignSelf: 'center',
        color: 'red'
    }
};
