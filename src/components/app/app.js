import React from 'react';
import styled from 'styled-components';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

// ------------- Style -------------

const DivApp = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
// ------------- App -------------

const App = () => {

    const data = [
        {label: "Going to learn React!", important: true, id: 'aaa'},
        {label: "That is so good", important: false, id: 'bbb'},
        {label: "I need a break...", important: false, id: 'ccc'}
    ].filter(item => item.id);

    return (
        <DivApp>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </DivApp>
    )
}

export default App;