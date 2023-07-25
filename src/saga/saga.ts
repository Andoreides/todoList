import {put, takeEvery, call} from 'redux-saga/effects';
import {
    DECREMENT,
    decrementCreaterAC,
    GET_TODO,
    INCREMENT,
    incrementCreaterAC,
    TODO,
    todoCreaterAC
} from "./sagaReducer";
import Service from "../axios/api";


const delay = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
}

// function* incrementWorker() {
//     yield delay(2000)
//     yield put(incrementCreaterAC())
// };
//
// function* decrementWorker() {
//     yield delay(2000)
//     yield put(decrementCreaterAC())
// };

export function* getTodoWorker() {
    // try {
    //     const data = yield call(Service.getTodos().then(response=>response.data))
    //     console.log(data)
    //     yield put(todoCreaterAC(data))
    // } catch (err) {
    //     console.log(err)
    // }
    try {
        const data = yield call(() => {
                return fetch('https://dummyjson.com/todos')
                    .then(res => res.json())
            }
        );
        yield put(todoCreaterAC(data));
    } catch (error: unknown) {
        console.log(error)
    }
}


export function* countWatcher() {
   // yield takeEvery(INCREMENT, incrementWorker)
   //  yield takeEvery(DECREMENT, decrementWorker)
    yield takeEvery(GET_TODO, getTodoWorker )
};

