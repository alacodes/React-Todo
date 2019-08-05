import React from 'react';
import uuid from 'uuid';
import Todo from "./Todo";

const TodoList = props => {
    return (
        <>
            {props.tasks.map(task => {
                return <Todo key={uuid()} toggleTask={props.toggleTask} task={task} />;
            })}
        </>
    );
}

export default TodoList;







//DIRECTIONS
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
