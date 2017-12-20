/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, View} from "react-native";

import Topbar from "./components/topbar";
import Login from "./components/login";
import Member from "./components/member";

export default class App extends Component {
    state = {
        loginVisible: true,
        memberVisible: false,
        titleBarRight: "",
        titleBarTitle: "",
        titleBarLeft: ""
    };

    renderLogin() {
         if(this.state.loginVisible){
             return (
                 <Login
                     visible={this.state.loginVisible}
                     titleBarApi={this.setTitleBar.bind(this)}
                     goToMember={this.goToMember.bind(this)}
                 />
             );
         }
    }

    renderMember() {
        if(this.state.memberVisible){
            return (
                <Member
                    titleBarApi={this.setTitleBar.bind(this)}
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

    goToMember() {
        this.setState({
            loginVisible: false,
            memberVisible: true,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Topbar
                    leftText={this.state.titleBarLeft}
                    title={this.state.titleBarTitle}
                    rightText={this.state.titleBarRight}
                />
                {this.renderLogin()}
                {this.renderMember()}
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
