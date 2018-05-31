import React                  from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect }                  from 'react-router-dom'

import { 
  Navigation,
  Routing,
  Header,
  Footer }                    from '../index'

import routes                 from '../../routes'

const App = (props) => {

  return (
    <div>
      <Header />
      <Router>
          <div>
              <Navigation routes={routes} />
              <div className="uk-container uk-margin">
                <Switch>
                    <Routing routes={routes} />
                </Switch>
              </div>
          </div>
      </Router>
      <Footer />
    </div>
  )
}

export { App }
