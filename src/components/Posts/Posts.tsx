import  {useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import Service from "../../axios/api";
import {useDispatch, useSelector} from "react-redux";
import {getPostsThunk, POST_REDUCER} from "../../store/postReducer";
import './Posts.css';
import {Post} from "../../types/types";


type StoreType = {
    postState: Post
}
const Posts = (props) => {

    const {posts} = useSelector((store: StoreType) => store.postState);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getPostsThunk = ():any => {}
        dispatch(getPostsThunk());
        // getPostsThunk();
    //     Service.getPosts()
    //         .then(res => {
    //             console.log(res)
    //             dispatch({type: POST_REDUCER, payload: res.posts})
    //         })
    }, []);



    return (
        <div className={'posts__div'}>

            {props.posts.map((item) =>{
              return  <Link to={`/posts/${item.id}`} key={item.id} >
                      {item.title}
                 </Link>})}
        </div>
    );
};

export default Posts;