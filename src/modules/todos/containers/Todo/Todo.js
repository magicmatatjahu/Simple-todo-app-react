import React, { Component }         from 'react'
import { PropTypes }                from 'prop-types'
import { bindActionCreators }       from 'redux'
import { connect }                  from 'react-redux'
import { withRouter }               from 'react-router-dom';

import * as TodoActions             from '../../../../store/todos/actions'

export class Todo extends Component {

    constructor(props) {

        super(props)

        this.state = {
            name: '',
            description: '',
            status: 'planned',
            nameValid: true,
            descriptionValid: true,
            formValid: true,
            formErrors: {
                name: '',
                description: ''
            },
        }
    }

    componentDidMount() {

        this.getTodo()
    }

    onChange = (e) => {

        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value }, () => { this.validateField( name, value) })
    }

    validateField = (fieldName, value) => {

        let { formErrors, nameValid, descriptionValid } = this.state

        switch( fieldName) {

            case 'name':
                nameValid = value.length >= 3
                formErrors.name = nameValid ? '' : ' is to short'
            break
            case 'description':
                descriptionValid = value.length >= 36
                formErrors.description = descriptionValid ? '' : ' is to short'
            break
            default:
            break
        }

        this.setState({
            formValid: nameValid && descriptionValid,
            nameValid: nameValid,
            descriptionValid: descriptionValid,
            formErrors: formErrors
        })
    }

    errorClass( error) {

        return( !error.length ? '' : 'uk-form-danger');
    }

    updateTodo = (e) => {

        e.preventDefault()

        const todo = {
            id: this.props.todo.id,
            name: this.state.name,
            description: this.state.description,
            status: this.state.status
        }

        if( this.state.formValid)
            this.props.actions.UpdateTodo( todo)
    }

    getTodo = () => {

        const { match } = this.props

        this.props.actions.GetTodo( match.params.id).then(_ => {

            const { todo } = this.props

            this.setState({
                name: todo.name,
                description: todo.description,
                status: todo.status
            })
        })
    }

    render() {

        const { name, description, status } = this.state
        const { loadingOne } = this.props
        
        if( loadingOne) {

            return (
                <div>
                    <form className="uk-form-stacked uk-text-center" onSubmit={this.updateTodo}>
                        <fieldset className="uk-fieldset">
    
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="name">Name</label>
                                <input name="name" className={ 'uk-input uk-form-width-large ' + this.errorClass( this.state.formErrors.name) } type="text" placeholder="Name of new task" value={ this.state.name } onChange={this.onChange} />
                            </div>
    
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="status">Status</label>
                                <select name="status" className="uk-select uk-form-width-large" value={ this.state.status } onChange={this.onChange}>
                                    <option value="planned">Planned</option>
                                    <option value="inProgress">In progress</option>
                                    <option value="done">Done</option>
                                </select>
                            </div>
    
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="description">Description</label>
                                <textarea name="description" className={ 'uk-textarea uk-form-width-large ' + this.errorClass( this.state.formErrors.description) } rows="5" placeholder="Description of new task" value={ this.state.description } onChange={this.onChange}></textarea>
                            </div>
                            <button type="submit" className="uk-button uk-button-default" disabled={!this.state.formValid}>Update</button>
                        </fieldset>
                    </form>
                </div>
            )
        }
        else {
            return (<h3 className="uk-text-center">Loading...</h3>)
        }
    }

}

Todo.propTypes = {
    actions: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
    loadingOne: PropTypes.bool.isRequired
}

function mapStateToProps( state, ownProps) {

    return {
        todo: state.todos.todo,
        loadingOne: state.todos.loadingOne
    }
}

function mapDispatchToProps( dispatch) {

    return {
        actions: bindActionCreators( TodoActions, dispatch)
    }
}

export const TodoContainer = withRouter( connect( mapStateToProps, mapDispatchToProps)( Todo))