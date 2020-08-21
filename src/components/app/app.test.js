import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './app';

describe('Testing <App/>', () => {
    const app = shallow(<App/>);

    describe('Testing snap & state', () => {
        
        it('PostListItem have rendered correctly', () => {
            expect(app).toMatchSnapshot();
        });

        it('App state "maxId" is four', () => {
            expect(app.state().maxId).toBe(4);
        });

        it('App state "data" is array', () => {
            expect(app.state().data).toBeArray();
        });

        it('App state "term" is "" ', () => {
            expect(app.state().term).toBe('');
        });

    });

    describe('Handlers tests', () => {

        it('testing on onUpdateSearch', () => {
            app.instance().onUpdateSearch(10);
            expect(app.state().term).toBe(10);
        });

        it('testing on deleteItem', () => {
            app.instance().deleteItem(1);
            expect(app.state().data).toEqual([
                {label: "That is so good", important: false, like: false, id: 2},
                {label: "I need a break...", important: false, like: false, id: 3}
            ]);
        });
        
        it('testing on AddItem', () => {
            app.instance().AddItem('Hello world!');
            expect(app.state().data).toEqual([
                {label: "That is so good", important: false, like: false, id: 2},
                {label: "I need a break...", important: false, like: false, id: 3},
                {label: "Hello world!", important: false, like: false, id: 4}
            ]);
            expect(app.state().maxId).toBe(5);
        });
        
        it('testing on onFilterSelect', () => {
            app.instance().onFilterSelect('like');
            expect(app.state().filter).toBe('like');
        });

    });
});