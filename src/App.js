import './App.css';
import {useDispatch, useSelector} from "react-redux";
// import {CHANGE_AUTH} from "./store/loginReducer";
// import {LoginForm} from "./components/LoginForm/LoginForm";
// import UserData from "./components/UserData/UserData";
// import TodoPage from "./components/TodoPage/TodoPage";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Redirect,
// } from 'react-router-dom';
// import NavBar from "./components/NavBar/NavBar";
// import Posts from "./components/Posts/Posts";
// import Post from "./components/Post/Post";
// import CarsList from "./components/CarsList/CarsList";
// import DefaultCar from "./components/DefalutCar/DefaultCar";
// import redirect from "react-router-dom/es/Redirect";
// import {MyButton} from "./uiKit/MyButton/MyButton";
import {decrementCreaterAC, getTodoAC, incrementCreaterAC, } from "./saga/sagaReducer";
function App() {
    // const {isAuth} = useSelector((store) => store.loginState);
    // const userData = useSelector((store) => store.userState);
    // const {posts} = useSelector((store) => store.postState);
    // const {cars} = useSelector((store) => store.carsState);
    const state = useSelector((store) => store);
    const dispatch = useDispatch();
    console.log(state);

    // const viewTodo = (param) => {
    //     dispatch({type: CHANGE_AUTH, payload: param})
    // }

    // const unLogin = () => {
    //     dispatch({type: CHANGE_AUTH, payload: false})
    // }
    //
    // function* functionGenerator() {
    //     for (let i = 0; i <5; i++) {
    //         yield i;
    //     }
    // }

    // if (!isAuth ) {
    //     return <Redirect to="/login" >
    //         <LoginForm />
    //     </Redirect>
    // }


    return (

        <div>
            <button type="button" onClick={()=>dispatch(incrementCreaterAC())}>increment</button>
            <button type="button" onClick={()=>dispatch(decrementCreaterAC())}>decrement</button>
            {state.count}
            <button type="button" onClick={()=>dispatch(getTodoAC())}>get Todos</button>

        </div>

        // <Router>
        //     <header className='header'>
        //         <NavBar isAuth={isAuth} />
        //         {isAuth && <MyButton title={'Разлогиниться'} onClick={unLogin} />}
        //     </header>
        //     <div className="App">
        //         <Switch>
        //             {!isAuth ? (<Route path="/login" >
        //                 <LoginForm onLogin={viewTodo} />
        //             </Route>) : null}
        //             <Route exact path="/posts">
        //                 <Posts  posts={posts} />
        //             </Route>
        //             <Route path="/posts/:id">
        //                 <Post  />
        //             </Route>
        //             <Route exact path="/cars">
        //                 <CarsList cars={cars} />
        //             </Route>
        //             <Route path="/cars/:id">
        //                 <DefaultCar />
        //             </Route>
        //             <Route path="/user">
        //                 <UserData />
        //             </Route>
        //             <Route path="/">
        //                 <TodoPage />
        //             </Route>
        //         </Switch>
        //     </div>
        // </Router>
    );
}

export default App;


