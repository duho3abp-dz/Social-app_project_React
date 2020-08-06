import React, {Component} from 'react';

export default class PostStatusFilter extends Component{
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Like'}
        ]
        this.state = {
            quantityBtn: 2
        }

    }
    render() {
        const btns = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button 
                    key={name}
                    type="button" 
                    className={`btn ${clazz}`}
                    onClick={() => this.props.onFilterSelect(name)}
                    >{label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {btns}
            </div>
        )
    }
}