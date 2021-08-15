import { combineReducers, createStore } from "redux";

function test(state = {}) {
    return 10;
}


export default createStore(combineReducers(
    test
)) 