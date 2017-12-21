import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import { FormLabel, FormInput, Button, Card, FormValidationMessage } from 'react-native-elements'

export default class Login extends Component {

    constructor() {
        super()
        this.emailAddress = ''
        this.password = ''
        this.state = {
            emailError : '',
            passwordError : '',
        }
    }

    onButtonPress() {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if (this.emailAddress.length > 0 && this.password.length > 0) {
            this.props.goToMember();
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

    componentDidMount() {
        if (this.props.visible)
            this.props.titleBarApi("", "Please Login", "");
    }

    render() {
        if (this.props.visible) {
            return (
                <Card>
                    <FormLabel>Email</FormLabel>
                    <FormInput 
                        onChangeText={email => this.emailAddress = email}
                        onBlur={this.onBlurEmail.bind(this)}
                        placeholder="example:probal@cefalo.com"
                        autoFocus={true} /> 
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
                    
                    <Button 
                        onPress={this.onButtonPress.bind(this)}
                        title={'Login'}
                        buttonStyle={{borderRadius: 10, marginTop: 20}}
                        textStyle={{textAlign: 'center', fontWeight: 'bold'}}/>                     
                </Card>
            );
        } else {
            return <View/>;
        }
    }
}
