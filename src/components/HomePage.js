import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, ScrollView, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');
export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <View style={stylesHomePage.wrapper}>
                <Swiper
                    style={stylesHomePage.wrapper}
                    showsButtons={true}
                    nextButton={<Text style={stylesHomePage.buttonText}>›</Text>}
                    prevButton={<Text style={stylesHomePage.buttonText}>‹</Text>}
                >
                    <ImageBackground source={require('./../images/01_04_2019_10_19_15_PK-Tai-nghe-800-300.png')} style={stylesHomePage.slide}>
                        {/* <Text style={stylesHomePage.text}>Glasses Fashion</Text> */}
                    </ImageBackground>
                    <ImageBackground source={require('./../images/800-300-800x300-(1).png')} style={stylesHomePage.slide}>
                        {/* <Text style={stylesHomePage.text}>Beautiful</Text> */}
                    </ImageBackground>
                    <ImageBackground source={require('./../images/mi7-800-300-800x300.png')} style={stylesHomePage.slide}>
                        {/* <Text style={stylesHomePage.text}>Fashion</Text> */}
                    </ImageBackground>
                </Swiper>
                <View style={stylesHomePage.bottomContent}>
                    <View style={{ justifyContent: "center", flex: 1, padding: 10 }}>
                        <ScrollView>
                            <View style={stylesHomePage.viewRow}>
                                <View style={stylesHomePage.viewRowContent}>
                                    <View style={{ flex: 4 }}>
                                        <Image source={require('./../images/iphone-xs-max-gray-400x460.png')} style={stylesHomePage.styleImageProduct} />
                                    </View>
                                    <View style={{ flex: 1, marginTop: 5 }}>
                                        <Text>iPhone Xs Max 64GB</Text>
                                        <Text>Price: 300$</Text>
                                    </View>
                                </View>
                                <View style={stylesHomePage.viewRowContent}>
                                    <View style={{ flex: 4 }}>
                                        <Image source={require('./../images/iphone-x-64gb-1-400x460.png')} style={stylesHomePage.styleImageProduct} />
                                    </View>
                                    <View style={{ flex: 1, marginTop: 5 }}>
                                        <Text>iPhone X 125GB</Text>
                                        <Text>Price: 200$</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={stylesHomePage.viewRow}>
                                <View style={stylesHomePage.viewRowContent}>
                                    <View style={{ flex: 4 }}>
                                        <Image source={require('./../images/samsung-galaxy-note8-black-400x460.png')} style={stylesHomePage.styleImageProduct} />
                                    </View>
                                    <View style={{ flex: 1, marginTop: 5 }}>
                                        <Text>Samsung Galaxy Note 8</Text>
                                        <Text>Price: 150$</Text>
                                    </View>
                                </View>
                                <View style={stylesHomePage.viewRowContent}>
                                    <View style={{ flex: 4 }}>
                                        <Image source={require('./../images/samsung-galaxy-s10-plus-512gb-ceramic-black-400x460.png')} style={stylesHomePage.styleImageProduct} />
                                    </View>
                                    <View style={{ flex: 1, marginTop: 5 }}>
                                        <Text>Samsung Galaxy S10+</Text>
                                        <Text>Price: 200$</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );

    }
}
const stylesHomePage = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: ((width * 300) / 800 + 20)
    },
    text: {
        color: '#979A9A',
        fontSize: 30,
        fontWeight: 'bold',
        opacity: 0.8
    },
    buttonText: {
        color: 'gray',
        fontSize: 70,
        fontWeight: 'bold',
        opacity: 0.8
    },
    bottomContent: {
        flex: 2,
        backgroundColor: '#cecece',
        justifyContent: 'center'
    },
    viewRow: {
        flexDirection: "row",
        height: 250,
        marginBottom: 5,
        justifyContent: "space-between"
    },
    viewRowContent: {
        borderColor: "#88909b",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        backgroundColor: "white",
        width: "49%"
    },
    styleImageProduct:{
        width: '100%',
        height: "100%"
    }

})