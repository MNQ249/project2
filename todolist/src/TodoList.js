import React, { Component } from 'react';


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[]
        }

        this.addItem = this.addItem.bind(this);//bind this properity
    }

    addItem(e){
        if(this._inputElement.value !==''){
            let newItem = {
                text = this._inputElement.value,
                key: Date.now() // need key because i had multiple value (use time because very precise)
            }
        }
    }

    render() { 
        return ( 
            <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.addItem}>
                <input ref={(e) => this._inputElement = e} placeholder="enter task">

                </input>
                <button type="submit">add</button>
            </form>
            </div>
            </div> 
         );
    }
}
 
export default TodoList;