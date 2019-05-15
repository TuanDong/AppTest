import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class DetailProductComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styleProductDetail.wapper}>
                <View style={{ flex: 1, backgroundColor: "#a08310", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <TouchableOpacity
                        style={{paddingLeft:10}}
                        onPress={()=>this.props.navigation.goBack()}
                    >
                        <Icon size={30} name={`ios-arrow-back`} style={{ color: "#884EA0", marginLeft: "5%" }} />
                    </TouchableOpacity>
                    <Text style={styleProductDetail.text}>Chi tiet cua {this.props.navigation.getParam("name")} </Text>
                </View>
                <View style={{flex:7,margin:10,backgroundColor: "#fff",}}>
                    <View style={styleProductDetail.viewRow}>
                        <View style={{ flex: 4, marginTop: 10,padding:10 }}>
                            <Image source={this.props.navigation.getParam("image")} style={styleProductDetail.styleImageProduct} />
                        </View>
                        <View style={{ flex: 4,justifyContent:"flex-end", marginTop: 10, paddingLeft:10,marginBottom:10 }}>
                            <Text style={{color:"#4286f4",fontWeight:"bold",fontSize:16}}>{this.props.navigation.getParam("name")}</Text>
                            <Text style={{color:"#f26d26",fontWeight:"bold",fontSize:16}}>Price: {this.props.navigation.getParam("price")}</Text>
                        </View>
                    </View>
                    <View style={{flex:3}}>
                        <Text style={{color:"gray",fontWeight:"bold",fontSize:20,opacity:0.7,paddingLeft:10}}>DECRIPTION</Text>
                        <Text style={{margin:5,borderWidth:1,padding:5,borderColor:"gray",borderRadius:10}}>{this.props.navigation.getParam("decription")}</Text>
                    </View>
                </View>
            </View>
        );

    }
}
const styleProductDetail = StyleSheet.create({
    wapper: {
        flex: 1,
        backgroundColor: "gray"
    },
    viewRow: {
        flexDirection:"row",
        flex: 6,
        justifyContent: "space-between",
        padding: 5,
    },
    text: {
        color: '#884EA0',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: "10%"
    },
    styleImageProduct: {
        width: '100%',
        height: "100%"
    }
});