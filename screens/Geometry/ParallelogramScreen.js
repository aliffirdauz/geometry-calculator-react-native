import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ParallelogramScreen = () => {
    const [sidea, setSidea] = useState('')
    const [sideb, setSideb] = useState('')
    const [sideh, setSideh] = useState('')
    const [area, setArea] = useState('')
    const [perimeter, setPerimeter] = useState('')

    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Parallelogram Formulas :</Text>
                    <Text style={styles.detailtext}>a = side of a parallelogram</Text>
                    <TextInput
                        placeholder="Input a, side of a parallelogram"
                        value={sidea}
                        onChangeText={text => setSidea(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>b = side of a parallelogram</Text>
                    <TextInput
                        placeholder="Input b, side of a Parallelogram"
                        value={sideb}
                        onChangeText={text => setSideb(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>h = height of a parallelogram</Text>
                    <TextInput
                        placeholder="Input h, height of a triangle"
                        value={sideh}
                        onChangeText={text => setSideh(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>Perimeter, P = 2(a + b)</Text>
                    <Text style={styles.detailtext}>Area, A = bh</Text>
                    <Text style={styles.detailtext}>Height, h = A/b</Text>
                    <Text style={styles.detailtext}>Base, b = A/h</Text>
                </View>

                <View style={[styles.buttonContainer, { flexDirection: 'row' }]}>
                    <TouchableOpacity
                        onPress={() => (sideb === '' || sideh === '') ? alert('Please enter a value') : setArea(sideb * sideh)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Area</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => (sidea === '' || sideb === '') ? alert('Please enter a value') : setPerimeter((2 * sidea) + (2 * sideb))}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Perimeter</Text>
                    </TouchableOpacity>
                </View>

                {area !== '' && (
                    <Text style={[styles.detailtext,{marginTop: 20}]}>Area of Parallelogram is: {area} cm^2</Text>
                )}

                {perimeter !== '' && (
                    <Text style={[styles.detailtext,{marginTop: 20}]}>Perimeter of Parallelogram is: {perimeter} cm</Text>
                )}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default ParallelogramScreen

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