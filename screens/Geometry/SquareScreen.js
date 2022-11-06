import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const SquareScreen = () => {
    const [side, setSide] = useState('')
    const [area, setArea] = useState('')
    const [perimeter, setPerimeter] = useState('')

    const handleArea = () => {
        var localarea = side * side
        side === '' ? alert('Please enter a value') : setArea(localarea.toString())
    }

    const handlePerimeter = () => {
        var localperimeter = 4 * side
        side === '' ? alert('Please enter a value') : setPerimeter(localperimeter.toString())
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Square Formulas :</Text>
                    <Text>a = side of a square</Text>
                    <TextInput
                        placeholder="Input side of a square"
                        value={side}
                        onChangeText={text => setSide(text)}
                        style={styles.input}
                    />
                    <Text>Perimeter, P = 4a</Text>
                    <Text>Area, A = a2</Text>
                    <Text>Diagonal, d = a√2</Text>
                </View>

                <View style={[styles.buttonContainer, { flexDirection: 'row' }]}>
                    <TouchableOpacity
                        onPress={handleArea}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Area</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handlePerimeter}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Perimeter</Text>
                    </TouchableOpacity>
                </View>

                {area !== '' && (
                    <Text style={{marginTop: 20}}>Area of Square is: {area} cm^2</Text>
                )}

                {perimeter !== '' && (
                    <Text style={{marginTop: 20}}>Perimeter of Square is: {perimeter} cm</Text>
                )}

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default SquareScreen

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