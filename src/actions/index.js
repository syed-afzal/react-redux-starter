import moment from 'moment';
import uuid from "node-uuid";

export const getTodos = () => (dispatch) => {
        dispatch({
            type: 'GET_TODOS'
        });
};

export const toggleTodo = (id) => (dispatch) => {
    dispatch({
        type: 'TOGGLE_TODO',
        id
    });
};

export const addTodo = (obj) => (dispatch) => {
    let todo = {
        todo: obj.todoText,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null,
        dueDate: moment(obj.dueDate).unix(),
        id: uuid(),
    };
    dispatch({
        type: 'ADD_TODO',
        todo
    });
};