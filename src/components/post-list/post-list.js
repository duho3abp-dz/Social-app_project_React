import React from 'react';
import styled from 'styled-components';

import PostListItem from '../post-list-item';

// ------------- Style -------------

const UlAppList = styled.ul`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    li {
        padding: 20px 35px 10px 35px;
        margin-top: 10px;
        background-color: #fff;
        position: relative;
        display: block;
        border: 1px solid rgba(0, 0, 0, 0.125);

        :first-child {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
        }

        :last-child {
            border-bottom-right-radius: inherit;
            border-bottom-left-radius: inherit;
        }
    }
`

// ------------- App -------------

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked, important, liked}) => {

    const elements = posts.map(post => {
        const {id, ...itemProps} = post;

        return (
            <li key={id}>
                <PostListItem 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id, 'important')}
                onToggleLiked={() => onToggleLiked(id, 'like')}
                />
            </li>
        )
    });
    
    return (
        <UlAppList>
            {elements}
        </UlAppList>
    )
}

export default PostList;