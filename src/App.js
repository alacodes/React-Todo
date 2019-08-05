import React from 'react';
import uuid from 'uuid';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const tasks = [
  {
    task: '',
    id: null,
    complete: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    }
  }
  toggleTask = id => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed
            };
          } else {
            return task;
          }
        })
      };
    });
  };
  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: uuid(),
      completed: false
    };
    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, newTask]
      };
    });
  };


    render() {
      return (
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoList tasks = {this.state.tasks} toggleTask = {this.toggleTask} />
          <TodoForm clearCompleted = {this.clearCompleted} addTask = {this.addTask} />
        </div>
      );
  }
}

export default App;




//DIRECTIONS: 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

