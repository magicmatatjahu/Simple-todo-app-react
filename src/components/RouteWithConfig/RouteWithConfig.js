import React            from 'react';
import { Route }        from 'react-router-dom'

const RouteWithConfig = route => {

    if('path' in route) {

        return (
            <Route
                exact={'exact' in route && route.exact === true ? true : false}
                path={route.path}
                component={route.component}
            />
        )
    }
    else {

        return (
            <Route
                exact={'exact' in route && route.exact === true ? true : false}
                component={route.component}
            />
        )
    }
}

export { RouteWithConfig }