import Service from "../axios/api";

const initialState = {
    posts: []
}

export const POST_REDUCER = 'POST_REDUCER';

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REDUCER:
            return {...state, posts: action.payload};
        default:
            return state;
    }
}
const setPostsActionCreater =(posts) =>({type: POST_REDUCER, payload: posts});

export const getPostsThunk = () => (dispatch) => {
        Service.getPosts()
            .then(res => {
                dispatch(setPostsActionCreater(res.posts));
            })
            .catch(err => console.log('ERROR',err));
    };

