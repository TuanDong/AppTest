import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
import HomePage from '../components/HomePage'
import CategoryPage from '../components/CategoryPage'
import ProfilePage from '../components/ProfilePage'
import NofiticationsPage from '../components/NotificationsPage'

const MenuMaterialBottomComponent = createMaterialBottomTabNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={30} name={`ios-home`} style={{ color: tintColor }} />
            )
        }
    },
    CategoryPage:{
        screen:CategoryPage,
        navigationOptions: {
            title: 'Category',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={30} name={`ios-apps`} style={{ color: tintColor }} />
            )
        }
    },
    ProfilePage:{
        screen:ProfilePage,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={30} name={`ios-person`} style={{ color: tintColor }} />
            ),
            
        }
    },
    NofiticationsPage:{
        screen:NofiticationsPage,
        navigationOptions: {
            title: 'Nofitications',
            tabBarIcon: ({ tintColor, focused }) => (
                <View>
                <Icon size={30} name={`ios-notifications${focused ? '-off' : ''}`} style={{ color: tintColor }} />
                <View style={{
                    position: 'absolute',
                    right: -8,
                    top: -4,
                    backgroundColor: 'red',
                    borderRadius: 6,
                    width: 12,
                    height: 12,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>4</Text>
                </View></View>
            
            ),
        }
    }
},{
    shifting:false,
    initialRouteName: 'HomePage',
    activeColor: '#f0edf6',
    inactiveColor: '#884EA0',
    barStyle: { backgroundColor: '#a08310',paddingBottom:5,paddingTop:10 },
    
});
export default createAppContainer(MenuMaterialBottomComponent);