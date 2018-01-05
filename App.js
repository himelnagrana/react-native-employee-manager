/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Image, Platform } from "react-native";

import Topbar from "./components/topbar";
import Login from "./components/login";
import MemberList from "./components/member-list";
import MemberDetails from "./components/member-details";

export default class App extends Component {
  state = {
    loginVisible: true,
    listVisible: false,
    detailsVisible: false,
    titleBarRight: "",
    titleBarTitle: "",
    titleBarLeft: ""
  };

  renderLogin() {
    if (this.state.loginVisible) {
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
    if (this.state.listVisible) {
      return (
        <MemberList
          visible={this.state.listVisible}
          titleBarApi={this.setTitleBar.bind(this)}
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
        />
        {this.renderLogin()}
        {this.renderEmployeeList()}
        <MemberDetails visible={this.state.detailsVisible} />

        {Platform.OS == "ios" && (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderColor: "green",
              borderWidth: 1
            }}
          >
            {this.props.imageBrowserImages.map((imgURI, index) => {
              index++;
              return (
                <Image
                  key={{ index }}
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    borderColor: "yellow",
                    borderWidth: 1,
                    height: 300
                  }}
                  source={{ uri: imgURI }}
                />
              );
            })}
          </View>
        )}
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
      detailsVisible: false
    });
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
