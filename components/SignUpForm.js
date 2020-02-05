import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Switch
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AuthHeader from './AuthHeader'

import styles from "./styles/LoginFormStyles";

const propTypes = {
    handleEmailChange:    PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    toSignIn:             PropTypes.func.isRequired,
};

export default class SignUpForm extends Component {


    state = { securePassword: true };


    handlePasswordVisibility() {
        this.setState({ securePassword: !this.state.securePassword })
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1, flexDirection: 'column' }}>
                    <AuthHeader />
                    <View style={{ flex: 5 }}>
                        <View style={styles.container}>
                            <View>
                                <TextInput
                                    style={styles.emailInput}
                                    placeholderTextColor='rgba(0,0,0,0.3)'
                                    returnKeyType='next'
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    placeholder={'Email'}
                                    onChangeText={(email) => this.props.handleEmailChange(email)}
                                />
                            </View>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.passwordInput}
                                    placeholderTextColor='rgba(0,0,0,0.3)'
                                    returnKeyType='next'
                                    autoCapitalize='none'
                                    secureTextEntry={this.state.securePassword}
                                    placeholder={'Password'}
                                    ref={(input) => this.passwordInput = input}
                                    onChangeText={(password) => this.props.handlePasswordChange(password)}
                                />
                                <TouchableOpacity style={styles.passwordIconContainer} onPress={() => this.handlePasswordVisibility()} >
                                    <FontAwesome
                                        name={this.state.securePassword ? 'eye' : 'eye-slash'}
                                        size={17}
                                        color={this.state.securePassword ? '#afafaf' : '#5a5a5a'}
                                    />
                                    <Text style={{color: this.state.securePassword ? '#afafaf' : '#5a5a5a'}} >
                                        {this.state.securePassword ? 'Show' : 'Hide'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.passwordContainer, {marginTop: 13}]}>
                                <TextInput
                                    style={styles.passwordInput}
                                    placeholderTextColor='rgba(0,0,0,0.3)'
                                    returnKeyType='done'
                                    autoCapitalize='none'
                                    secureTextEntry={this.state.securePassword}
                                    placeholder={'Confirm Password'}
                                    ref={(input) => this.passwordInput = input}
                                    onChangeText={(password) => this.props.handlePasswordChange(password)}
                                />
                                <TouchableOpacity style={styles.passwordIconContainer} onPress={() => this.handlePasswordVisibility()} >
                                    <FontAwesome
                                        name={this.state.securePassword ? 'eye' : 'eye-slash'}
                                        size={17}
                                        color={this.state.securePassword ? '#afafaf' : '#5a5a5a'}
                                    />
                                    <Text style={{color: this.state.securePassword ? '#afafaf' : '#5a5a5a', fontSize: 10}} >
                                        {this.state.securePassword ? 'Show' : 'Hide'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 13 }}>
                                <Button
                                    raised
                                    title="Sign Up"
                                    buttonStyle={{height: 45}}
                                    containerViewStyle={{marginLeft: 0, width: '100%'}}
                                    backgroundColor={'#4F9DF3'}
                                    loading={this.props.isLoading}
                                    disabled={true}
                                    disabledStyle={{ backgroundColor: '#4F6DA5' }}
                                    onPress={this.props.passwordResetRequest}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'white' }}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => { this.props.toSignIn() }}>
                        <Text style={{ fontSize: 16, color: '#4F9DF3', fontWeight: '800' }}> Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}


SignUpForm.propTypes = propTypes;
SignUpForm.defaultProps = defaultProps;
