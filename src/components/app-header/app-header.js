import React from 'react';
import styled from 'styled-components';

// ------------- Style -------------

const DivHeader = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h1 {
        font-size: 26px;
    }

    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

// ------------- App -------------

const AppHeader = ({posts = 0, like = 0}) => {
    return (
        <DivHeader>
            <h1>Zhidkov Danila</h1>
            <h2>{posts.length} posts, liked {like}</h2>
        </DivHeader>
    )
}

export default AppHeader;