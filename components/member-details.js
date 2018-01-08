import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import Card from './card'
import CardSection from './card.section'
import Input from './input'
import Picker from './picker'
import Button from './buttons'

import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { createMember, deleteMember, updateMember, loadMember } from '../actions';

class MemberDetails extends Component {

  constructor() {
    super()
    this.state = {
      id: '',
      name: '',
      phone: '',
      shift: 'Tuesday',
    }
  }

  componentDidMount() {
    if(this.props.member) {
      this.setState({
        id: this.props.member.id,
        name: this.props.member.name,
        phone: this.props.member.phone,
        shift: this.props.member.shift
      })
    }
  }

  handleChange(event){
    this.setState({
        [event.target.name] : event.target.value
    });
  }

  onFirePress() {
    const emp = {
      id: this.state.id,
      name: this.state.name,
      phone: this.state.phone,
      shift: this.state.shift,
    }
    this.props.deleteMember(emp)
  }

  onSavePress() {
    if (this.state.name.length > 0 && this.state.phone.length > 0) { 
      const emp = {
        id: this.state.id,
        name: this.state.name,
        phone: this.state.phone,
        shift: this.state.shift,
      }
      this.props.addMember(emp)
    } else {
      Alert.alert('Please fill all fields')
    }
  }

  renderFireButton() {
    if(this.state.id) {
      return (
        <CardSection>
            <Button onPress={() => Alert.alert(
                                  'Are you sure you want to delete this?',
                                  '',
                                  [
                                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                    {text: 'OK', onPress: this.onFirePress.bind(this)},
                                  ],
                                  { cancelable: false }
                                )}>
                Fire Employee
            </Button>
        </CardSection>
      )
    }
  }

  render() {

    const {
      createMember,
      deleteMember,
      updateMember,
      loadMember
    } = this.props;

    return (
      <Card>
        <CardSection>
            <Input
                name="name"
                label="Name"
                placeholder="Your Name"
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
            />
        </CardSection>
        <CardSection>
            <Input
                name="phone"
                label="Phone"
                placeholder="Your Phone"
                onChangeText={(phone) => this.setState({phone})}
                value={this.state.phone}
            />
        </CardSection>
        <CardSection>
            <Picker
                name="shift"
                label="Shift"
                selectedValue={this.state.shift}
                onValueChange={(itemValue, itemIndex) => this.setState({shift: itemValue})}
            />
        </CardSection>
        <CardSection>
            <Button onPress={this.onSavePress.bind(this)}>
                Save Changes
            </Button>
        </CardSection>

        {this.renderFireButton()}
        
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  ...state.memberForm,
});

const mapDispatchToProps = dispatch => ({
  addMember: (emp) =>
      dispatch(createMember(emp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetails);