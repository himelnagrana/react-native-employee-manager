import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Card from './card';
import CardSection from './card.section';
import Input from './input';
import Button from './buttons';

export default class MemberDetails extends Component {
  render() {
    return (
      <Card>
          <CardSection>
              <Input
                  label="Name"
                  placeholder="Full name "
                  // onChangeText={this.onEmailChange.bind(this)}
              />
          </CardSection>
          <CardSection>
              <Input
                  secureTextEntry
                  label="Phone"
                  placeholder="Contact number"
                  // onChangeText={this.onPasswordChange.bind(this)}
              />
          </CardSection>
          <CardSection>
              <Input
                  secureTextEntry
                  label="Shift"
                  placeholder="Shift"
                  // onChangeText={this.onPasswordChange.bind(this)}
              />
          </CardSection>
          <CardSection >
              {/* <Button onPress={this.onButtonPress.bind(this)}> */}
              <Button>
                  Save Changes
              </Button>
              <Button>
                  Text Schedule
              </Button>
              <Button>
                  Fire Employee
              </Button>
          </CardSection>
      </Card>
  );
  }
}
