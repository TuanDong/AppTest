import React, { Component } from 'react'
import CategoryRouters from './../routers/CategoryRouters'

export default class CategoryPage extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <CategoryRouters />
        );
        
    }
}