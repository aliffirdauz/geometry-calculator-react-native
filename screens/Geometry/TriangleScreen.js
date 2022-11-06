import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const TriangleScreen = () => {
    const [sidea, setSidea] = useState('')
    const [sideb, setSideb] = useState('')
    const [sidec, setSidec] = useState('')
    const [sideh, setSideh] = useState('')
    const [area, setArea] = useState('')
    const [perimeter, setPerimeter] = useState('')

    const handleArea = () => {
        var localarea = (sideb * sideh) / 2
        sideb === '' || sideh === '' ? alert('Please enter a value') : setArea(localarea.toString())
    }

    const handlePerimeter = () => {
        var localperimeter = parseInt(sidea) + parseInt(sideb) + parseInt(sidec)
        sidea === '' || sideb === '' || sidec === '' ? alert('Please enter a value') : setPerimeter(localperimeter.toString())
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Triangle Formulas :</Text>
                    <Text style={styles.detailtext}>a = side of a triangle</Text>
                    <TextInput
                        placeholder="Input a, side of a triangle"
                        value={sidea}
                        onChangeText={text => setSidea(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>b = side of a triangle</Text>
                    <TextInput
                        placeholder="Input b, side of a triangle"
                        value={sideb}
                        onChangeText={text => setSideb(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>c = side of a triangle</Text>
                    <TextInput
                        placeholder="Input c, side of a triangle"
                        value={sidec}
                        onChangeText={text => setSidec(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>h = height of a triangle</Text>
                    <TextInput
                        placeholder="Input h, height of a triangle"
                        value={sideh}
                        onChangeText={text => setSideh(text)}
                        style={styles.input}
                    />
                    <Text style={styles.detailtext}>Perimeter, P = a + b + c</Text>
                    <Text style={styles.detailtext}>Area, A = ½ bh</Text>
                    <Text style={styles.detailtext}>Height, h = 2(A/b)</Text>
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
                    <Text style={{ marginTop : 20}}>Area of Triangle is: {area} cm^2</Text>
                )}
                {perimeter !== '' && (
                    <Text style={{ marginTop : 20}}>Perimeter of Triangle is: {perimeter} cm</Text>
                )}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default TriangleScreen

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