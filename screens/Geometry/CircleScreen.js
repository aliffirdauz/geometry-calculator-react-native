import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CircleScreen = () => {
    const [radius, setRadius] = useState('')
    const [area, setArea] = useState('')
    const [circumference, setCircumference] = useState('')

    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Circle Formulas :</Text>
                    <Text style={styles.detailtext}>r = radius of a circle</Text>
                    <TextInput
                        placeholder="Input radius"
                        value={radius}
                        onChangeText={text => setRadius(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>Circumference = 2πr</Text>
                    <Text style={styles.detailtext}>Area = πr2</Text>
                    <Text style={styles.detailtext}>Diameter = 2r</Text>
                </View>

                <View style={[styles.buttonContainer, { flexDirection: 'row' }]}>
                    <TouchableOpacity
                        onPress={() => (radius === '') ? alert('Please enter radius of a circle') : setArea(3.14 * radius * radius)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Area</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setCircumference(2*radius*3.14)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Circumference</Text>
                    </TouchableOpacity>
                </View>

                {area !== '' && (
                    <Text style={[styles.detailtext,{marginTop: 20}]}>Area of Circle is: {area} cm^2</Text>
                )}

                {circumference !== '' && (
                    <Text style={[styles.detailtext,{marginTop: 20}]}>Circumference of Circle is: {circumference} cm</Text>
                )}


            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default CircleScreen

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
        marginBottom: 5,
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
        width: '50%',
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
        fontSize: 36,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'sans-serif-bold',
    },
    detailtext: {
        fontSize: 16,
        margin: 5,
        textAlign: 'start',
        fontFamily: 'sans-serif',
    },
})