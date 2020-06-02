import React from 'react';


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
    let newToDo = {
      task: task,
      id: new Date(),
      completed: false
    }
    console.log(newToDo)

    this.setState({
      ToDoItems: [...this.state.ToDoItems, newToDo]
    })
   
  }

  clearAllTasks = () => {
    this.setState({
      ToDoItems: []
    })
  }

  toggleCompleted = taskID => {
    
    this.setState({
      ToDoItems: this.state.ToDoItems.map(item => {
        if (item.id === taskID) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
    })
  })

  
}

 
  render() {
    return (
      <div> 
        <h2>My ToDo List</h2>
        <h3>Add Task</h3>
        <TodoForm addToDo={this.addToDo} />
        <h3>Current Tasks</h3>
        <TodoList toggleCompleted={this.toggleCompleted} clearAllTasks={this.clearAllTasks} ToDoItems={this.state.ToDoItems}/>
        
      </div>
    );
  }
}

export default App;
