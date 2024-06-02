import React from 'react';
import { Pressable, Text } from 'react-native';

const County = () => {
    return (
        <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
                setModalView(!modalView)
                setInputValue('Yes')
            }}
        >
            <Text style={styles.textStyle}>Yes</Text>
        </Pressable>
    )
};

export default County;