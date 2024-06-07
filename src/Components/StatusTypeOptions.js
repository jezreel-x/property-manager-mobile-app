import React, { useState } from 'react';
import { View, Text, Modal, Pressable, TextInput, StyleSheet, Alert} from 'react-native';

const StatusType = () => {
    const [inputValue, setInputValue] = useState('Pending');
    const [modalView, setModalView] = useState(false);
    // const [accType, setAccType] = useState(['Agent', 'Property Pending', 'Service Provider', 'Close']);

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
                                setInputValue('Pending')
                            }}
                        >
                            <Text style={styles.textStyle}>Pending</Text>
                        </Pressable>
                        <Pressable
                        style={[styles.button2, styles.buttonClose]}
                        onPress={() => {
                            setModalView(!modalView)
                            setInputValue('Open')
                        }}
                        >
                            <Text style={styles.textStyle}>Open</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button2, styles.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Close')
                            }}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>

                        <Pressable
                        style={[styles.button2, styles.buttonClose]}
                        onPress={() => {
                            setModalView(!modalView)
                            setInputValue('On Hold')
                        }}
                        >
                            <Text style={styles.textStyle}>On Hold</Text>
                        </Pressable>
                        {/*
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Close')
                            }}
                            >
                                <Text style={styles.textStyle}>Close</Text>
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
        backgroundColor: 'yelPending',
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

export default StatusType;