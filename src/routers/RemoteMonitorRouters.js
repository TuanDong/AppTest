import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginComponent from './../components/LoginComponent'
import HomeComponent from './../components/HomeComponent'
const RemoteMonitorRouters = createStackNavigator({
    Login:{screen: LoginComponent,
        navigationOptions:{
            header:null
        }
    },
    Home:{screen: HomeComponent,
        navigationOptions:{
            header:null
        }
    }
},{
    initialRouteName:'Login'
});
export default createAppContainer(RemoteMonitorRouters);