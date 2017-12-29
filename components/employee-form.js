import React, {Component} from 'react';
import {View} from 'react-native';
import Card from './card';
import CardSection from './card.section';
import Input from './input';
import Button from './buttons';

export default class EmployeeForm extends Component {

  constructor() {
    super()
    this.userName = '';
  }

  onNameChange(text) {
    this.userName = text;
  }


  onButtonPress() {
    if (this.userName.length > 0) {
      this.props.goToMemberList();
    }
  }

  componentDidMount() {
    if (this.props.visible)
      this.props.titleBarApi("", "New Employee", "");
  }

  render() {
    if (this.props.visible) {
      return (
          <Card>
            <CardSection>
              <Input
                  label="Name"
                  placeholder="Rokibul Hasan"
                  onChangeText={this.onNameChange.bind(this)}
              />
            </CardSection>

            <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                Save
              </Button>
            </CardSection>
          </Card>
      );
    } else {
      return <View/>;
    }
  }
}
