import React from 'react';


const taskData = [
  {
    name: 'Go to the gym', 
    id: 500,
    completed: false
  },
  {
    name: 'Set up mentor meeting', 
    id: 150,
    completed: false
  },
  {
    name: 'Take notes for tomorrow', 
    id: 417,
    completed: false
  },
  {
    name: 'Clean the floor', 
    id: 205,
    completed: false
  },
  {
    name: 'Groceries + meal prep', 
    id: 478,
    completed: false
  },
  {
    name: 'Work on resume formatting', 
    id: 312,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: taskData
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;




//DIRECTIONS: 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state