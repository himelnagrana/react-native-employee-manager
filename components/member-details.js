import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, DatePickerIOS } from "react-native";
import Card from './card';
import CardSection from './card.section';
import Input from './input';
import Button from './buttons';
import DatePicker from './date-picker'
import datePicker from "./date-picker";

export default class MemberDetails extends Component {

  onDateChange(date) {
    this.setState({
      date: date
    });
  }

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
                  label="Phone"
                  placeholder="Contact number"
                  // onChangeText={this.onPasswordChange.bind(this)}
              />
          </CardSection>
          <CardSection>
              <DatePicker/>
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
