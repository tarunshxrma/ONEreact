import React, { Component} from 'react';

class StateExample extends Component {
    constructor(){
        super();
        this.state={
            first_name:'Tarun',
            last_name:'Suraj'
        }
    }
    render(){
        return (
            <div>
                <p>Class Component</p>
                <p>{this.state.first_name}</p>
                <p>{this.state.last_name}</p>
            </div>
        )
    }
}

export default StateExample;