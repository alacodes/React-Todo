import React from 'react';

class TodoForm extends React.component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <form>
                <input />
                <button>Add Todo</button>
                <button>Complete!</button>
            </form>
        );
    }
}

export default TodoForm;