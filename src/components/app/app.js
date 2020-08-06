import React, {Component} from 'react';
import styled from 'styled-components';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

// ------------- Style -------------

const DivApp = styled.div`
    margin: 0 auto 100px;
    max-width: 800px;
`

// ------------- App -------------

export default class App extends Component{
    constructor (props) {
        super(props);
        this.state = {
            maxId: 4,
            data: [
                {label: "Going to learn React!", important: true, like: false, id: 1},
                {label: "That is so good", important: false, like: false, id: 2},
                {label: "I need a break...", important: false, like: false, id: 3}
            ].filter(item => item.id),
            filter: 'all',
            term: ''
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.AddItem = this.AddItem.bind(this);
        this.toggleImportantAndLiked = this.toggleImportantAndLiked.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterPost = this.onFilterPost.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    AddItem(text) { 
        const obj = {label: text, important: false, like: false, id: this.state.maxId},
              newArr = [...this.state.data, obj];

        this.setState(({maxId, data}) => ({
            maxId: ++maxId,
            data: newArr
        }))
    }

    toggleImportantAndLiked(id, param) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id),
                  old = data[index];

            const test = (param) => {
                if (param === 'important') {
                    return {...old, important: !old.important};
                }    
                if (param === 'like') {
                    return {...old, like: !old.like};
                }
            }

            return {
                data: [...data.slice(0, index), test(param), ...data.slice(index + 1)]
            }
        });
    }

    onSearch(posts, term) {
        if (term.length === 0) {
            return posts;
        } 

        return posts.filter(post => post.label.indexOf(term) > -1)
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterPost(posts, filter) {
        if (filter === 'like') {
            return posts.filter(item => item.like)
        } else {
            return posts;
        }
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, important, like, term, filter} = this.state;

        const liked = data.filter(item => item.like === true).length;
        const visiblePosts = this.onFilterPost(this.onSearch(data, term), filter);

        return (
            <DivApp>
                <AppHeader 
                    posts={data}
                    like={liked}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    important={important}
                    like={like}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.toggleImportantAndLiked}
                    onToggleLiked={this.toggleImportantAndLiked}
                />
                <PostAddForm
                    onAdd={this.AddItem}
                />
            </DivApp>
        )
    }
}