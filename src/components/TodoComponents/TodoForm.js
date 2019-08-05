import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    addTask = event => {
        event.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        });
    };


    render() {
        return (
            <form>
                <input 
                    value = {this.state.task}
                    name = 'task' 
                    onChange = {this.handleChanges}
                />
                <button onClick={this.addTask}>Add Todo</button>
                <button onClick={this.clearCompleted}>Complete!</button>
            </form>
        );
    }
}

export default TodoForm;