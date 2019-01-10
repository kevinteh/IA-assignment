import React, { Component } from 'react';
import './Label.css';

export default class Label extends Component {    
    render() {
        return (
            <label className={this.props.class} htmlFor={this.props.name}>
                {this.props.children}
            </label>
        );
    }
};