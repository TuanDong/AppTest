import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions, Alert
} from 'react-native'
import { connect } from 'react-redux'
import { Login, Logout } from './../action/action'
import Icon from 'react-native-vector-icons/Ionicons'


const { width } = Dimensions.get('window');
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'TuanDong',
            pass: 'TuanDong',
            status: true,
        }
        this.CheckLogin = this.CheckLogin.bind(this);
    }
    CheckLogin(userName, Password, Navigation) {
        this.props.login(userName, Password, Navigation);

    }
    componentDidUpdate() {
        if (this.props.dataProps.status === true) {
            this.props.navigation.navigate('Home');
        }
        if (this.props.dataProps.status === false) {
            this.props.logout();
            Alert.alert('Messenger', "User name or password is not empty");

        }
    }
    render() {
        return (
            <ImageBackground source={require('./../images/backgroundLogin.jpg')} style={styles.backgroundContainer}>
                <View style={styles.viewlogo}>
                    <Image source={require('./../images/logo.png')} style={styles.logo} />
                    <Text style={styles.text}>REACT NATIVE</Text>
                </View>
                <View style={styles.containerInput}>
                    <Icon name={'ios-person'} size={28} style={styles.iconInput} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        onChangeText={(text) => { this.setState({ username: text }) }}
                        value={this.state.username}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Icon name={'ios-lock'} size={28} style={styles.iconInput} />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={this.state.status}
                        placeholder={'Password'}
                        onChangeText={(text) => { this.setState({ pass: text }) }}
                        value={this.state.pass}
                    />
                    <TouchableOpacity
                        style={styles.iconEye}
                        onPress={() => this.setState({ status: !this.state.status })}
                    >
                        <Icon name={(!this.state.status) ? 'ios-eye' : 'ios-eye-off'} size={28} />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => this.CheckLogin(this.state.username, this.state.pass, this.props.navigation)}//{()=>this.props.navigation.navigate('Home')}
                >
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 120,
        height: 120,
        opacity: 0.5
    },
    viewlogo: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '500',
        opacity: 0.5,
        marginBottom: 10
    },
    containerInput: {
        marginTop: 20
    },
    input: {
        width: width - 100,
        height: 45,
        borderRadius: 24,
        fontSize: 20,
        backgroundColor: '#a38d46',
        color: '#161200',
        paddingLeft: 40,
        marginHorizontal: 25,
        opacity: 0.6
    },
    iconInput: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    iconEye: {
        position: 'absolute',
        top: 8,
        right: 37
    },
    btnLogin: {
        width: width - 100,
        height: 45,
        borderRadius: 24,
        backgroundColor: '#7a735b',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    textLogin: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '500',
        opacity: 0.5,
    }

});
export default connect(
    state => {
        return {
            dataProps: state.loginreducer
        }

    }, dispatch => {
        return {
            login: (userName, passWord, navigation) => {
                dispatch(Login(userName, passWord, navigation));
            },
            logout: () => { dispatch(Logout) }
        }
    }
)(LoginComponent);