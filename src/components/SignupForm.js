import React, { Component } from 'react';
import firebase from 'firebase';
import { TextInput, View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

export default class LoginForm extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress() {
        const { email, password } = this.state;

        if (this.state.password !== this.state.password2) {
            this.setState({
                error: 'Password does not match.',
                loading: false
            })
        } else {

            this.setState({ error: '', loading: true });
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        }
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            password2: '',
            loading: false,
            error: '',
            passwordError: ''
        })
        this.props.navigation.navigate('Login');

    }

    onLoginFail() {
        this.setState({
            error: 'You have entered invalid data.',
            loading: false
        })
    }

    renderButton() {

        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Sign Up</Button>
        );
    }

    checkpassword(password2) {


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
                <Text>
                    {"\n"}
                </Text>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="Enter password again"
                            label='Password'
                            secureTextEntry
                            value={this.state.password2}
                            onChangeText={password2 => this.setState({ password2 })}
                        />
                    </CardSection>

                </Card>
                <Text style={styles.errorTextStyle}>{this.state.passwordError}</Text>
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ alignItems: "center" }}>
                    <Text style={{ color: 'blue' }}>
                        Already have an account? Log In
                    </Text>
                </TouchableOpacity>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'red'
    }
};
