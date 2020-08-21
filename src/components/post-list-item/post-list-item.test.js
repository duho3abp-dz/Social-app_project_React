import React from 'react';
import {shallow} from 'enzyme';
import PostListItem from './post-list-item';

describe('Testing <PostListItem/>', () => {
    const postListItem = shallow(<PostListItem/>);

    describe('Testing snap', () => {
        it('PostListItem have rendered correctly', () => {
            expect(postListItem).toMatchSnapshot();
        });
    })
});