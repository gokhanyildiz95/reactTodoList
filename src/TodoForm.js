import React from 'react'
import { TodoList } from './TodoList';

export class TodoForm extends React.Component {
    addTask = (e) => {
        e.preventDefault();
        const inp = document.getElementById("todoInput");
        const val = inp.value;
        inp.value="";
        this.props.addTask(val);
    }
    render(){
        return(
        <div>
            <div className="todo type1">
                <form className="input-wrapper">
                    <input id="todoInput" autoComplete="off" onSubmit={this.addTask} type="text" className="add-todo" placeholder="ne işin var arakdaşım?"/>
                </form>
            </div>
            <button onClick={this.addTask} type="button" className="add-btn"/>
        </div>
        )
    }
}
