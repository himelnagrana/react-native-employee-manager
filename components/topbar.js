import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './buttons';

export default class Topbar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.leftText}</Text>
                <Text style={styles.textStyle} onPress={this.props.onAddPress}>{this.props.title}</Text>
                <Text onPress={this.props.onAddPress.bind(this)}>{this.props.rightText}</Text>
                {/* <Button onPress={this.props.onAddPress.bind(this)}>
                    Login
                </Button> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row-reverse",
        backgroundColor: '#F8F8F8',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        paddingLeft: 15,
        paddingRight: 15
    },
    textStyle: {
        fontSize: 20
    }
});
