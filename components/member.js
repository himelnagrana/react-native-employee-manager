/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, View, Alert} from "react-native";

import MemberList from "./member-list";
import MemberDetails from "./member-details";

export default class Member extends Component {

    constructor() {
        super();
        this.allmembers = [
            //{'id': 1, 'name': 'Probal', 'phone': '123456', 'shift': 'Monday'},
        ];
        this.loadThisMember = ''
    }

    state = {
        listVisible: true,
        detailVisible: false,
        titleBarRight: "",
        titleBarTitle: "",
        titleBarLeft: ""
    };

    componentDidMount() {
        this.props.titleBarApi("", "Member", "");
    }

    renderDetail() {
         if(this.state.detailVisible){
             return (
                <MemberDetails 
                    goToList={this.goToList.bind(this)}
                    addMember={this.addMember.bind(this)}
                    deleteMember={this.deleteMember.bind(this)}
                    member={this.loadThisMember}
                />
             );
         }
    }

    renderList() {
        if(this.state.listVisible){
            return (
                <MemberList 
                    goToDetail={this.goToDetail.bind(this)}
                    allmembers={this.allmembers}
                    gotoMember={this.gotoMember.bind(this)}
                />
            );
        }
    }

    setTitleBar(left, title, right) {
        this.setState({
            titleBarRight: left,
            titleBarTitle: title,
            titleBarLeft: right
        });
    }

    goToDetail() {
        this.setState({
            detailVisible: true,
            listVisible: false,
        });
    }

    goToList() {
        this.loadThisMember = ''
        this.setState({
            detailVisible: false,
            listVisible: true,
        });
    }
    
    addMember(emp) {
        const objIndex = this.allmembers.findIndex(o => o.id === emp.id)
        if(objIndex > -1) {
            this.allmembers[objIndex] = emp
        } else {
            emp.id = Date.now()
            this.allmembers.push(emp)
        }
        this.loadThisMember = ''
        this.setState({
            detailVisible: false,
            listVisible: true,
        });
    }

    deleteMember(emp) {
        const objIndex = this.allmembers.findIndex(o => o.id === emp.id)
        if(objIndex > -1) {
            this.allmembers.splice(objIndex, 1)
        }
        this.loadThisMember = ''
        this.setState({
            detailVisible: false,
            listVisible: true,
        });   
    }

    gotoMember(emp) {
        this.loadThisMember = emp
        this.setState({
            detailVisible: true,
            listVisible: false,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderList()}
                {this.renderDetail()}
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
