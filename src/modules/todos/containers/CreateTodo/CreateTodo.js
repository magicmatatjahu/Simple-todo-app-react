import React, { Component }         from 'react'
import { PropTypes }                from 'prop-types'
import { bindActionCreators }       from 'redux'
import { connect }                  from 'react-redux'

import { TodoItem }                 from '../../components'

import * as TodoActions             from '../../../../store/todos/actions'

export class CreateTodo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            status: 'planned',
            nameValid: false,
            descriptionValid: false,
            formValid: false,
            formErrors: {
                name: '',
                description: ''
            },
        }
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

    createTodo = (e) => {

        e.preventDefault()

        const todo = {
            name: this.state.name,
            description: this.state.description,
            status: this.state.status
        }

        if( this.state.formValid)
            this.props.actions.CreateTodo( todo)
    }
        
    errorClass( error) {

        return( !error.length ? '' : 'uk-form-danger');
    }

    creatingStatus = () => {

        if( this.props.creatingStatus) {

            return (
                <div>lol</div>
            )
        }
    }

    render() {

        const { name, description, status } = this.state
        
        return (
            <div>
                <div>
                    {this.creatingStatus()}
                </div>
                <form className="uk-form-stacked uk-text-center" onSubmit={this.createTodo}>
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
                        <button type="submit" className="uk-button uk-button-default" disabled={!this.state.formValid}>Create</button>
                    </fieldset>
                </form>
            </div>
        )
    }

}

CreateTodo.propTypes = {
    actions: PropTypes.object.isRequired,
    creatingStatus: PropTypes.bool.isRequired
}

function mapStateToProps( state, ownProps) {

    return {
        creatingStatus: state.todos.creatingStatus
    }
}

function mapDispatchToProps( dispatch) {

    return {
        actions: bindActionCreators( TodoActions, dispatch)
    }
}

export const CreateTodoContainer = connect( mapStateToProps, mapDispatchToProps)( CreateTodo)