import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import Card from './card';
import CardSection from './card.section';
import Input from './input';
import Button from './buttons';

export default class Login extends Component {

    constructor() {
        super()
        this.emailAddress = '';
        this.password = '';
    }

    onEmailChange(text) {
        this.emailAddress = text;
    }

    onPasswordChange(text) {
        this.password = text;
    }

    onButtonPress() {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if (this.emailAddress.length > 0 && this.password.length > 0 && reg.test(this.emailAddress) === true) {
            this.props.goToMember();
        } else {
            Alert.alert('Incorrect login credentials')
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
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="email@gmail.com"
                            onChangeText={this.onEmailChange.bind(this)}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            label="password"
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Login
                        </Button>
                    </CardSection>
                </Card>
            );
        } else {
            return <View/>;
        }
    }
}
