import React                        from 'react';
import { RouteWithConfig }          from '../../components'

const Routing = (props) => {

    return (
        <div>
            {props.routes.map((route, i) => 
                <RouteWithConfig key={i} {...route} />
            )}
        </div>
    )
}

export { Routing }