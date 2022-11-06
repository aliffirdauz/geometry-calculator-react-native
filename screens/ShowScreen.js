import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'

const ShowScreen = ({ route }) => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace('Login');
            })
            .catch(error => alert(error.message))
    }

    return (
        <ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Card.Cover source={{ uri: route.params.image }} style={{ margin: 20, width: 200, height: 200 }} />
                <Text style={styles.teks}>Name : {route.params.fullname}</Text>
                <Text style={styles.teks}>Gender : {route.params.gender}</Text>
                <Text style={styles.teks}>Email : {auth.currentUser?.email}</Text>
                <Text style={styles.teks}>Address : {route.params.address}</Text>
                <Text style={styles.teks}>Major : {route.params.major}</Text>
                <Text style={styles.teks}>Batch : {route.params.batch}</Text>
                <TouchableOpacity
                    onPress={handleSignOut}
                    style={[styles.button, { width: 100, marginTop: 20, backgroundColor: 'red' }]}
                >
                    <Text style={styles.buttonText}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ShowScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    teks: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    }
})