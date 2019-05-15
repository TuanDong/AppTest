import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export default class ProductComponent extends Component {
    static navigationOptions = {
        title: 'Sản Phẩm',
        headerStyle: {
            backgroundColor: '#a08310',
        },
        headerTintColor: '#884EA0',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: "center",
        }
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styleProducts.bottomContent}>
                <ScrollView>
                    <Text style={styleProducts.text}>San pham iPhone</Text>
                    <View style={styleProducts.viewRow}>
                        <ScrollView horizontal={true}>
                            <View style={styleProducts.viewRowContent}>
                                <View style={{ flex: 5 }}>
                                    <Image source={require('./../images/iphone-xs-max-gray-400x460.png')} style={styleProducts.styleImageProduct} />
                                </View>
                                <View style={{ flex: 2, marginTop: 10 }}>
                                    <Text>iPhone Xs Max 64GB</Text>
                                    <Text>Price: 300$</Text>
                                    <TouchableOpacity style={{ marginRight: 5 }}
                                        onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                            name:"iPhone Xs Max 64GB",
                                            price:"300$",
                                            image:require('./../images/iphone-xs-max-gray-400x460.png'),
                                            decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone Xs Max của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                        })}
                                    >
                                        <Text style={styleProducts.buttonText}>Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styleProducts.viewRowContent}>
                                <View style={{ flex: 5 }}>
                                    <Image source={require('./../images/iphone-x-64gb-1-400x460.png')} style={styleProducts.styleImageProduct} />
                                </View>
                                <View style={{ flex: 2, marginTop: 10 }}>
                                    <Text>iPhone X 125GB</Text>
                                    <Text>Price: 200$</Text>
                                    <TouchableOpacity style={{ marginRight: 5 }}
                                        onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                            name:"iPhone X 125GB",
                                            price:"200$",
                                            image:require('./../images/iphone-x-64gb-1-400x460.png'),
                                            decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                        })}
                                    >
                                        <Text style={styleProducts.buttonText}>Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styleProducts.viewRowContent}>
                                <View style={{ flex: 5 }}>
                                    <Image source={require('./../images/iphone-xs-max-gray-400x460.png')} style={styleProducts.styleImageProduct} />
                                </View>
                                <View style={{ flex: 2, marginTop: 10 }}>
                                    <Text>iPhone Xs Max 64GB</Text>
                                    <Text>Price: 300$</Text>
                                    <TouchableOpacity style={{ marginRight: 5 }}
                                        onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                            name:"iPhone X 125GB",
                                            price:"200$",
                                            image:require('./../images/iphone-x-64gb-1-400x460.png'),
                                            decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                        })}
                                    >
                                        <Text style={styleProducts.buttonText}>Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styleProducts.viewRowContent}>
                                <View style={{ flex: 5 }}>
                                    <Image source={require('./../images/iphone-x-64gb-1-400x460.png')} style={styleProducts.styleImageProduct} />
                                </View>
                                <View style={{ flex: 2, marginTop: 10 }}>
                                    <Text>iPhone X 125GB</Text>
                                    <Text>Price: 200$</Text>
                                    <TouchableOpacity style={{ marginRight: 5 }}
                                        onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                            name:"iPhone X 125GB",
                                            price:"200$",
                                            image:require('./../images/iphone-x-64gb-1-400x460.png'),
                                            decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                        })}
                                    >
                                        <Text style={styleProducts.buttonText}>Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={styleProducts.text}>San pham Sam Sung</Text>
                    <View style={styleProducts.viewRow}>
                        <ScrollView horizontal={true}>
                            <View style={styleProducts.viewRowContent}>
                                <View style={{ flex: 5 }}>
                                    <Image source={require('./../images/samsung-galaxy-note8-black-400x460.png')} style={styleProducts.styleImageProduct} />
                                </View>
                                <View style={{ flex: 2, marginTop: 10 }}>
                                    <Text>Samsung Galaxy Note 8</Text>
                                    <Text>Price: 150$</Text>
                                    <TouchableOpacity style={{ marginRight: 5 }}
                                        onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                            name:"iPhone X 125GB",
                                            price:"200$",
                                            image:require('./../images/iphone-x-64gb-1-400x460.png'),
                                            decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                        })}
                                    >
                                        <Text style={styleProducts.buttonText}>Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styleProducts.viewRowContent}>
                                <View style={{ flex: 5 }}>
                                    <Image source={require('./../images/samsung-galaxy-s10-plus-512gb-ceramic-black-400x460.png')} style={styleProducts.styleImageProduct} />
                                </View>
                                <View style={{ flex: 2, marginTop: 10 }}>
                                    <Text>Samsung Galaxy S10+</Text>
                                    <Text>Price: 200$</Text>
                                    <TouchableOpacity style={{ marginRight: 5 }}
                                        onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                            name:"iPhone X 125GB",
                                            price:"200$",
                                            image:require('./../images/iphone-x-64gb-1-400x460.png'),
                                            decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                        })}
                                    >
                                        <Text style={styleProducts.buttonText}>Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styleProducts.viewRowContent}>
                                <View style={{ flex: 5 }}>
                                    <Image source={require('./../images/samsung-galaxy-note8-black-400x460.png')} style={styleProducts.styleImageProduct} />
                                </View>
                                <View style={{ flex: 2, marginTop: 10 }}>
                                    <Text>Samsung Galaxy Note 8</Text>
                                    <Text>Price: 150$</Text>
                                    <TouchableOpacity style={{ marginRight: 5 }}
                                        onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                            name:"iPhone X 125GB",
                                            price:"200$",
                                            image:require('./../images/iphone-x-64gb-1-400x460.png'),
                                            decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                        })}
                                    >
                                        <Text style={styleProducts.buttonText}>Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styleProducts.viewRowContent}>
                                <View style={{ flex: 5 }}>
                                    <Image source={require('./../images/samsung-galaxy-s10-plus-512gb-ceramic-black-400x460.png')} style={styleProducts.styleImageProduct} />
                                </View>
                                <View style={{ flex: 2, marginTop: 10 }}>
                                    <Text>Samsung Galaxy S10+</Text>
                                    <Text>Price: 200$</Text>
                                    <TouchableOpacity style={{ marginRight: 5 }}
                                        onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                            name:"iPhone X 125GB",
                                            price:"200$",
                                            image:require('./../images/iphone-x-64gb-1-400x460.png'),
                                            decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                        })}
                                    >
                                        <Text style={styleProducts.buttonText}>Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={styleProducts.text}>San pham Oppo</Text>
                    <View style={styleProducts.viewRow}>
                        <View style={styleProducts.viewRowContent}>
                            <View style={{ flex: 5 }}>
                                <Image source={require('./../images/oppo-find-x-1-400x460-400x460.png')} style={styleProducts.styleImageProduct} />
                            </View>
                            <View style={{ flex: 2, marginTop: 10 }}>
                                <Text>Oppo Find X</Text>
                                <Text>Price: 180$</Text>
                                <TouchableOpacity style={{ marginRight: 5 }}
                                    onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                        name:"iPhone X 125GB",
                                        price:"200$",
                                        image:require('./../images/iphone-x-64gb-1-400x460.png'),
                                        decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                    })}
                                >
                                    <Text style={styleProducts.buttonText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styleProducts.viewRowContent}>
                            <View style={{ flex: 5 }}>
                                <Image source={require('./../images/Oppo-Pro-TIM-390x506.png')} style={styleProducts.styleImageProduct} />
                            </View>
                            <View style={{ flex: 2, marginTop: 5 }}>
                                <Text>Oppo Pro TIM</Text>
                                <Text>Price: 110$</Text>
                                <TouchableOpacity style={{ marginRight: 5 }}
                                    onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                        name:"iPhone X 125GB",
                                        price:"200$",
                                        image:require('./../images/iphone-x-64gb-1-400x460.png'),
                                        decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                    })}
                                >
                                    <Text style={styleProducts.buttonText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Text style={styleProducts.text}>San pham Khac</Text>
                    <View style={styleProducts.viewRow}>
                        <View style={styleProducts.viewRowContent}>
                            <View style={{ flex: 5 }}>
                                <Image source={require('./../images/huawei-p30-pro-1-400x460.png')} style={styleProducts.styleImageProduct} />
                            </View>
                            <View style={{ flex: 2, marginTop: 10 }}>
                                <Text>Huawei Pro</Text>
                                <Text>Price: 150$</Text>
                                <TouchableOpacity style={{ marginRight: 5 }}
                                    onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                        name:"iPhone X 125GB",
                                        price:"200$",
                                        image:require('./../images/iphone-x-64gb-1-400x460.png'),
                                        decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                    })}
                                >
                                    <Text style={styleProducts.buttonText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styleProducts.viewRowContent}>
                            <View style={{ flex: 5 }}>
                                <Image source={require('./../images/xiaomi-mi-8-black-400x460.png')} style={styleProducts.styleImageProduct} />
                            </View>
                            <View style={{ flex: 2, marginTop: 10 }}>
                                <Text>Xiaomi Mi 8 Black</Text>
                                <Text>Price: 200$</Text>
                                <TouchableOpacity style={{ marginRight: 5 }}
                                    onPress={()=>this.props.navigation.navigate("DetailProductComponent",{
                                        name:"Xiaomi Mi 8 Black",
                                        price:"200$",
                                        image:require('./../images/xiaomi-mi-8-black-400x460.png'),
                                        decription:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone X của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp."
                                    })}
                                >
                                    <Text style={styleProducts.buttonText}>Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>


        );

    }
}
const styleProducts = StyleSheet.create({
    text: {
        color: '#979A9A',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    buttonText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: "#5d97f4",
        marginLeft: "60%",
        paddingRight: 5,
        borderRadius: 10,
        marginTop: 5,
        marginBottom:5

    },
    bottomContent: {
        flex: 1,
        backgroundColor: '#cecece',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    viewRow: {
        flexDirection: "row",
        height: 280,
        marginBottom: 5,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 5,
    },
    viewRowContent: {
        borderColor: "#88909b",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        backgroundColor: "white",
        width: (width / 2 - 20),
        marginRight: 5
    },
    styleImageProduct: {
        width: '100%',
        height: "100%"
    }

})