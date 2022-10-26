import {INCREASE_COUNT, DECREASE_COUNT, RESET_COUNT, ADD_TODO, REMOVE_TODO} from "./actionList"

const initialState = {
    count: 0,
    todos: [],
    todoCurrentId: 0
}

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case INCREASE_COUNT: return {...state, count: state.count +1}
        case DECREASE_COUNT: return {...state, count: state.count -1}
        case RESET_COUNT: return {...state, count: initialState.count}

        case ADD_TODO: {console.log(state);return {...state, todos: [...state.todos, action.payload], todoCurrentId: state.todoCurrentId + 1}}
        case REMOVE_TODO: return {...state, todos: state.todos.filter(t =>  t.id !== action.payload.id)}


        default: return state;
    }


}