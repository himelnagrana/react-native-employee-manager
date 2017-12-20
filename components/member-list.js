import React, {Component} from "react";
import {ListView, View} from "react-native";
import MemberListItem from './member.list.item';
import Button from './buttons'
import Card from './card';
import CardSection from './card.section';

export default class MemberList extends Component {

    componentWillMount() {
        this.createDataSource()
    }

    createDataSource(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.allmembers)
    }

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
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
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
