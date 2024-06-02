import React, { useState } from 'react';
import { View, Text, Modal, Pressable, TextInput, StyleSheet, Alert} from 'react-native';
import MaintenanceRequest from '../screens/MaintenanceRequestScreen';

const MaintenanceRequestOptions = () => {
    const [inputValue, setInputValue] = useState('');
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
                                setInputValue('Own Property')
                            }}
                        >
                            <Text style={styles.textStyle}>Own Property</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button2, styles.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Lease Property')
                            }}
                        >
                            <Text style={styles.textStyle}>Lease Property</Text>
                        </Pressable>
                        <Pressable
                        style={[styles.button2, styles.buttonClose]}
                        onPress={() => {
                            setModalView(!modalView)
                            setInputValue('Property with Rental Units')
                        }}
                        >
                            <Text style={styles.textStyle}>Property with Rental Units</Text>
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

export default MaintenanceRequestOptions;

export const Status = () => {
    const [inputValue, setInputValue] = useState('Pending');
    const [modalView, setModalView] = useState(false);
    // const [accType, setAccType] = useState(['Agent', 'Property Manager', 'Service Provider', 'Tenant']);

    /*
    const handleOptionSelect = () => {
        setModalView(false);
        setInputValue(option);
    };
    */

    return (
        <View style={[styles2.mainModalView, styles2.centeredView]}>
            <Modal 
                transparent={true}
                visible={modalView}
                animationType="fade"
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                    setModalView(!modalView)
                }}
            >
                <View style={styles2.mainModalView}>
                    <View style={styles2.modalView}>
                        <Pressable
                            style={[styles2.button2, styles2.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Pending')
                            }}
                        >
                            <Text style={styles2.textStyle}>Pending</Text>
                        </Pressable>
                        <Pressable
                            style={[styles2.button2, styles2.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('In Progress')
                            }}
                        >
                            <Text style={styles2.textStyle}>In Progress</Text>
                        </Pressable>
                        <Pressable
                        style={[styles2.button2, styles2.buttonClose]}
                        onPress={() => {
                            setModalView(!modalView)
                            setInputValue('Completed')
                        }}
                        >
                            <Text style={styles.textStyle}>Completed</Text>
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
            <Pressable style={[styles2.button, styles2.buttonOpen]} onPress={() => {setModalView(!modalView)}}>
                <Text style={styles2.textStyle}>{inputValue}</Text>
            </Pressable>
        </View>
    )
};

const styles2 = StyleSheet.create({
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


export const IssueType = () => {
    const [inputValue, setInputValue] = useState('Issue Type');
    const [modalView, setModalView] = useState(false);
    // const [accType, setAccType] = useState(['Agent', 'Property Manager', 'Service Provider', 'Tenant']);

    /*
    const handleOptionSelect = () => {
        setModalView(false);
        setInputValue(option);
    };
    */

    return (
        <View style={[styles3.mainModalView, styles3.centeredView]}>
            <Modal 
                transparent={true}
                visible={modalView}
                animationType="fade"
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                    setModalView(!modalView)
                }}
            >
                <View style={styles3.mainModalView}>
                    <View style={styles3.modalView}>
                        <Pressable
                            style={[styles3.button2, styles3.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Electrical')
                            }}
                        >
                            <Text style={styles3.textStyle}>Electrical</Text>
                        </Pressable>
                        <Pressable
                            style={[styles3.button2, styles3.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('House Damage')
                            }}
                        >
                            <Text style={styles3.textStyle}>House Damage</Text>
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
            <Pressable style={[styles3.button, styles3.buttonOpen]} onPress={() => {setModalView(!modalView)}}>
                <Text style={styles3.textStyle}>{inputValue}</Text>
            </Pressable>
        </View>
    )
};

const styles3 = StyleSheet.create({
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



export const Maintainer = () => {
    const [inputValue, setInputValue] = useState('Maintainer');
    const [modalView, setModalView] = useState(false);
    // const [accType, setAccType] = useState(['Agent', 'Property Manager', 'Service Provider', 'Tenant']);

    /*
    const handleOptionSelect = () => {
        setModalView(false);
        setInputValue(option);
    };
    */

    return (
        <View style={[styles4.mainModalView, styles4.centeredView]}>
            <Modal 
                transparent={true}
                visible={modalView}
                animationType="fade"
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                    setModalView(!modalView)
                }}
            >
                <View style={styles4.mainModalView}>
                    <View style={styles4.modalView}>
                        <Pressable
                            style={[styles4.button2, styles4.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Electrical')
                            }}
                        >
                            <Text style={styles4.textStyle}>Electrical</Text>
                        </Pressable>
                        <Pressable
                            style={[styles4.button2, styles4.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('House Damage')
                            }}
                        >
                            <Text style={styles3.textStyle}>House Damage</Text>
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
            <Pressable style={[styles4.button, styles4.buttonOpen]} onPress={() => {setModalView(!modalView)}}>
                <Text style={styles4.textStyle}>{inputValue}</Text>
            </Pressable>
        </View>
    )
};

const styles4 = StyleSheet.create({
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



export const Unit = () => {
    const [inputValue, setInputValue] = useState('Select unit');
    const [modalView, setModalView] = useState(false);
    // const [accType, setAccType] = useState(['Agent', 'Property Manager', 'Service Provider', 'Tenant']);

    /*
    const handleOptionSelect = () => {
        setModalView(false);
        setInputValue(option);
    };
    */

    return (
        <View style={[styles5.mainModalView, styles5.centeredView]}>
            <Modal 
                transparent={true}
                visible={modalView}
                animationType="fade"
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                    setModalView(!modalView)
                }}
            >
                <View style={styles5.mainModalView}>
                    <View style={styles5.modalView}>
                        <Pressable
                            style={[styles5.button2, styles5.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Electrical')
                            }}
                        >
                            <Text style={styles5.textStyle}>Electrical</Text>
                        </Pressable>
                        <Pressable
                            style={[styles5.button2, styles5.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('House Damage')
                            }}
                        >
                            <Text style={styles5.textStyle}>House Damage</Text>
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
            <Pressable style={[styles5.button, styles5.buttonOpen]} onPress={() => {setModalView(!modalView)}}>
                <Text style={styles5.textStyle}>{inputValue}</Text>
            </Pressable>
        </View>
    )
};

const styles5 = StyleSheet.create({
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
        elevation: 5
    },
    innerModalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8
    }
});



export const Property = () => {
    const [inputValue, setInputValue] = useState('Select Property');
    const [modalView, setModalView] = useState(false);
    // const [accType, setAccType] = useState(['Agent', 'Property Manager', 'Service Provider', 'Tenant']);

    /*
    const handleOptionSelect = () => {
        setModalView(false);
        setInputValue(option);
    };
    */

    return (
        <View style={[styles6.mainModalView, styles6.centeredView]}>
            <Modal 
                transparent={true}
                visible={modalView}
                animationType="fade"
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                    setModalView(!modalView)
                }}
            >
                <View style={styles6.mainModalView}>
                    <View style={styles6.modalView}>
                        <Pressable
                            style={[styles6.button2, styles6.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Electrical')
                            }}
                        >
                            <Text style={styles6.textStyle}>Electrical</Text>
                        </Pressable>
                        <Pressable
                            style={[styles6.button2, styles6.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('House Damage')
                            }}
                        >
                            <Text style={styles6.textStyle}>House Damage</Text>
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
            <Pressable style={[styles6.button, styles6.buttonOpen]} onPress={() => {setModalView(!modalView)}}>
                <Text style={styles6.textStyle}>{inputValue}</Text>
            </Pressable>
        </View>
    )
};

const styles6 = StyleSheet.create({
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


export const MaintainerType = () => {
    const [inputValue, setInputValue] = useState('Type of Maintainer');
    const [modalView, setModalView] = useState(false);
    // const [accType, setAccType] = useState(['Agent', 'Property Manager', 'Service Provider', 'Tenant']);

    /*
    const handleOptionSelect = () => {
        setModalView(false);
        setInputValue(option);
    };
    */

    return (
        <View style={[styles7.mainModalView, styles7.centeredView]}>
            <Modal 
                transparent={true}
                visible={modalView}
                animationType="fade"
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                    setModalView(!modalView)
                }}
            >
                <View style={styles7.mainModalView}>
                    <View style={styles7.modalView}>
                        <Pressable
                            style={[styles7.button2, styles7.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('Electrical')
                            }}
                        >
                            <Text style={styles7.textStyle}>Electrical</Text>
                        </Pressable>
                        <Pressable
                            style={[styles7.button2, styles7.buttonClose]}
                            onPress={() => {
                                setModalView(!modalView)
                                setInputValue('House Damage')
                            }}
                        >
                            <Text style={styles7.textStyle}>House Damage</Text>
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
            <Pressable style={[styles7.button, styles7.buttonOpen]} onPress={() => {setModalView(!modalView)}}>
                <Text style={styles7.textStyle}>{inputValue}</Text>
            </Pressable>
        </View>
    )
};

const styles7 = StyleSheet.create({
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