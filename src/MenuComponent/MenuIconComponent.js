import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,WebView,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class MenuIcon extends Component{

    render() {
      return (
        <TouchableOpacity
            style={{width:30,height:30,zIndex:2,position:'absolute',top:10,left:10}}
            onPress= {()=>{this.props.navigation.toggleDrawer();}}
        >
        <Icon name={'ios-menu'} size={30} color={'gray'} />
        </TouchableOpacity>
      )
    }
}