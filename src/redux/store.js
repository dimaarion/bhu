import { combineReducers } from "redux";

export function test(state = 0) {
    return state = 10;
}


export default combineReducers(
    {
        test:test
    }
    )