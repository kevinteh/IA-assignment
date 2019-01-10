import React, { Component } from 'react';
import './FormGroup.css';

export default class FormGroup extends Component {
    render() {
        return (
            <div className={["form-group",  this.props.class].join(" ")}>
                {this.props.children}   
            </div>
        );
    }
};