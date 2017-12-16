/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, View} from "react-native";

import Topbar from "./components/topbar";
import Login from "./components/login";
import MemberList from "./components/member-list";
import MemberDetails from "./components/member-details";
import AddMember from "./components/member-add";

export default class App extends Component {
    state = {
        loginVisible: true,
        listVisible: false,
        detailsVisible: false,
        addMemberVisible: false,
        titleBarRight: "",
        titleBarTitle: "",
        titleBarLeft: "",
        employees : [
            {
                name: 'Himel',
                phone: '123456',
                shift: 'Saturday'
            },
            {
                name: 'Rana',
                phone: '123456',
                shift: 'Saturday'
            },
            {
                name: 'Shuvro',
                phone: '123456',
                shift: 'Saturday'
            },
            {
                name: 'Proshad',
                phone: '123456',
                shift: 'Saturday'
            }
        ]
    };

    renderLogin() {
         if(this.state.loginVisible){
             return (
                 <Login
                     visible={this.state.loginVisible}
                     titleBarApi={this.setTitleBar.bind(this)}
                     goToMemberList={this.goToMemberList.bind(this)}
                 />
             );
         }
    }

    renderEmployeeList() {
        if(this.state.listVisible){
            return (
                <MemberList
                    visible={this.state.listVisible}
                    titleBarApi={this.setTitleBar.bind(this)}
                    employees={this.state.employees}
                    onAddPress={this.goToMemberList.bind(this)}
                />
            );
        }
    }
    renderAddMember(){
        if(this.state.addMemberVisible){
            return (
                <AddMember
                    visible={this.state.addMemberVisible}
                    titleBarApi={this.setTitleBar.bind(this)}
                    addNewMember={this.addNewMember.bind(this)}
                />
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Topbar
                    leftText={this.state.titleBarLeft}
                    title={this.state.titleBarTitle}
                    rightText={this.state.titleBarRight}
                    onAddPress={this.goToAddMemberPage.bind(this)}
                />
                {this.renderLogin()}
                {this.renderEmployeeList()}
                {this.renderAddMember()}
                <MemberDetails visible={this.state.detailsVisible}/>
            </View>
        );
    }

    setTitleBar(left, title, right) {
        this.setState({
            titleBarRight: left,
            titleBarTitle: title,
            titleBarLeft: right
        });
    }

    goToMemberList() {
        this.setState({
            loginVisible: false,
            listVisible: true,
            detailsVisible: false,
            addMemberVisible: false,
        });
    }
    goToAddMemberPage(){
        this.setState({
            loginVisible: false,
            listVisible: false,
            detailsVisible: false,
            addMemberVisible: true
        });
    }
    addNewMember(member){
        this.setState({
            employees : this.state.employees.concat([member]),
            loginVisible: false,
            listVisible: true,
            detailsVisible: false,
            addMemberVisible: false,
        })
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
