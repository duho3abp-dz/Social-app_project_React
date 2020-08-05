import React, {Component} from 'react';
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

export default class App extends Component{
    constructor (props) {
        super(props);
        this.state = {
            maxId: 4,
            data: [
                {label: "Going to learn React!", important: true, id: 1},
                {label: "That is so good", important: false, id: 2},
                {label: "I need a break...", important: false, id: 3}
            ].filter(item => item.id),
            like: []
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.AddItem = this.AddItem.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    AddItem(text) { 
        const obj = {label: text, important: false, id: this.state.maxId},
              newArr = [...this.state.data, obj];

        this.setState(({maxId, data}) => ({
            maxId: ++maxId,
            data: newArr
        }))
    }

    // onToggleImportant(id) {
    //     console.log('important');
    // }

    onToggleLiked(id) {
        const {like} = this.state;
        const test = like.filter(item => item === id);

        if (Boolean(...test)) {
            this.setState(({like}) => ({
                like: like.filter(item => item !== id)
            }));
        } else {

            if (like.length > 0) {
                this.setState(({like}) => ({
                    like: [...like, id]
                }));
            } else {
                this.setState(({like}) => ({
                    like: [id]
                }));
            }

        }
    }

    render() {
        const {data, like} = this.state;

        return (
            <DivApp>
                <AppHeader 
                    posts={data}
                    like={like}
                />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={data}
                    onDelete={this.deleteItem}
                    // onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.AddItem}
                />
            </DivApp>
        )
    }
}