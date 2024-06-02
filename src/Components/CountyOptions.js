import React, { useState } from 'react';
import { View, Text, Modal, Pressable, TextInput, StyleSheet, Alert, ScrollView} from 'react-native';

const CountyOptions = () => {
    const [inputValue, setInputValue] = useState('Choose one');
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
                        <ScrollView>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Baringo')
                                }}
                            >
                                <Text style={styles.textStyle}>Baringo</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Bomet')
                                }}
                            >
                                <Text style={styles.textStyle}>Bomet</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Bungoma')
                                }}
                            >
                                <Text style={styles.textStyle}>Bungoma</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Busia')
                                }}
                            >
                                <Text style={styles.textStyle}>Busia</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Elgeyo-Marakwet')
                                }}
                            >
                                <Text style={styles.textStyle}>Elgeyo-Marakwet</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Embu')
                                }}
                            >
                            <Text style={styles.textStyle}>Embu</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Garissa')
                                }}
                            >
                                <Text style={styles.textStyle}>Garissa</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Homa Bay')
                                }}
                            >
                                <Text style={styles.textStyle}>Homa Bay</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Isiolo')
                                }}
                            >
                                <Text style={styles.textStyle}>Isiolo</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Kajiado')
                                }}
                            >
                                <Text style={styles.textStyle}>Kajiado</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Kakamega')
                                }}
                            >
                            <Text style={styles.textStyle}>Kakamega</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Kericho')
                                }}
                            >
                                <Text style={styles.textStyle}>Kericho</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Kiambu')
                                }}
                            >
                                <Text style={styles.textStyle}>Kiambu</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Kilifi')
                                }}
                            >
                                <Text style={styles.textStyle}>Kilifi</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Kirinyaga')
                                }}
                            >
                                <Text style={styles.textStyle}>Kirinyaga</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Kisii')
                                }}
                            >
                            <Text style={styles.textStyle}>Kisii</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Kisumu')
                                }}
                            >
                                <Text style={styles.textStyle}>Kisumu</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Kitui')
                                }}
                            >
                                <Text style={styles.textStyle}>Kitui</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Kwale')
                                }}
                            >
                                <Text style={styles.textStyle}>Kwale</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Laikipia')
                                }}
                            >
                                <Text style={styles.textStyle}>Laikipia</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Lamu')
                                }}
                            >
                            <Text style={styles.textStyle}>Lamu</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Machakos')
                                }}
                            >
                                <Text style={styles.textStyle}>Machakos</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Makueni')
                                }}
                            >
                                <Text style={styles.textStyle}>Makueni</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Mandera')
                                }}
                            >
                                <Text style={styles.textStyle}>Mandera</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Marsabit')
                                }}
                            >
                                <Text style={styles.textStyle}>Marsabit</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Meru')
                                }}
                            >
                            <Text style={styles.textStyle}>Meru</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Migori')
                                }}
                            >
                                <Text style={styles.textStyle}>Migori</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Mombasa')
                                }}
                            >
                                <Text style={styles.textStyle}>Mombasa</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue("Murang'a")
                                }}
                            >
                                <Text style={styles.textStyle}>Murang'a</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Nairobi')
                                }}
                            >
                                <Text style={styles.textStyle}>Nairobi</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Nakuru')
                                }}
                            >
                            <Text style={styles.textStyle}>Nakuru</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Nandi')
                                }}
                            >
                                <Text style={styles.textStyle}>Nandi</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Narok')
                                }}
                            >
                                <Text style={styles.textStyle}>Narok</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Nyamira')
                                }}
                            >
                                <Text style={styles.textStyle}>Nyamira</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Nyandarua')
                                }}
                            >
                                <Text style={styles.textStyle}>Nyandarua</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Nyeri')
                                }}
                            >
                            <Text style={styles.textStyle}>Nyeri</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Samburu')
                                }}
                            >
                                <Text style={styles.textStyle}>Samburu</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Siaya')
                                }}
                            >
                                <Text style={styles.textStyle}>Siaya</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Taita-Taveta')
                                }}
                            >
                                <Text style={styles.textStyle}>Taita-Taveta</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Tana River')
                                }}
                            >
                                <Text style={styles.textStyle}>Tana River</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Tharaka-Nithi')
                                }}
                            >
                            <Text style={styles.textStyle}>Tharaka-Nithi</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Trans Nzoia')
                                }}
                            >
                                <Text style={styles.textStyle}>Trans Nzoia</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Turkana')
                                }}
                            >
                                <Text style={styles.textStyle}>Turkana</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Uasin Gishu')
                                }}
                            >
                                <Text style={styles.textStyle}>Uasin Gishu</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Vihiga')
                                }}
                            >
                                <Text style={styles.textStyle}>Vihiga</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('Wajir')
                                }}
                            >
                                <Text style={styles.textStyle}>Wajir</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => {
                                    setModalView(!modalView)
                                    setInputValue('West Pokot')
                                }}
                            >
                                <Text style={styles.textStyle}>West Pokot</Text>
                            </Pressable>

                        </ScrollView>
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
        width: 220,
        height: 50, 
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 4,
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
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
        elevation: 5,
    },
    innerModalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8
    }
});

export default CountyOptions;