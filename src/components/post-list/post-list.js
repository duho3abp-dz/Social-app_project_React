import React from 'react';

import PostListItem from '../post-list-item';



const PostList = ({posts}) => {

    const elements = posts.map(post => {
        const {id, ...itemProps} = post;

        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps} />
            </li>
        )
    });
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;