import React, {Component} from 'react';
import { StyleSheet, TextInput, View, Text, DatePickerIOS } from 'react-native';

class DatePicker extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
    }
  
    onDateChange(date) {
      this.setState({
        date: date
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.labelStyle} >Shift</Text>
          <Text style={styles.labelStyle} >{this.state.date.toString()}</Text>
          <DatePickerIOS
            date={this.state.date}
            mode="date"
            onDateChange={(date) => this.onDateChange(date)}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#F5FCFF"
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
});

  export default DatePicker