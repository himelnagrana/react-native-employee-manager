import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import Card from './card';
import CardSection from './card.section';
import Input from './input';
import Button from './buttons';

export default class AddMember extends Component {

    constructor() {
        super()
        this.name = '';
        this.phone = '';
        this.shifts = [ 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday' ]
    }
    state = {
        selectedShift: "",
    };
    componentDidMount() {
        if (this.props.visible){
            this.setState({
                selectedShift: this.shifts[0]
            });
        }
    }
    onNameChange(text) {
        this.name = text;
    }

    onPhoneChange(text) {
        this.phone = text;
    }

    onButtonPress() {
        if (this.name.length > 0 && this.phone.length > 0 && this.state.selectedShift.length > 0) {
            var member = {
                name: this.name,
                phone: this.phone,
                shift: this.state.selectedShift
            }
            this.props.addNewMember(member);
        }
    }

    componentDidMount() {
        if (this.props.visible)
            this.props.titleBarApi("", "Add Employee", "");
    }

    render() {
        let shiftItems = this.shifts.map( (s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });

        if (this.props.visible) {
            return (
                <Card>
                    <CardSection>
                        <Input
                            label="Name"
                            placeholder="John Doe"
                            onChangeText={this.onNameChange.bind(this)}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="phone"
                            placeholder="123456"
                            onChangeText={this.onPhoneChange.bind(this)}
                        />
                    </CardSection>
                    <CardSection>
                        <Text>Shift</Text>
                    </CardSection>
                    <Picker
                        selectedValue={this.state.selectedShift}
                        onValueChange={(itemValue, itemIndex) => this.setState({selectedShift: itemValue})}>
                        {shiftItems}
                    </Picker>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Add
                        </Button>
                    </CardSection>
                </Card>
            );
        } else {
            return <View/>;
        }
    }
}
