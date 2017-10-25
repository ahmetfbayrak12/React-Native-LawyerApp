import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtunYaw = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}> 
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,

    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default ButtunYaw;
