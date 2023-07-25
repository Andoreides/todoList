const initialState = {
    isAuth: true,
}

export const CHANGE_AUTH = 'CHANGE_AUTH';

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AUTH:
            return {...state, isAuth:action.payload}
        default: return state;
    }

}