import {CHANGE_INPUT_VALUE} from "../../store/reducers";
import React, {useEffect, useState} from 'react';



export function Input ({type, value, onChange, placeholder, ...rest}) {
    const [inputValue, setInputValue] = useState( '')

    useEffect(() => {
        setInputValue(value)
    },[value])
    const onChangeInput = (value) => {
        console.log(value)
        setInputValue(value)
        onChange(value)
    }
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e)=>onChangeInput(e.target.value)}
            className="input"
            {...rest}
        />
    )
};
