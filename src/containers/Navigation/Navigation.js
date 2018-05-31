import React                        from 'react';
import { LinkWithConfig }           from '../../components'

const Navigation = (props) => {

    return (
        <nav>
            <ul className="uk-tab uk-flex-center">
                {props.routes.map((route, i) => <LinkWithConfig key={i} {...route} />)}
            </ul>
        </nav>
    )
}

export { Navigation }