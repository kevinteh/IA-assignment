import React, { Component } from 'react';
import "./index.css";
import AddRevenueGroup from './Form/AddRevenueGroup';
import Text from '../../Commons/Text/Text';

export default class ExamplePage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <section className="example-page">
                <div className="container-fluid">
                    <div className="row">
                        <h3><Text
                            class="title"
                            text="Add Revenue Group"
                        /></h3>
                        <div className="col form-wrapper">
                            <AddRevenueGroup />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};