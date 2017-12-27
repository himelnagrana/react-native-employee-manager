import React, {Component} from "react";
import {FlatList, View, Text} from "react-native";
import MemberListItem from './member.list.item';
import Button from './buttons'
import Card from './card';
import CardSection from './card.section';

export default class MemberList extends Component {

    renderRow(member) {
        return <MemberListItem 
                    member={member}
                    gotoMember={this.gotoMember.bind(this)}
                />
    }

    onButtonPress() {
        this.props.goToDetail()
    }

    gotoMember(emp) {
        this.props.gotoMember(emp)
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.allmembers}
                    renderItem={({item}) => this.renderRow(item)}
                    keyExtractor={item => item.id}
                />
                <Card>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Add Member
                        </Button>
                    </CardSection>
                </Card>
            </View>
        )
       
    }
}
