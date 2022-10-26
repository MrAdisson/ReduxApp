import {INCREASE_COUNT, DECREASE_COUNT, RESET_COUNT, ADD_TODO, REMOVE_TODO} from "./actionList"


export const increaseCount = () => {
    return {
        type: INCREASE_COUNT
        }
}

export const decreaseCount = () => {
    return {
        type: DECREASE_COUNT
        }
}

export const resetCount = () => {
    return {
        type: RESET_COUNT
        }
}

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }

}

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        payload: todo
    }
}