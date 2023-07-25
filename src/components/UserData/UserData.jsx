import React from 'react';
import {Input} from "../../uiKit/Input/Input";
import {MyButton} from "../../uiKit/MyButton/MyButton";
import {useSelector, useDispatch} from "react-redux";
import {CHANGE_BIRTH, CHANGE_FIO, CHANGE_NAME, CHANGE_PATRONYMIC, CHANGE_SURNAME} from "../../store/userReducer";
import { createBrowserHistory } from 'history';
import {useHistory, useLocation} from "react-router-dom";

    export const UserData = (props) => {
    const {name, surname, patronymic, birth, fio} = useSelector((store) => store.userState);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();


    const saveUserData = () =>{
        if (name && surname && patronymic && birth) {
            dispatch({type: CHANGE_FIO})
        }
    }

    const handleClick = () => {
        history.push('/');
    }


    console.log('location', location)

    return (
        <div>
            <p>{fio}</p>
            <Input placeholder='Имя' value={name} onChange={(value)=>dispatch({payload: value, type: CHANGE_NAME})} disabled={!!fio} />
            <Input placeholder='Фамилия' value={surname} onChange={(value)=>dispatch({payload: value, type: CHANGE_SURNAME})} disabled={!!fio}/>
            <Input placeholder='Отчество' value={patronymic} onChange={(value)=>dispatch({payload: value, type: CHANGE_PATRONYMIC})} disabled={!!fio}/>
            <Input placeholder='Дата рождения' value={birth} onChange={(value)=>dispatch({payload: value, type: CHANGE_BIRTH})} disabled={!!fio}/>
            <MyButton title='Сохранить данные' onClick={()=>saveUserData()} />
            <MyButton title='На главную' onClick={handleClick} />
        </div>
    );
};

export default UserData;