import * as TodosActions     from './action-types'

const initialState = {
  todos: [],
  todo: {},
  updatingStatus: false,
  creatingStatus: false,
  deletingStatus: false,
  loadingAll: false,
  loadingOne: false,
  error: null
}

const todosReducer = (state = initialState, action) => {
    
    switch (action.type) {

      case TodosActions.GET_TODOS: {

        return {
          ...state,
          loadingAll: false
        }
      }

      case TodosActions.GET_TODOS_SUCCESS: {

        return {
          ...state,
          todos: action.todos,
          loadingAll: true
        }
      }

      case TodosActions.GET_TODOS_ERROR: {

        return {
          ...state,
          loadingAll: true,
          error: action.error
        }
      }

      case TodosActions.GET_TODO: {

        return {
          ...state,
          loadingOne: false,
        }
      }

      case TodosActions.GET_TODO_SUCCESS: {

        return {
          ...state,
          loadingOne: true,
          todo: action.todo
        }
      }

      case TodosActions.GET_TODO_ERROR: {

        return {
          ...state,
          loadingOne: false,
          error: action.error
        }
      }
        
      case TodosActions.CREATE_TODO_SUCCESS: {

        return {
          ...state,
          creatingStatus: true,
          todos: [
            ...state.todos,
            action.todo
          ]
        }
      }

      case TodosActions.CREATE_TODO_ERROR: {

        return {
          ...state,
          creatingStatus: false,
          error: action.error
        }
      }

      case TodosActions.UPDATE_TODO_SUCCESS: {

        state.todos = state.todos.filter(todo => todo.id !== action.todo.id)

        return {
          ...state,
          updatingStatus: true,
          todos: [
            ...state.todos,
            action.todo
          ]
        }
      }

      case TodosActions.UPDATE_TODO_ERROR: {

        return {
          ...state,
          updatingStatus: false,
          error: action.error
        }
      }

      case TodosActions.DELETE_TODO_SUCCESS: {

        return {
          ...state,
          deletingStatus: true,
          todos: state.todos.filter(todo => todo.id !== action.id)
        }
      }

      case TodosActions.DELETE_TODO_ERROR: {

        return {
          ...state,
          deletingStatus: false,
          error: action.error
        }
      }

      default:
        return state
    }
  }
  
  export { todosReducer }