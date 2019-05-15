import {createStackNavigator, createAppContainer} from 'react-navigation';
import ProductComponent from './../components/ProductComponent'
import DetailProductComponent from './../components/DetailProductComponent'
const CategoryRouters = createStackNavigator({
    ProductComponent:{screen: ProductComponent,},
    DetailProductComponent:{screen: DetailProductComponent,
        navigationOptions:{
            header:null
        }}
},{
    initialRouteName:'ProductComponent'
});
export default createAppContainer(CategoryRouters);