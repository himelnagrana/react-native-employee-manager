import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Alert } from 'react-native';
import  CardSection  from './card.section';

class MemberListItem extends Component {

    gotoMember() {
        this.props.gotoMember(this.props.member)
    }

    render() {
        const { id, name, phone, shift } = this.props.member;

        return (
            <TouchableWithoutFeedback onPress={this.gotoMember.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name} - (Ph:{phone}) ({shift})
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default MemberListItem;