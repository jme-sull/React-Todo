import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const ToDoItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];







class App extends React.Component {
 
  constructor(){
    super();
    this.state = {
      ToDoItems: ToDoItems
      
    }
  }

  addToDo = task => {
    const newToDo = {
      task: task,
      id: new Date(),
      completed: false
    };

    this.setState({
      ToDoItems: 'banana'
    })

    console.log(ToDoItems)
   
  }

 
  render() {
    return (
      <div> 
        <h2>My ToDo List</h2>
        <h3>Add Task</h3>
        <TodoForm addToDo={this.addToDo} />
        <h3>Current Tasks</h3>
        <TodoList ToDoItems={ToDoItems}/>
        
      </div>
    );
  }
}

export default App;
