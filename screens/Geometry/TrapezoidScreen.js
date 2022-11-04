import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const TrapezoidScreen = () => {
    const [sidea, setSidea] = useState('')
    const [sideb, setSideb] = useState('')
    const [sidec, setSidec] = useState('')
    const [sideh, setSideh] = useState('')
    const [area, setArea] = useState('')
    const [perimeter, setPerimeter] = useState('')
    const handleArea = () => {
        if (sidea ==='' || sideb === '' || sideh === '') {
            alert('Please enter a value')
        } else {
            const area = (0.5 * sidea) + (0.5 * sideb) * sideh
            alert('Area of Trapezoid is: ' + area + ' cm^2')
        }
    }
    const handleCircumference = () => {
        if (sidea === '' || sideb === '' || sidec === '') {
            alert('Please enter a value')
        } else {
            const circumference = ((2 * sidea) + (2* sideb) + (4 * sidec))/2
            alert('Circumference of Trapezoid is: ' + circumference + ' cm')
        }
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Trapezoid Formulas :</Text>
                    <Text style={styles.detailtext}>a = parallel side of a trapezoid</Text>
                    <TextInput
                        placeholder="Input a, side of a trapezoid"
                        value={sidea}
                        onChangeText={text => setSidea(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>b = parallel side of a trapezoid</Text>
                    <TextInput
                        placeholder="Input b, side of a trapezoid"
                        value={sideb}
                        onChangeText={text => setSideb(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>c = diagonal side of a trapezoid</Text>
                    <TextInput
                        placeholder="Input c, side of a trapezoid"
                        value={sidec}
                        onChangeText={text => setSidec(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>h = distance between two parallel sides of a trapezoid</Text>
                    <TextInput
                        placeholder="Input h, height of a trapezoid"
                        value={sideh}
                        onChangeText={text => setSideh(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>Perimeter, P = a + b + 2c</Text>
                    <Text style={styles.detailtext}>Area, A = ½(a + b)h</Text>
                    <Text style={styles.detailtext}>Height, h = 2A/(a + b)</Text>
                    <Text style={styles.detailtext}>Base, b = 2(A/h) – a</Text>
                </View>

                <View style={[styles.buttonContainer, { flexDirection: 'row' }]}>
                    <TouchableOpacity
                        onPress={() => (sidea === '' || sideb === '' || sideh === '') ? alert('Please enter a value') : setArea(((0.5 * sidea) + (0.5 * sideb)) * sideh)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Area</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => (sidea === '' || sideb === '' || sidec === '') ? alert('Please enter a value') : setPerimeter(((2 * sidea) + (2* sideb) + (4 * sidec))/2)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Circumference</Text>
                    </TouchableOpacity>
                </View>

                {area !== '' && (
                    <Text style={styles.detailtext}>Area of Trapezoid is: {area} cm^2</Text>    
                )}

                {perimeter !== '' && (
                    <Text style={styles.detailtext}>Circumference of Trapezoid is: {perimeter} cm</Text>
                )}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default TrapezoidScreen

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