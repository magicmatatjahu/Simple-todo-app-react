import React        from 'react';

const TodoItem = (props) => {

    return (
        <div>
            <p>{props.todo.name}</p>
            <p>{props.todo.description}</p>
            <Buttons todo={props.todo} updateTodo={props.updateTodo}/>
            <div>
                <button className="uk-button uk-button-small" onClick={e => props.editTodoLink(props.todo.id)}>Edit</button>
                <button className="uk-button uk-button-small" onClick={e => {

                    if( window.confirm( 'Are you sure you wish to delete this item?'))
                        props.deleteTodo(props.todo.id)
                }}>Delete</button>
            </div>
        </div>
    )
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
            <div>
                <button className="uk-button uk-button-small" onClick={e => updateTodo('inProgress')}>In progress</button>
            </div>
        )
    }
    else if( props.todo.status === 'inProgress') {

        return (
            <div>
                <button className="uk-button uk-button-small" onClick={e => updateTodo('done')}>Done</button>
            </div>
        )
    }
    else {

        return (null)
    }
}

export { TodoItem }