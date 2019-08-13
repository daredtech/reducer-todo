import React, {useState, useReducer} from 'react';
import {Reducer, initialState} from '../reducers/Reducer';

const ToDoForm = () => {

    const [toDoTask, setToDoTask] = useState();
    const [state, dispatch] = useReducer(Reducer, initialState);
    console.log(state);

    return(
        <form>
        <input type='text' placeholder='to do...'/> 
        </form>
    )

}

export default ToDoForm;