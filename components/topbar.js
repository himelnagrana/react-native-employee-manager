import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Topbar extends Component {
    render() {
        return (
                <View style={styles.container}>
                <TouchableOpacity onPress = {this.props.addNewMember} >
                    <Text>{this.props.leftText}</Text>
                </TouchableOpacity>
                <Text style={styles.textStyle}>{this.props.title}</Text>
                <Text style={styles.textStyle}>{this.props.rightText}</Text>
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
