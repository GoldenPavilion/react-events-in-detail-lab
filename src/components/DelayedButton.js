// Code DelayedButton Component Here

import React, { Component } from 'react';

export default class DelayedButton extends Component {
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e){
        e.persist();
        setTimeout(() => {this.props.onDelayedClick(e);}, this.props.delay);
    }
    
    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>Delay!</button>
            </div>
        )
    }
}