import React, { Component } from 'react';
import Form from '../../../Commons/Form/Form';
import Input from '../../../Commons/Form/Input';
import Label from '../../../Commons/Form/Label';
import FormGroup from '../../../Commons/Form/FormGroup';
import Text from '../../../Commons/Text/Text';
import Link from '../../../Commons/Button/Link';
import "./AddRevenueGroup.css";

class AddRevenueGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groupTitle: '',
            conditions: 'ALL',
            rules: [{ruleAttribute: 'aff_sub', ruleCondition: 'is', ruleParameters: [""]}],            
            revenuePercentage: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        alert("Closing modal");
    }

    createUI(){
        return this.state.rules.map((el, i) => 
            <div className="single-rule" key={i}>     
                <div className="left-col">
                    {this.state.rules.length > 1 ? <h4>Rule {i+1}</h4> : ''}
                    <div className="rule-logic">
                        <select 
                        name="ruleAttribute" 
                        value={el.ruleAttribute ||''} 
                        onChange={this.handleChange.bind(this, i)}>
                            <option value="aff_sub">aff_sub</option>
                            <option value="aff_sub2">aff_sub2</option>
                        </select>
                        <select 
                        name="ruleCondition" 
                        value={el.ruleCondition ||''} 
                        onChange={this.handleChange.bind(this, i)}>
                            <option value="is">is</option>
                            <option value="not">not</option>
                        </select>
                        <div className="params-group">
                        {this.state.rules[i].ruleParameters.map((parameter, x) => {
                            return (
                                <FormGroup key={x}>
                                    <input 
                                    className="full-width"
                                    placeholder="Insert parameter" 
                                    type="text" 
                                    name="ruleParameters" 
                                    value={this.state.rules[i].ruleParameters[x] ||''} 
                                    onChange={this.handleParamChange.bind(this, i, x)} /> 
                                                            
                                    {x+1 == this.state.rules[i].ruleParameters.length ? (                                
                                        <input className="absolute-btn text-red" type='button' value='add rule' onClick={this.addParams.bind(this, i)}/>
                                    ) : (
                                        <input className="absolute-btn text-blue" type='button' value='remove rule' onClick={this.removeParams.bind(this, i, x)}/>
                                    )}
                                </FormGroup>
                            );
                        })}
                        </div>
                    </div>
                </div>
                <div className="right-col">
                {this.state.rules.length > 1 ? <input className="minus" type='button' value='-' onClick={this.removeRule.bind(this, i)}/> : ''}  
                {i+1 == this.state.rules.length ? (   
                <input className="plus" type='button' value='+' onClick={this.addRule.bind(this)} />
                ):('')}             
                </div>
            </div>         
        )
    }

    handleChange(i, e) {
        const { name, value } = e.target;
        let rules = [...this.state.rules];
        rules[i] = {...rules[i], [name]: value};
        this.setState({ rules });
    }

    handleParamChange(i, x, e) {
        let rules = [...this.state.rules]
        rules[i].ruleParameters[x] = e.target.value;
        this.setState({ rules });
    }

    addParams(num){
        let rules = [...this.state.rules];
        let currentRules = rules[num].ruleParameters.push("");
        this.setState({ currentRules })                        
    }

    removeParams(num, x){        
        let rules = [...this.state.rules];
        let currentRules = rules[num].ruleParameters;

        currentRules.splice(x,1);
        this.setState({ currentRules });
    }

    addRule(){
        this.setState(prevState => 
            ({ rules: 
                [...prevState.rules, 
                    {
                        ruleAttribute: "", 
                        ruleCondition: "", 
                        ruleParameters: [""]
                    }
                ]
            })
        )
    }
    
    removeRule(i){
        let rules = [...this.state.rules];
        rules.splice(i,1);
        this.setState({ rules });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("API CALLING/ DB INSERTIONS");      
    }

    render() {
        return(
            <Form id="add-revenue" onsubmit={this.handleSubmit}>
                <FormGroup class="block-content">
                    <Label>Revenue Group Title</Label>
                    <Input 
                    name="groupTitle" 
                    type="text" 
                    value={this.state.groupTitle} 
                    onchange={this.handleInputChange} 
                    />
                </FormGroup>
                <FormGroup class="d-flex align-center">
                    <Text
                        class="text-bold"
                        text="if"
                    />
                    <select name="conditions" onChange={this.handleInputChange} >
                        <option value="all">ALL</option>
                        <option value="one">ANY</option>
                        <option value="one">NONE</option>
                    </select>
                    <Text
                        class="text-bold"
                        text="of the below conditions are met"
                    />
                </FormGroup>
                <FormGroup class="style-grey">
                    {this.createUI()}  
                </FormGroup>
                <FormGroup>
                    <Text
                        class="text-bold"
                        text="then revenue is"
                    />
                    <div className="relative-wrapper">
                        <Input 
                        name="revenuePercentage" 
                        type="number" 
                        value={this.state.revenuePercentage} 
                        onchange={this.handleInputChange} 
                        />
                        <Text class="absolute-text" text="%" />
                    </div>
                </FormGroup>
                <FormGroup class="mt50 mb30">
                    <Input 
                        class="btn-orange"
                        name="register" 
                        type="submit" 
                        value="Confirm" 
                    />
                    <Link 
                        class="btn-grey"
                        text="Cancel"
                        onclick={this.closeModal}
                    />
                </FormGroup>
            </Form>
        );
    }
}

export default AddRevenueGroup;