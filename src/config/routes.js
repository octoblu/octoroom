import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/App/'
import Auth from '../containers/Auth/'
import Room from '../containers/Room/'
import Settings from '../containers/Settings/'
import NotFound from '../components/NotFound/'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Room} />
      <Route path="settings" component={Settings} />
      <Route path="setup" component={Settings} />
      <Route path="auth" component={Auth} />
    </Route>
    <Route path="*" status={404} component={NotFound} />
  </Route>
)
