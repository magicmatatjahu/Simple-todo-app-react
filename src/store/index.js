import { createStore, applyMiddleware }         from 'redux'
import { combineReducers }                      from 'redux'
import thunkMiddleware                          from 'redux-thunk'

import { todosReducer }                         from './todos/reducer'

const rootReducer = combineReducers({
    todos: todosReducer
})

export function configureStore( preloadedState) {

  return createStore(
    rootReducer,
    preloadedState,

    applyMiddleware(
      thunkMiddleware
    )
  )
}