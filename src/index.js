import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './config/routes'

import './styles.css'

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)
