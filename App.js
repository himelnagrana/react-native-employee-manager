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
import EmployeeForm from "./components/employee-form";

export default class App extends Component {

  state = {
    loginVisible: true,
    listVisible: false,
    detailsVisible: false,
    employeeFromVisible: false,
    titleBarLeft: "",
    titleBarRight: "",
    titleBarTitle: "",
    dataEmployees: [{'name': 'Himel'}, {'name': 'Rana'}, {'name': 'Shuvro'}, {'name': 'Proshad'}]
  };

  renderEmployeeForm() {
    if (this.state.employeeFromVisible) {
      return (
          <EmployeeForm
              visible={this.state.employeeFromVisible}
              dataEmployee={this.state.dataEmployees}
              titleBarApi={this.setTitleBar.bind(this)}
              goToMemberList={this.goToMemberList.bind(this)}
              reloadEmployeeList={this.reloadEmployeeList.bind(this)}
          />
      );
    }
  }

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
              dataEmployee={this.state.dataEmployees}
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
              goToEmployeeForm={this.goToEmployeeForm.bind(this)}
          />
          {this.renderLogin()}
          {this.renderEmployeeList()}
          {this.renderEmployeeForm()}
          <MemberDetails visible={this.state.detailsVisible}/>
        </View>
    );
  }

  setTitleBar(left, title, right) {
    this.setState({
      titleBarLeft: left,
      titleBarTitle: title,
      titleBarRight: right
    });
  }

  goToMemberList() {
    this.setState({
      loginVisible: false,
      listVisible: true,
      detailsVisible: false,
      employeeFromVisible: false
    });
  }

  goToEmployeeForm() {
    this.setState({
      loginVisible: false,
      listVisible: false,
      detailsVisible: false,
      employeeFromVisible: true
    });
  }

  reloadEmployeeList(employees) {
    this.setState({
      dataEmployees: employees
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
