const initialState = {
    name: '',
    surname: '',
    patronymic: '',
    birth: '',
    fio: ''
}

export const CHANGE_NAME = 'CHANGE_NAME';
export const  CHANGE_SURNAME = 'CHANGE_SURNAME';

export const  CHANGE_PATRONYMIC = 'CHANGE_PATRONYMIC';
export const CHANGE_BIRTH = 'CHANGE_BIRTH';
export const CHANGE_FIO = 'CHANGE_FIO';

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_NAME: {
            return {...state, name: action.payload}
        }
        case CHANGE_SURNAME: {
            return {...state, surname: action.payload}
        }
        case CHANGE_PATRONYMIC: {
            return {...state, patronymic: action.payload}
        }
        case CHANGE_BIRTH: {
            return {...state, birth: action.payload}
        }
        case CHANGE_FIO: {
            return {...state, fio: `${state.name} ${state.surname} ${state.patronymic} ${state.birth}`}
        }
        default: return state;

    }

}