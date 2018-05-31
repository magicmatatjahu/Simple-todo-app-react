import React        from 'react';

const TodoItem = (props) => {

    return (
        <div className={ 'uk-card uk-card-body uk-card-hover ' + getClassOfTodoItem( props.todo.status) }>
            <p className="uk-card-title">{props.todo.name}</p>
            <p>{props.todo.description}</p>
            <div className="uk-button-group">
                <Buttons todo={props.todo} updateTodo={props.updateTodo}/>
                <button className="uk-button uk-button-small uk-button-default" style={{ marginRight: '10px' }} onClick={e => props.editTodoLink(props.todo.id)}>Edit</button>
                <button className="uk-button uk-button-small uk-button-danger" onClick={e => {

                    if( window.confirm( 'Are you sure you wish to delete this item?'))
                        props.deleteTodo(props.todo.id)
                }}>Delete</button>
            </div>
        </div>
    )
}

const getClassOfTodoItem = (status) => {

    switch( status) {

        case 'planned':
            return 'uk-card-default'
        case 'inProgress':
            return 'uk-card-primary'
        case 'done':
            return 'uk-card-secondary'
        default:
            return 'uk-card-default'
    }
}

const Buttons = (props) => {

    const updateTodo = (status) => {

        props.updateTodo({
            ...props.todo,
            status: status
        })
    }

    if( props.todo.status === 'planned') {

        return (
            <button className="uk-button uk-button-small uk-button-primary" style={{ marginRight: '10px' }} onClick={e => updateTodo('inProgress')}>In progress</button>
        )
    }
    else if( props.todo.status === 'inProgress') {

        return (
            <button className="uk-button uk-button-small" style={{ backgroundColor: '#222', color: '#fff', marginRight: '10px' }} onClick={e => updateTodo('done')}>Done</button>
        )
    }
    else {

        return (null)
    }
}

export { TodoItem }