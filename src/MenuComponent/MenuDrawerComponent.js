import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {Logout} from './../action/action'
import {connect} from 'react-redux'

class MenuDrawerComponent extends Component {
    constructor(props) {
        super(props);
    }
    menuLink(routeName, text) {
        return (
            <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
                onPress={() => {this.props.navigation.navigate(routeName); this.props.navigation.toggleDrawer(); }}
            >
                <Icon name={(routeName == 'Home') ? 'ios-home' : 'ios-settings'} size={30} color={'#512E5F'} />
                <Text style={styleDrawer.link}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={styleDrawer.container}>

                <ImageBackground source={require('./../images/backgroundAvatar.jpg')} style={styleDrawer.topDrawer}>
                    <TouchableOpacity style={styleDrawer.iconBlack}
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Icon name={'ios-arrow-back'} size={30} color={'#3498DB'} />
                    </TouchableOpacity>
                    <View style={styleDrawer.topViewContainer}>
                        <Image source={require('./../images/avatar.jpg')} style={styleDrawer.avatar} />
                        <Text style={styleDrawer.textTopDrawer}>REACT NATIVE</Text>
                    </View>
                </ImageBackground>
                <View style={styleDrawer.bottomDrawer}>
                    {this.menuLink('Home', 'Home')}
                    {this.menuLink('settings', 'Setting')}
                    <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}
                        onPress={() => {this.props.logout();this.props.routerMonitor.navigation.navigate("Login")}}
                    >
                        <Icon name={"ios-log-out"} size={30} color={'#512E5F'} />
                        <Text style={styleDrawer.link}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styleDrawer.footer}>
                    <Text style={styleDrawer.footerText}>App version</Text>
                    <Text style={styleDrawer.footerText}>v1.0</Text>
                </View>

            </View>
        )
    }
}
const styleDrawer = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconBlack: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8F8F5',
        width: 30,
        height: 30,
        position: 'absolute',
        zIndex: 1,
        top: 10,
        right: 10
    },
    topDrawer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topViewContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTopDrawer: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '500',
        color: '#BFC9CA'
    },
    bottomDrawer: {
        flex: 2,
        backgroundColor: "#FEF9E7",
        padding: 20
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    bottomLink: {
        flex: 1,
    },
    link: {
        fontSize: 18,
        textAlign: 'left',
        paddingLeft: 10
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: '#D5D8DC',
        padding: 5,
    },
    footerText: {
        color: 'gray',
        fontSize: 10,
    }

});

export default connect(
    state =>{
        return {routerMonitor: state.loginreducer }
    },dispatch =>{
        return{
            logout:()=>{dispatch(Logout)}
        }
    }
)(MenuDrawerComponent);