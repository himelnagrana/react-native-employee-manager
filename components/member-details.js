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
    if(this.props.navigation.state.params) {
      mem = this.props.navigation.state.params.currentMember;
      this.setState({
        id: mem.id,
        name: mem.name,
        phone: mem.phone,
        shift: mem.shift
      })
    }
  }

  onFirePress() {
    this.props.deleteMember(this.state.id)
  }

  onSavePress() {
    if (this.state.name.length > 0 && this.state.phone.length > 0) { 
      const emp = {
        id: this.state.id,
        name: this.state.name,
        phone: this.state.phone,
        shift: this.state.shift,
      }
      if(emp.id) {
        this.props.updateMember(emp)
      } else {
        this.props.addMember(emp)
      }
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
      currentMember
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

const mapStateToProps = (state, ownProps) => ({
  ...state.members,
});

const mapDispatchToProps = dispatch => ({
  addMember: (emp) =>
    dispatch(createMember(emp)),
  deleteMember: (id) =>
    dispatch(deleteMember(id)),
  loadMember: (emp) =>
    dispatch(loadMember(emp)),
  updateMember: (emp) =>
    dispatch(updateMember(emp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetails);