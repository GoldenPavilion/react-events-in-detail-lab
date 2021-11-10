// Code CoordinatesButton Component Here

import React, { Component } from 'react';

export default class CoordinatesButton extends Component{
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event){
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return (<button onClick={this.clickHandler}>Find Coordinates</button>)
    }
}