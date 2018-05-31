import React        from 'react';

const Footer = (props) => {

    return (
        <footer className="uk-container uk-margin">
            <h4
                style={{ margin: "30px auto", textAlign: "center" }}>
                Created by Maciej Urbańczyk - <a href="https://github.com/magicmatatjahu/Simple-todo-app-react" target="_blank" rel="noopener noreferrer">Github</a>
            </h4>
        </footer>
    )
}

export { Footer }