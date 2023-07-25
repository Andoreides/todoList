import {useEffect, useState} from 'react';
import {
    ADD_TODO, addTodoThunk,
    CHANGE_FILTER_VALUE,
    CHANGE_INPUT_VALUE,
    CHANGE_LOADING, changeTodoThunk,
    COUNTER_VALUE,
    getTodosThunk
} from "../../store/reducers";
import {Input} from "../../uiKit/Input/Input";
import {MyButton} from "../../uiKit/MyButton/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {Spin} from "antd";
import Service from "../../axios/api";
import {PropsTodo, TodosType} from "../../types/types";

type StoreType = {
    todosState: PropsTodo
}
const TodoPage = () => {
    const {inputValue, list, inputFilter, counter, loading} = useSelector((store: StoreType) => store.todosState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (counter < 3) {
            const interval = setInterval(() => intervalStart(), 1000)
            return () => clearInterval(interval);
        }
    }, [counter])

    useEffect(() => {
        const getTodosThunk = (): any => {
        }
        dispatch(getTodosThunk());

        // todoService.getUsers()
    }, [])

    const intervalStart = () => {
        dispatch({type: COUNTER_VALUE, payload: counter + 1})
    }

    const findToDo = () => {
        dispatch({type: 'FIND_TODO', payload: list.filter(list => list.todo === inputFilter)})
    };

    const changeCheckBox = (i: number, value: boolean) => {
        console.log(i, value)
        const newMap = list.map((item) => {
            return item.id === i ? {...item, completed: !!value} : item
        })
        const changeTodoThunk = (i, value, list): any => {
        }
        dispatch(changeTodoThunk(i, value, list))
        dispatch({type: 'ADD_TODO', payload: newMap})
    };

    console.log('list', list)

    const filteredItems = list?.filter(item => {
        return item.todo.toLowerCase().includes(inputFilter.toLowerCase());
    });

    const listMap = list && list.map((item: TodosType) => {
        return (
            <div key={item.id}>
                <span>{item.todo}</span>
                <input type='checkbox' checked={!!item.completed}
                       onChange={(e) => changeCheckBox(item.id, !!e.target.checked)}/>
            </div>
        )
    });

    const filteredItemsMap = filteredItems?.map((item: TodosType) => {
        return (
            <div key={item.id}>
                <span>{item.todo}</span>
                <input type='checkbox' checked={!!item.completed}
                       onChange={(e) => changeCheckBox(item.id, !!e.target.checked)}/>
            </div>
        )

    });

    const addToDo = (text: string) => {
        if (text) {
            const newToDo = {todo: text, completed: false, userId: 5}
            // dispatch({type: ADD_TODO, payload: [...list, newToDo]})
            // Service.addOneTodo(newToDo).then((res) =>dispatch({type: ADD_TODO, payload: [...list, res]}))
            const addTodoThunk = (newTodo, list): any => {
            }
            dispatch(addTodoThunk(newToDo, list));
        }
        dispatch({type: CHANGE_INPUT_VALUE, payload: ''})

    };

    return (
        <div>
            <>
                <div>Список дел</div>
                <Input type='text' placeholder='Введите значение' value={inputValue}
                       onChange={(value) => dispatch({payload: value, type: CHANGE_INPUT_VALUE})}/>
                <Input type='text' placeholder='Поиск по фильтру' value={inputFilter}
                       onChange={(value) => dispatch({payload: value, type: CHANGE_FILTER_VALUE})}/>
                <MyButton onClick={() => addToDo(inputValue)} title='Добавить дело'/>
                <MyButton onClick={() => findToDo()} title='Поиск'/>
                <div>{loading && (<Spin/>)}</div>
                <div>{!inputFilter ? listMap : filteredItemsMap}</div>
                <div>Обновление счетчика {counter}</div>
                <MyButton onClick={() => intervalStart()} title='Start interval'/>
            </>
        </div>
    );
};

export default TodoPage;