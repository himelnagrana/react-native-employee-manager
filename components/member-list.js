import React, {Component} from "react";
import {FlatList, View, Text} from "react-native";
import MemberListItem from './member.list.item';
import Button from './buttons'
import Card from './card';
import CardSection from './card.section';

import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';


class MemberList extends Component {

    renderRow(member) {
        return <MemberListItem 
                    member={member}
                    gotoMember={this.gotoMember.bind(this)}
                />
    }

    onAddPress() {
        this.props.navigation.navigate('MemberDetails');
    }

    gotoMember(emp) {
        // with a row data
        this.props.navigation.navigate('MemberDetails');
    }

    render() {

        const {
            allMembers
          } = this.props;

        return (
            <View>
                <FlatList
                    data={allMembers}
                    renderItem={({item}) => this.renderRow(item)}
                    keyExtractor={item => item.id}
                />
                <Card>
                    <CardSection>
                        <Button onPress={this.onAddPress.bind(this)}>
                            Add Member
                        </Button>
                    </CardSection>
                </Card>
            </View>
        )
       
    }
}

const mapStateToProps = state => ({
    ...state.members,
  });
  
  const mapDispatchToProps = dispatch => ({
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(MemberList);