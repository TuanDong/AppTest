import React, { Component } from 'react'
import { View,Text } from 'react-native'
import MenuIconComponent from './../MenuComponent/MenuIconComponent'

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <View style={{flex:1}}>
            <View style={{height:50}}>
                <MenuIconComponent navigation = {this.props.navigation} />
            </View>
            <View >
                <Text >trang ca nhan</Text>
            </View>
                
        </View>
      )
    }
}