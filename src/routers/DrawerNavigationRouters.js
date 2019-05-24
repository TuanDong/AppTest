import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import MainComponent from './../components/MainComponent'
import MenuDrawerComponent from './../MenuComponent/MenuDrawerComponent'
import settings from './../components/settings'


const {width} = Dimensions.get('window');
const MyDrawerNavigator = createDrawerNavigator({
    Profile: {
        screen: MainComponent,
    },
    settings:{
        screen:settings
    }

},
{
    initialRouteName:'Profile',
    drawerWidth:(width *3)/4,
    drawerPosition:'let',
    contentComponent:({navigation})=>{
        return(<MenuDrawerComponent navigation={navigation} />)
    },
    
});
export default DrawerNavigationRouters = createAppContainer(MyDrawerNavigator);

