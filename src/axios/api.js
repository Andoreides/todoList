import {instance} from "./axios";

const  Service =  {
    getTodos: ()=>{
        return instance.get('todos')
            .then(res => res.data)
    },
    getUsers: ()=>{
        return instance.get('users')
            .then(res => console.log('todoServiceUSERSS',res.data))
    },
    getPosts: ()=>{
        return instance.get('posts')
            .then(res => res.data)
    },
    addOneTodo: (todo)=>{
        return instance.post('todos/add', JSON.stringify(todo))
            .then(res => res.data)
    },
    changeOneTodo: (completed, id)=>{
        return instance.put(`todos/${id}`, JSON.stringify(completed))
            .then(res => res.data)
    },
    deleteTodo: ()=>{
        return instance.delete('todos')
            .then(res =>res.data)
    }

}
export default Service;