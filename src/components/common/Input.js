import React from 'react';
import { TextInput, View, Text } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}/>
        </View>

    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 3,
        paddingLeft: 3,
        fontSize: 14,
        lineHeight: 15,
        flex: 2
    },
    labelStyle: {
        fontSize: 14,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 35,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input }; 