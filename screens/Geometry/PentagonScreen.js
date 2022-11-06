import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const PentagonScreen = () => {
    const [side, setSide] = useState('')
    const [area, setArea] = useState('')
    const [perimeter, setPerimeter] = useState('')
    
    const handleArea = () => {
        var localarea = (5 * side * side) / (4 * Math.tan(Math.PI / 5))
        side === '' ? alert('Please enter a value') : setArea(localarea.toString())
    }

    const handlePerimeter = () => {
        var localperimeter = 5 * side
        side === '' ? alert('Please enter a value') : setPerimeter(localperimeter.toString())
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Pentagon Formulas :</Text>
                    <Text style={styles.detailtext}>a = side of a pentagon</Text>
                    <TextInput
                        placeholder="Input side of a pentagon"
                        value={side}
                        onChangeText={text => setSide(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>Perimeter, P = 5a</Text>
                    <Text style={styles.detailtext}>Area, A = 1/4 * √5(5+2√5) * a^2 </Text>
                    <Text style={styles.detailtext}>Diagonal, d = (1√5/2)a</Text>
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
                    <Text style={{ marginTop: 20 }}>Area of Pentagon is: {area} cm^2</Text>
                )}

                {perimeter !== '' && (
                    <Text style={{ marginTop: 20 }}>Perimeter of Pentagon is: {perimeter} cm</Text>
                )}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default PentagonScreen

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