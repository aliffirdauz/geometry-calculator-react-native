import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";


const Flex = () => {

    const navigation = useNavigation();

    const handleCircle = () => {
        navigation.navigate("Circle");
    };

    const handleSquare = () => {
        navigation.navigate("Square");
    };

    const handleRectangle = () => {
        navigation.navigate("Rectangle");
    };

    const handleTriangle = () => {
        navigation.navigate("Triangle");
    };

    const handleParallelogram = () => {
        navigation.navigate("Parallelogram");
    };

    const handleTrapezoid = () => {
        navigation.navigate("Trapezoid");
    };

    const handleRhombus = () => {
        navigation.navigate("Rhombus");
    };

    const handlePentagon = () => {
        navigation.navigate("Pentagon");
    };

    return (
        <ScrollView>
            <View style={{ margin: 20, justifyContent: 'center' }}>
                <Text style={[styles.title, { textAlign: 'center' }]}>Choose a Geometry</Text>
            </View>
            <View style={[styles.container, {
                flexDirection: "column", height: '100%'
            }]}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableOpacity onPress={handleCircle} style={styles.buttonn}>
                        <View style={styles.box}>
                            <Card.Cover source={{ uri: 'https://cdn-icons-png.flaticon.com/512/481/481078.png' }} style={{ width: '50px', height: '50px' }} />
                            <Text style={styles.text}> Circle</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSquare} style={styles.box}>
                        <View style={styles.box}>
                            <Card.Cover source={{ uri: 'https://cdn-icons-png.flaticon.com/512/545/545666.png' }} style={{ width: '50px', height: '50px' }} />
                            <Text style={styles.text}> Square</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableOpacity onPress={handleRectangle} style={styles.box}>
                        <View style={styles.box}>
                            <Card.Cover source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3305/3305374.png' }} style={{ width: '50px', height: '50px' }} />
                            <Text style={styles.text}>Rectangle</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleParallelogram} style={styles.box}>
                        <View style={styles.box}>
                            <Card.Cover source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4718/4718846.png' }} style={{ width: '50px', height: '50px' }} />
                            <Text style={styles.text}>Parallelogram</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableOpacity onPress={handleRhombus} style={styles.box}>
                        <View style={styles.box}>
                            <Card.Cover source={{ uri: 'https://cdn-icons-png.flaticon.com/512/649/649721.png' }} style={{ width: '50px', height: '50px' }} />
                            <Text style={styles.text}>Rhombus</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleTriangle} style={styles.box}>
                        <View style={styles.box}>
                            <Card.Cover source={{ uri: 'https://cdn-icons-png.flaticon.com/512/481/481099.png' }} style={{ width: '50px', height: '50px' }} />
                            <Text style={styles.text}>Triangle</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableOpacity onPress={handlePentagon} style={styles.box}>
                        <View style={styles.box}>
                            <Card.Cover source={{ uri: 'https://cdn-icons-png.flaticon.com/512/649/649725.png' }} style={{ width: '50px', height: '50px' }} />
                            <Text style={styles.text}>Pentagon</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleTrapezoid} style={styles.box}>
                        <View style={styles.box}>
                            <Card.Cover source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4718/4718951.png' }} style={{ width: '50px', height: '50px' }} />
                            <Text style={styles.text}>Trapezoid</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    box: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '185px',
        height: '185px',
    },
    buttonn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 32,
        color: "black",
    },
    title: {
        fontSize: 32,
        color: "black",
        fontWeight: "bold",
        fontFamily: 'sans-serif-bold',
    }

});

export default Flex;