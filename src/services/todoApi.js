import { HttpClient }           from '../common'
import { API }                  from '../const'

const TODO_API = `${API}/tasks`

const getTodos = () => {

    return HttpClient.get( TODO_API)
}

const getTodo = id => {

    return HttpClient.get( `${TODO_API}/${id}`)
}

const createTodo = todo => {

    return HttpClient.post( TODO_API, todo)
}

const updateTodo = todo => {

    return HttpClient.put( TODO_API, todo)
}

const removeTodo = id => {

    return HttpClient.delete( `${TODO_API}/${id}`)
}

const TodoApi = {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    removeTodo
}

export { TodoApi }