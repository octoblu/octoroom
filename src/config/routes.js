import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/App/'
import Room from '../containers/Room/'
import Setup from '../containers/Setup/'
import NotFound from '../components/NotFound/'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Room} />
      <Route path="setup" component={Setup} />
    </Route>
    <Route path="*" status={404} component={NotFound} />
  </Route>
)
