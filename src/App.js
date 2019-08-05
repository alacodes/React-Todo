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
  toggleTask = id = {
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

  

    render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;




//DIRECTIONS: 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



  
// const taskData = [
//   {
//     task: 'Go to the gym', 
//     id: 500,
//     completed: false
//   },
//   {
//     task: 'Set up mentor meeting', 
//     id: 150,
//     completed: false
//   },
//   {
//     task: 'Take notes for tomorrow', 
//     id: 417,
//     completed: false
//   },
//   {
//     task: 'Clean the floor', 
//     id: 205,
//     completed: false
//   },
//   {
//     task: 'Groceries + meal prep', 
//     id: 478,
//     completed: false
//   },
//   {
//     task: 'Work on resume formatting', 
//     id: 312,
//     completed: false
//   }
// ];