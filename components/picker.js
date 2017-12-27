import React from 'react';
import { View, Text, Picker } from 'react-native';

const PickerInput = ({ name, label, selectedValue, onValueChange}) => (
    
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <Picker style={styles.inputStyle}
            name={name}
            selectedValue={selectedValue}
            onValueChange={onValueChange}>
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
        </Picker>   
    </View>
);

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        height: 200,
        width: '100%',
        
    },
    labelStyle: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 20,
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
};

export default PickerInput;