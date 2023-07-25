import Service from "../axios/api";

const initialState = {
    list: [],
    inputValue: '',
    inputFilter: '',
    filterList: [],
    counter: 0,
    loading: false,


};

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_TODO = 'ADD_TODO';
export const FIND_TODO = 'FIND_TODO';
export const CHANGE_FILTER_VALUE = 'CHANGE_FILTER_VALUE';
export const COUNTER_VALUE = 'COUNTER_VALUE';
export const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX';
export const CHANGE_LOADING = 'CHANGE_LOADING';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE: {
            // console.log('DEBUGGG',action.payload)
            return {...state, inputValue: action.payload}
        }
        case ADD_TODO: {
            console.log(action.payload)
            return {...state, list: action.payload};
        }
        case CHANGE_FILTER_VALUE: {
            return {...state, inputFilter: action.payload}
        }
        case FIND_TODO: {
            return {...state, filterList: [...state.filterList, action.payload]};
        }
        case COUNTER_VALUE: {
            return {...state, counter: action.payload}
        }
        case CHANGE_LOADING: {
            return {...state, loading: action.payload}
        }
        // case CHANGE_CHECKBOX: {
        //     return {...state, list:[...state.] action.payload}
        // }
        default: {
            return state
        }
    }
};

const getTodosActionCreater = (list) => ({type: ADD_TODO, payload: list});
export const getTodosThunk = () => (dispatch) => {

    dispatch({type: CHANGE_LOADING, payload: true})
    Service.getTodos()
        .then(res => {
            dispatch(getTodosActionCreater(res.todos));
        })
        .catch(err => console.log(err))
        .finally(dispatch({type: CHANGE_LOADING, payload: false}))
};

const addTodoActionCreater = (list) => ({type: ADD_TODO, payload: list})
export const addTodoThunk = (newToDo, list) => (dispatch) => {
    // dispatch({type: ADD_TODO, payload: true})
    Service.addOneTodo(newToDo).then((res) => dispatch(addTodoActionCreater([...list, res])))
}


export const changeTodoThunk = (i, value, list) => (dispatch) => {
    console.log('list', list)
    const newFind = list.find((item) => item.id === i)
    console.log(newFind.completed)

    Service.changeOneTodo({completed: !!value}, i).then((res) => {
        const newMap = list.map((item) => {
            return item.id === i ? {...item, completed: !!value} : item
        })
        console.log('newFind', newFind)
        dispatch(addTodoActionCreater(newMap))
    })
}

// export const deleteTodoThunk = (i, value, list) => (dispatch) => {
//     const deleteItem = list.find((item=> item.id === i))
//     Service.deleteTodo({})
// }

