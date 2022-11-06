import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'
import { Card } from 'react-native-paper';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const handleSignUp = () => {
        navigation.navigate('Registration');
    }

    const handleLogin = () => {
        email === '' || password === '' ? alert('Please fill all the fields') : 
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                alert('Logged in successfully');
                console.warn('Logged in with:', user.email);
                navigation.navigate('Dashboard');
            })
            .catch(error => alert(error.message))
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
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <Card.Cover source={{ uri: 'https://drive.google.com/uc?id=1v-RLROQ2-xBGz3yItEZ1WuJjcmF_fBa9' }}
                    style={{ borderRadius: 20, marginBottom: 20, justifyContent: 'center', width: 200, height: 200, alignSelf: 'center' }}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>Don't have an account? <Text onPress={handleSignUp} style={styles.footerLink}>Sign up</Text></Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

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
        borderWidth: 1

    },
    buttonContainer: {
        width: '59%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
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
        marginBottom: 20,
        textAlign: 'center',
        
    },
    footerText: {
        marginTop: 20,
        fontSize: 16,
        color: '#000000',
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})