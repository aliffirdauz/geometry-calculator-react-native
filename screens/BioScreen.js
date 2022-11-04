import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { Card, RadioButton } from 'react-native-paper';

export default function BioScreen() {
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState(null)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Informatics', value: 'Informatics' },
        { label: 'Civil Engineering', value: 'Civil Engineering' },
        { label: 'Information System', value: 'Information System' },
        { label: 'Mechanical Engineering', value: 'Mechanical Engineering' }
    ]);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: '2022', value: '2022' },
        { label: '2021', value: '2021' },
        { label: '2020', value: '2020' },
        { label: '2019', value: '2019' }
    ]);
    const [checked, setChecked] = useState('');

    const navigation = useNavigation()

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleSave = () => {
        if (fullName !== '' && address !== '' && value !== '' && value2 !== '' && checked !== '') {
            // alert('Saved!, ' + fullName + ', ' + address + ', ' + value + ', ' + value2);
            console.warn('Saved!');
            console.log('Full Name:', fullName);
            console.log('Gender:', checked);
            console.log('Address:', address);
            console.log('Major:', value);
            console.log('Batch:', value2);
            navigation.navigate("Show", {
                fullname: fullName,
                gender: checked,
                address: address,
                major: value,
                batch: value2,
                image: image
            });
        }
        else {
            alert('Please fill all the fields.');
        }
    }

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace('Login');
            })
            .catch(error => alert(error.message))
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Text style={[styles.title, { fontWeight: 'bold' }]}>Welcome {auth.currentUser?.email}</Text>
                <Text style={styles.title}>Please complete your bio to continue.</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Full Name"
                        value={fullName}
                        onChangeText={text => setFullName(text)}
                        style={styles.input}
                    />
                    <View style={{ width: 300, height: 50, marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ width: 150, height: 50, marginRight: 10, flexDirection: 'row' }}>
                            <RadioButton
                                value="Male"
                                status={checked === 'Male' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Male')}
                            />
                            <Text style={{ marginTop: 8 }}>Male</Text>
                        </View>
                        <View style={{ width: 150, height: 50, marginRight: 10, flexDirection: 'row' }}>
                            <RadioButton
                                value="Female"
                                status={checked === 'Female' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Female')}
                            />
                            <Text style={{ marginTop: 8 }}>Female</Text>
                        </View>
                    </View>
                    <TextInput
                        placeholder="Address"
                        value={address}
                        onChangeText={text => setAddress(text)}
                        style={styles.input}
                    />
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={styles.input}
                        dropDownDirection="TOP"
                        placeholder='Major'
                    />
                    <DropDownPicker
                        open={open2}
                        value={value2}
                        items={items2}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems2}
                        style={[styles.input, { marginBottom: 20 }]}
                        dropDownDirection="TOP"
                        placeholder='Batch'
                    />
                    {image != null ? (
                        <>
                        </>
                    ) : (
                        <>
                            <StatusBar hidden={true} />
                            <TouchableOpacity
                                onPress={pickImage}
                                style={styles.buttonimage}
                            ><Text style={styles.buttonText}>Pick Image</Text></TouchableOpacity>
                            <StatusBar style="auto" />
                        </>
                    )}
                </View>
                {image &&
                    <View>
                        <Card.Cover source={{ uri: image }} style={{ margin: 20, width: 200, height: 200 }} />
                        <TouchableOpacity
                            onPress={pickImage}
                            style={styles.buttonimage}
                        ><Text style={styles.buttonText}>Change Image</Text></TouchableOpacity>
                    </View>
                }
                <View style={[styles.buttonContainer, { marginTop: '10', marginBottom: '10' }]}>
                    <TouchableOpacity
                        onPress={handleSignOut}
                        style={[styles.button, { width: 100, marginTop: 20, backgroundColor: 'red' }]}
                    >
                        <Text style={styles.buttonText}>Sign out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSave}
                        style={[styles.button, { width: 100, marginTop: 20 }]}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderColor: 'lightgray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonContainer: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonimage: {
        backgroundColor: '#0782F9',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderColor: 'lightgray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    title: {
        fontSize: 18,
        // marginBottom: 20,
        textAlign: 'center',
        // fontFamily: 'sans-serif-bold',
    },
})