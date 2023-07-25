
export type CarsType = {
    id: number,
    description: string,
    link?: string,
    img?: string
}

export type  Props = {
    cars: CarsType[]
}

export type PostsType = {
    id: number,
    title: string,
}

export type Post = {
    posts: PostsType[],
}

//todoPage

export type TodosType = {
    todo: string,
    id: number,
    completed: boolean,
}

export type PropsTodo = {
    inputValue: string,
    inputFilter: string,
    counter: number,
    loading: boolean,
    list: TodosType[]
}

