import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CircleScreen = () => {
    const [radius, setRadius] = useState('')
    const [area, setArea] = useState('')
    const [circumference, setCircumference] = useState('')

    const handleArea = () => {
        var localarea = 3.14 * radius * radius
        radius === '' ? alert('Please enter a value') : setArea(localarea.toString())
    }

    const handleCircumference = () => {
        var localcircumference = 2 * 3.14 * radius
        radius === '' ? alert('Please enter a value') : setCircumference(localcircumference.toString())
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Circle Formulas :</Text>
                    <Text>r = radius of a circle</Text>
                    <TextInput
                        placeholder="Input radius"
                        value={radius}
                        onChangeText={text => setRadius(text)}
                        style={styles.input}
                    />
                    <Text>Circumference = 2πr</Text>
                    <Text>Area = πr2</Text>
                    <Text>Diameter = 2r</Text>
                </View>

                <View style={[styles.buttonContainer, { flexDirection: 'row' }]}>
                    <TouchableOpacity
                        onPress={handleArea}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Area</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleCircumference}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Circumference</Text>
                    </TouchableOpacity>
                </View>

                {area !== '' && (
                    <Text style={{marginTop: 20}}>Area of Circle is: {area} cm^2</Text>
                )}

                {circumference !== '' && (
                    <Text style={{marginTop: 20}}>Circumference of Circle is: {circumference} cm</Text>
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
    },
})