import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import { FormLabel, FormInput, Button, Card, FormValidationMessage } from 'react-native-elements'
import {Spinner} from './spinner'

import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { loginUserAsync } from '../actions';

class Login extends Component {

    constructor() {
        super()
        this.emailAddress = ''
        this.password = ''
        this.state = {
            emailError : '',
            passwordError : '',
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.authenticated && nextProps.authenticated) {
         // navigationResetTo('Member');
        }
      }

    onButtonPress() {
        if (this.emailAddress.length > 0 && this.password.length > 0) {
            this.props.loginUser(this.emailAddress, this.password);
        } else {
            Alert.alert('Email or password empty')
        }
    }

    onBlurEmail() {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
        if(reg.test(this.emailAddress) === false) {
            this.setState({
                emailError : 'Malformed email address but nevermind :)'
            })
        } else {
            this.setState({
                emailError : ''
            })
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return (<Button 
            onPress={this.onButtonPress.bind(this)}
            title={'Login'}
            buttonStyle={{borderRadius: 10, marginTop: 20}}
            textStyle={{textAlign: 'center', fontWeight: 'bold'}}/>     
        );
    }

    render() {

        const {
            authenticated,
            loading,
            loginUserAsync,
            loginErrorMsg
          } = this.props;

        return (
            <Card>
                <FormLabel>Email</FormLabel>
                <FormInput 
                    onChangeText={email => this.emailAddress = email}
                    onBlur={this.onBlurEmail.bind(this)}
                    placeholder="example:probal@cefalo.com"
                    autoFocus={true} 
                    autoCorrect={false} /> 
                <FormValidationMessage>
                    {this.state.emailError}
                </FormValidationMessage>

                <FormLabel>Password</FormLabel>
                <FormInput 
                    secureTextEntry
                    onChangeText={password => this.password = password}/> 
                <FormValidationMessage>
                    {this.passwordError}
                </FormValidationMessage>
                
                {this.renderButton()}      
                <FormLabel>{loginErrorMsg}</FormLabel>
            </Card>
        );
       
    }
}


const mapStateToProps = state => ({
    ...state.auth,
  });
  
  const mapDispatchToProps = dispatch => ({
    loginUser: (username, password) =>
      dispatch(loginUserAsync(username, password)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);