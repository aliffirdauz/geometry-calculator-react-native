import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { auth } from '../firebase'

const ShowScreen = ({ route }) => {
    return (
        <ScrollView>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Card.Cover source={{ uri: route.params.image }} style={{ margin: 20, width: 200, height: 200 }} />
                <Text style={styles.teks}>Name : {route.params.fullname}</Text>
                <Text style={styles.teks}>Gender : {route.params.gender}</Text>
                <Text style={styles.teks}>Email : {auth.currentUser?.email}</Text>
                <Text style={styles.teks}>Address : {route.params.address}</Text>
                <Text style={styles.teks}>Major : {route.params.major}</Text>
                <Text style={styles.teks}>Batch : {route.params.batch}</Text>
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
    teks : {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    }
})