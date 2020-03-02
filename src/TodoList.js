import React from 'react';

export class TodoList extends  React.Component {
    doneTask = (e) => {
        this.props.doneTask(e.target.parentNode.id);
    };
    removeTask = (e) => {
        this.props.removeTask(e.target.parentNode.id);
    }
    render(){
        let items_left = 0;
        const items = this.props.myTasks.map((elem,i) => {
            if (elem.status==='passive'){
                items_left ++;
            };
        let task_id='task_'+ i;
            return(
                
                <li key={i} id={task_id} className={elem.status}>
                    <span className="id">{i+1}</span>
                    <span className="title">{elem.text}</span>
                    <span className="type" onClick={this.doneTask}></span>
                    <span className="delete" onClick={this.removeTask}></span>
                </li>
            )
        });
            return(
                <div>
                    <div className="todo-list">
                        <ul>
                            {items}
                        </ul>
                    </div>
                    <div className="todo-filter">
                        <div className="left">
                            <span>{items_left}items left</span>
                        </div>
                        <div className="right">
                            <ul>
                                <li><span className="active">All</span></li>
                                <li><span>Active</span></li>
                                <li><span>Completed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
    }
}