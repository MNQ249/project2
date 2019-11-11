import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import "./TodoList.css";
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            text:''
        }

        this.addItem = this.addItem.bind(this);//bind this properity
        this.onDelete = this.onDelete.bind(this)
    }

    

    addItem(e){
        let date = Date.now()
        if(this._inputElement.value !== ""){
            let newItem = {
                text : this._inputElement.value,
                key: date// need key because i had multiple value (use time because very precise)
            };
            this.setState((prevState) =>{
                return{
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }

    onDelete(){
        this.setState({
            items: []
        })
    }


    

   

    render() { 
        return ( 
            <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.addItem}>
                <input ref={(element) => this._inputElement = element} placeholder="enter task">

                </input>
                <button type="submit">add</button>
            </form>
            </div>
            <TodoItems entries={this.state.items} delete={this.onDelete.items}/>
            <button onClick={this.onDelete}>delete All
            </button>
            </div> 
         );
    }
}
 
export default TodoList;