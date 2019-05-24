import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native'
import MenuIconComponent from './../MenuComponent/MenuIconComponent'
import { Container, TabHeading, Content, Tab, Tabs, Icon } from 'native-base';
//import MapView from 'react-native-maps'; 
const { width } = Dimensions.get("window");

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styleMain.menu}>
                    <MenuIconComponent navigation={this.props.navigation} />
                    <Text style={styleMain.textstyle}>USER INFORMATION</Text>
                </View>
                <View style={styleMain.wapper} >
                    <View style={{ flex: 3 }}>
                        <ImageBackground source={require("./../images/backgroundAvatar.jpg")} style={styleMain.imagestyle} >
                            <Image source={require("./../images/avatar.jpg")} style={styleMain.styleImage} />
                            <Text style={{ color: "white", fontWeight: 'bold', fontSize: 17, marginTop: 120, marginLeft: 5 }}> YOUR NAME</Text>
                        </ImageBackground>

                    </View>
                    <View style={{ flex: 5, }}>
                            <Tabs >
                                <Tab heading={<TabHeading style={{backgroundColor:"#fff"}} ><Icon name="map" style={{fontSize: 20, color:"blue"}}/><Text  style={{color:"blue",fontSize:20,fontWeight:"bold",paddingLeft:10}}>Maps</Text></TabHeading>} >
                                    <View style={{ flex: 1 }}>
                                    {/* <MapView
                                        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                        style={{flex:1,justifyContent:"center",alignItems:"center"}}
                                        region={{
                                            latitude: 37.78825,
                                            longitude: -122.4324,
                                            latitudeDelta: 0.1,
                                            longitudeDelta: 0.1,
                                        }}
                                        />*/}
                                        <Text style={{ color: "red" }}>tab1</Text>
                                    </View> 
                                </Tab>
                                <Tab  heading={<TabHeading style={{backgroundColor:"#fff"}}><Icon name="apps" style={{fontSize: 20, color:"blue"}} /><Text style={{color:"blue",fontSize:20,fontWeight:"bold",paddingLeft:10}}>APP</Text></TabHeading>} >
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: "red" }}>tab2</Text>
                                    </View>
                                </Tab>
                                <Tab  heading={<TabHeading style={{backgroundColor:"#fff"}}><Icon name="cart" style={{fontSize: 20, color:"blue"}}/><Text style={{color:"blue",fontSize:20,fontWeight:"bold",paddingLeft:10}}>CART</Text></TabHeading>} >
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: "red" }}>tab3</Text>
                                    </View>
                                </Tab>
                            </Tabs>
                    </View>
                </View>

            </View>
        )
    }
}
const styleMain = StyleSheet.create({
    menu: {
        backgroundColor: "#4286f4",
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    wapper: {
        flex: 1,
    },
    imagestyle: {
        width: width,
        height: 150,
        flexDirection: "row"
    },
    textstyle: {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold',
    },
    styleImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 65,
        marginLeft: 15,
        borderColor: "#d8baf2",
        borderWidth: 2,
        position: "relative"
    }
});

