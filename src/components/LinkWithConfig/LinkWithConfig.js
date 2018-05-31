import React            from 'react';
import { NavLink  }     from 'react-router-dom'

const LinkWithConfig = route => {

    if('label' in route && 'path' in route) {

        return (

            <li className="uk-tab-item">
                <NavLink activeStyle={{ borderBottom: '1px solid rgb(30, 135, 240)', fontWeight: '700', color: 'rgb(51, 51, 51)' }} to={route.path}>{route.label}</NavLink>
            </li>
        ) 
    }
    else {

        return (null)
    }
}

export { LinkWithConfig }