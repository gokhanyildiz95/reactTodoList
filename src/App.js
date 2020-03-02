import React, {Component} from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {TodoForm} from './TodoForm';
import footer, { Footer } from './inc/footer';
import header, { Header } from './inc/header';

const myTasks = [
  
];

class App extends Component {
  constructor(){
    super();
    this.state = {myTasks: [
      {text: "yapılacak ilk iş",status:"passive"},
      {text:"ikinci iş",status:"passive"},
      {text:"üçüncü iş",status:"passive"},
      {text:"redux öğren",status:"passive"},
      {text:"test yaz",status:"passive"}
    ]
    };
  }
  addTask = (val) => {
    let updatedList = this.state.myTasks;
    updatedList.push({text:val, status:"passive"});
    this.setState({myTasks:updatedList })
    }
    doneTask = (task_id) => {
      task_id = task_id.replace('task_','');
      let updatedList = this.state.myTasks;
      let newStatus = 'active';
      let currentStatus = updatedList[task_id].status;
      if (currentStatus === 'active'){
        newStatus = 'passive';
      }
      updatedList[task_id].status = newStatus;
      this.setState({myTasks:updatedList});
    }
    removeTask = (task_id) => {
      task_id = task_id.replace('task_','');
      let updatedList = this.state.myTasks;
      updatedList.splice(task_id,1);
      this.setState({myTasks:updatedList});
    }
  render(){
    return (
      <div className="content">
        <Header/>
        <TodoForm addTask={this.addTask}/>
        <TodoList myTasks={this.state.myTasks} 
                  doneTask={this.doneTask}
                  removeTask={this.removeTask}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
