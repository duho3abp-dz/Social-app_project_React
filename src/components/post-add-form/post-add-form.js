import React from 'react';
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

const PostAddForm = ({onAdd}) => {
    return (
        <FormBottomPanel>
            <input
                type="text"
                placeholder="What are you thinking now?"
            />
            <button 
                className="btn btn-outline-secondary"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    onAdd('ffff')
                }}
                >
                Add
            </button>
        </FormBottomPanel>
    )
}

export default PostAddForm;