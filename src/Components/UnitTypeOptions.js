import React, { useState } from 'react';
import { View, Text, Modal, Pressable, TextInput, StyleSheet, Alert} from 'react-native';

const UnitType = () => {
    const [inputValue, setInputValue] = useState('Select unit type');
    const [modalView, setModalView] = useState(false);
    // const [accType, setAccType] = useState(['Agent', 'Property Manager', 'Service Provider', 'Tenant']);

    /*
    const handleOptionSelect = () => {
        setModalView(false);
        setInputValue(option);
    };
    */

    return (
        <View style={[styles.mainModalView, styles.centeredView]}>
            <Modal 
                transparent={true}
                visible={modalView}
                animationType="fade"
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                    setModalView(!modalView)
                }}
            >
                <View style={styles.mainModalView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={[styles.button2, styles.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('One Bedroom')
                            }}
                        >
                            <Text style={styles.textStyle}>One Bedroom</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button2, styles.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Two Bedroom')
                            }}
                        >
                            <Text style={styles.textStyle}>Two Bedroom</Text>
                        </Pressable>
                        <Pressable
                        style={[styles.button2, styles.buttonClose]}
                        onPress={() => {
                            setModalView(!modalView)
                            setInputValue('Three Bedroom')
                        }}
                        >
                            <Text style={styles.textStyle}>Three Bedroom</Text>
                        </Pressable>
                        <Pressable
                        style={[styles.button2, styles.buttonClose]}
                        onPress={() => {
                            setModalView(!modalView)
                            setInputValue('Four Bedroom')
                        }}
                        >
                            <Text style={styles.textStyle}>Four bedroom</Text>
                        </Pressable>
                        <Pressable
                        style={[styles.button2, styles.buttonClose]}
                        onPress={() => {
                            setModalView(!modalView)
                            setInputValue('Five bedroom')
                        }}
                        >
                            <Text style={styles.textStyle}>Five Bedroom</Text>
                        </Pressable>
                        <Pressable
                        style={[styles.button2, styles.buttonClose]}
                        onPress={() => {
                            setModalView(!modalView)
                            setInputValue('Six bedroom')
                        }}
                        >
                            <Text style={styles.textStyle}>Six bedroom</Text>
                        </Pressable>
                        {/*
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Tenant')
                            }}
                            >
                                <Text style={styles.textStyle}>Tenant</Text>
                            </Pressable>
                        */}
                    </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => {setModalView(!modalView)}}>
                <Text style={styles.textStyle}>{inputValue}</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 12,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 15,
        borderWidth: 2,
        padding: 10,
    },
    button: {
        width: 320,
        height: 50, 
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: -30,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    button2: {
        width: 320,
        height: 50, 
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 12,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    buttonOpen: {
        backgroundColor: '#fff',
    },
    buttonClose: {
        backgroundColor: 'yellow',
    },
    textStyle: {
        color: 'black'
    },
    mainModalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginVertical: 10
    },
    centeredView: {
        marginVertical: 42,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#ccc',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    innerModalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8
    }
});

export default UnitType;