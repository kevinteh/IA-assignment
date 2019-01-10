import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {
    render() {
        return (
            <input data-image={this.props.dataImage} className={this.props.class} name={this.props.name} id={this.props.name} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onchange} />
        );
    }
};