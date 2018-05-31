import React, { Component }         from 'react'
import { PropTypes }                from 'prop-types'
import { bindActionCreators }       from 'redux'
import { connect }                  from 'react-redux'
import { withRouter }               from 'react-router-dom'

import { TodoItem }                 from '../../components'

import * as TodoActions             from '../../../../store/todos/actions'

export class Todos extends Component {

    constructor(props) {

        super(props)
    }

    componentDidMount() {

        this.getTodos()
    }

    getTodos = () => {

        this.props.actions.GetTodos()
    }

    updateTodo = (todo) => {

        console.log( todo)

        this.props.actions.UpdateTodo( todo) 
    }

    deleteTodo = (id) => {

        this.props.actions.DeleteTodo( id) 
    }

    editTodoLink = (id) => {

        const { history } = this.props

        this.props.actions.GetTodo( id)
        this.props.history.push( `edit/${id}`)
    }

    render() {

        const { todos, loadingAll } = this.props

        if( loadingAll && Array.isArray(todos) && todos.length > 0) {

            const plannedTodos = todos.filter( todo => todo.status === 'planned')
            const inProgressTodos = todos.filter( todo => todo.status === 'inProgress')
            const doneTodos = todos.filter( todo => todo.status === 'done')

            return (
                <div className="uk-grid uk-child-width-expand@s">
                    <div>
                        <h2 className="uk-text-center">Planned</h2>
                        <ul className="uk-list">
                            {plannedTodos.map(todo =>
                                <li key={todo.id} className="uk-margin">
                                    <TodoItem todo={todo} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} editTodoLink={this.editTodoLink} />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <h2 className="uk-text-center">In progress</h2>
                        <ul className="uk-list">
                            {inProgressTodos.map(todo =>
                                <li key={todo.id} className="uk-margin">
                                    <TodoItem todo={todo} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} editTodoLink={this.editTodoLink} />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <h2 className="uk-text-center">Done</h2>
                        <ul className="uk-list">
                            {doneTodos.map(todo =>
                                <li key={todo.id} className="uk-margin">
                                    <TodoItem todo={todo} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} editTodoLink={this.editTodoLink} />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            )
        }
        else if( !loadingAll) {
            return (<h3 className="uk-text-center">Loading...</h3>)
        }
        else {
            return (<h3 className="uk-text-center">Any todos in database</h3>)
        }
    }

}

Todos.propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired,
    loadingAll: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
}

function mapStateToProps( state, ownProps) {

    return {
        todos: state.todos.todos,
        loadingAll: state.todos.loadingAll
    }
}

function mapDispatchToProps( dispatch) {

    return {
        actions: bindActionCreators( TodoActions, dispatch)
    }
}

export const TodosContainer = withRouter(connect( mapStateToProps, mapDispatchToProps)( Todos))