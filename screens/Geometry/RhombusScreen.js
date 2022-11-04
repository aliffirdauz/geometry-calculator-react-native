import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const RhombusScreen = () => {
    const [sidea, setSidea] = useState('')
    const [diameter1, setDiameter1] = useState('')
    const [diameter2, setDiameter2] = useState('')
    const [area, setArea] = useState('')
    const [perimeter, setPerimeter] = useState('')

    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Rhombus Formulas :</Text>
                    <Text style={styles.detailtext}>a = side of a rhombus</Text>
                    <TextInput
                        placeholder="Input side of a rhombus"
                        value={sidea}
                        onChangeText={text => setSidea(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>d1 = diameter 1 of a rhombus</Text>
                    <TextInput
                        placeholder="Input diameter 1 of a rhombus"
                        value={diameter1}
                        onChangeText={text => setDiameter1(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>d2 = diameter 2 of a rhombus</Text>
                    <TextInput
                        placeholder="Input diameter 2 of a rhombus"
                        value={diameter2}
                        onChangeText={text => setDiameter2(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>Perimeter = 4a</Text>
                    <Text style={styles.detailtext}>Area = 1/2 × d1 × d2</Text>
                </View>

                <View style={[styles.buttonContainer, { flexDirection: 'row' }]}>
                    <TouchableOpacity
                        onPress={() => (diameter1 === '' || diameter2 === '') ? alert('Please enter diameter 1 and diameter 2 of a rhombus') : setArea((diameter1 * diameter2)/2)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Area</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => (sidea === '') ? alert('Please enter side of a rhombus') : setPerimeter(4*sidea)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Perimeter</Text>
                    </TouchableOpacity>
                </View>

                {area !== '' && (
                    <Text style={[styles.detailtext,{marginTop: 20}]}>Area of Rhombus is: {area} cm^2</Text>
                )}

                {perimeter !== '' && (
                    <Text style={[styles.detailtext,{marginTop: 20}]}>Perimeter of Rhombus is: {perimeter} cm</Text>
                )}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default RhombusScreen

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