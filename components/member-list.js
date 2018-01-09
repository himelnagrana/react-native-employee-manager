import React, {Component} from "react";
import {FlatList, View, Text} from "react-native";
import MemberListItem from './member.list.item';
import Button from './buttons'
import Card from './card';
import CardSection from './card.section';
import { Icon } from 'react-native-elements'

import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { navigateTo } from "../GlobalNavigator";


class MemberList extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerRight = (
          <Text style={{fontWeight: 'bold', marginRight: 10, color: 'green'}}>Hi! {params.username}</Text>            
        );
        return { headerRight };
    };

    componentDidMount() {
        this.props.navigation.setParams({ username: this.props.loggedInAs });
    }

    renderRow(member) {
        return <MemberListItem 
                    member={member}
                    gotoMember={this.gotoMember.bind(this)}
                />
    }

    onAddPress() {
        this.props.navigation.navigate('MemberDetails');
    }

    gotoMember(currentMember) {
        navigateTo('MemberDetails', {currentMember});
    }

    render() {

        const {
            allMembers,
            loggedInAs
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
    ...state.auth
  });
  
  const mapDispatchToProps = dispatch => ({
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(MemberList);