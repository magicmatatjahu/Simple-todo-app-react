import React        from 'react';

const Header = (props) => {

    return (
        <header className="uk-container uk-margin">
            <h1 
                className="uk-logo" style={{ margin: "30px auto", textAlign: "center" }}>
                Simple ToDo app written in ReactJS with Redux and UIKit for simple RESTful api written in GoLang
            </h1>
        </header>
    )
}

export { Header }