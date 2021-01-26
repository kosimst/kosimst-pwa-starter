import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Shell from './core/shell'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Shell />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()

reportWebVitals()
