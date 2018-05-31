import { TodoApi }          from "../../services";
import * as TodosActions    from './action-types'

//Read All
export function GetTodos() {

    return (dispatch, getState) => {

        dispatch({ type: TodosActions.GET_TODOS })
        return TodoApi.getTodos()
            .then(res => {
                dispatch( GetTodosSuccess( res.data))
            })
            .catch(err => {
                dispatch( GetTodosError( err))
            })
    }
}

export function GetTodosSuccess( todos) {

    return {
        type: TodosActions.GET_TODOS_SUCCESS,
        todos
    }
}

export function GetTodosError( error) {

    return {
        type: TodosActions.GET_TODOS_ERROR,
        error
    }
}

//Read One
export function GetTodo( id) {

    return (dispatch, getState) => {

        dispatch({ type: TodosActions.GET_TODO })
        return TodoApi.getTodo( id)
            .then(res => {
                dispatch( GetTodoSuccess( res.data))
            })
            .catch(err => {
                dispatch( GetTodoError( err))
            })
    }
}

export function GetTodoSuccess( todo) {

    return {
        type: TodosActions.GET_TODO_SUCCESS,
        todo
    }
}

export function GetTodoError( error) {

    return {
        type: TodosActions.GET_TODO_ERROR,
        error
    }
}

//Create
export function CreateTodo( todo) {

    return (dispatch, getState) => {

        dispatch({ type: TodosActions.CREATE_TODO })
        return TodoApi.createTodo(todo)
            .then(res => {
                dispatch( CreateTodoSuccess( todo))
            })
            .catch(err => {
                dispatch( CreateTodoError( err))
            })
    }
}

export function CreateTodoSuccess( todo) {

    return {
        type: TodosActions.CREATE_TODO_SUCCESS,
        todo
    }
}

export function CreateTodoError( error) {

    return {
        type: TodosActions.CREATE_TODO_ERROR,
        error
    }
}

//Update
export function UpdateTodo( todo) {

    return (dispatch, getState) => {

        dispatch({ type: TodosActions.UPDATE_TODO })
        return TodoApi.updateTodo( todo)
            .then(res => {
                dispatch( UpdateTodoSuccess( todo))
            })
            .catch(err => {
                dispatch( UpdateTodoError( err))
            })
    }
}

export function UpdateTodoSuccess( todo) {

    return {
        type: TodosActions.UPDATE_TODO_SUCCESS,
        todo
    }
}

export function UpdateTodoError( error) {

    return {
        type: TodosActions.UPDATE_TODO_ERROR,
        error
    }
}

//Delete
export function DeleteTodo( id) {

    return (dispatch, getState) => {

        dispatch({ type: TodosActions.DELETE_TODO })
        return TodoApi.removeTodo( id)
            .then(res => {
                dispatch( DeleteTodoSuccess( id))
            })
            .catch(err => {
                dispatch( DeleteTodoError( err))
            })
    }
}

export function DeleteTodoSuccess( id) {

    return {
        type: TodosActions.DELETE_TODO_SUCCESS,
        id
    }
}

export function DeleteTodoError( error) {

    return {
        type: TodosActions.DELETE_TODO_ERROR,
        error
    }
}



