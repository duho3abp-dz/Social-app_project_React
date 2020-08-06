import React, {Component} from 'react';
import styled from 'styled-components';

// ------------- Style -------------

const FormBottomPanel = styled.form`
    display: flex;
    margin-top: 20px;

    input {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
        display: block;
        height: calc(1.5em + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
`

// ------------- App -------------

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({text: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const {onAdd} = this.props,
              {text} = this.state;

        if (text !== '') {onAdd(text)}
        this.setState({text: ''});
    }

    render() {
        return (
            <FormBottomPanel onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="What are you thinking now?"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button 
                    className="btn btn-outline-secondary"
                    type="submit"
                    >
                    Add
                </button>
            </FormBottomPanel>
        )
    }
}