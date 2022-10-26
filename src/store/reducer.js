import {INCREASE_COUNT, DECREASE_COUNT, RESET_COUNT} from "./actionList"

const initialState = {
    count: 0,
    test: true
}

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case INCREASE_COUNT: return {...state, count: state.count +1}
        case DECREASE_COUNT: return {...state, count: state.count -1}
        case RESET_COUNT: return {...state, count: initialState.count}
        default: return state;
    }


}