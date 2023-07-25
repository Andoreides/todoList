const initialState = {
    count: 0,
    todo: [],
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TODO = 'TODO';

export const GET_TODO = 'GET_TODO';

export const incrementCreaterAC = () =>{
    return {type: INCREMENT }
}

export const decrementCreaterAC = () =>{
    return {type: DECREMENT }
}

export const todoCreaterAC = (todos) =>{
    return {type: TODO, todos}
}

export const getTodoAC = () =>{
    return {type: GET_TODO}
}

export const sagaReducer = (state = initialState, action) =>{
    switch(action.type) {
        case INCREMENT: {
            return {...state, count: state.count+1}
        }
        case DECREMENT:{
            return {...state, count: state.count-1}
        }
        default: {return state}
    }
}