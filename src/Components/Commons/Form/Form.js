import React, { Component } from 'react';
import "./Form.css";

export default class Form extends Component {
    render() {
        return(
            <form className={this.props.class} id={this.props.id} onSubmit={this.props.onsubmit}>
                {this.props.children}
            </form>
        );
    }
};