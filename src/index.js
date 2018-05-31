import React                    from 'react'
import ReactDOM                 from 'react-dom'
import { createStore }          from 'redux'
import { Provider }             from 'react-redux'

import { App }                  from './containers'
import { configureStore }       from './store'

import "uikit/dist/css/uikit.min.css"

import registerServiceWorker    from './registerServiceWorker'

const store = configureStore()

ReactDOM.render(
    
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
