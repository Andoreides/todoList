import {useHistory, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Post, Props} from "../../types/types";

type StoreType = {
    postState: Post
}
const Post = ( ) => {
    const params = useParams();
    const {posts} = useSelector((store: StoreType) => store.postState);
    const id: number = Number(params.id);
    const cardToShow = posts.find((item) => item.id === id);
    const history = useHistory();
    const handleClick = () =>{
        history.push('/posts')
    }

    return (
        <div>
            <h2>Это пост:</h2>
            <h3>Description: {cardToShow.title}</h3>
            <h3>ID: {cardToShow.id}</h3>
            <button className={'posts__back'} onClick={(e)=>handleClick()}>Back</button>
        </div>
    );
};

export default Post;