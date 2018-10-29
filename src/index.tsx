import * as React from 'react'
import * as ReactDOM from 'react-dom'

import 'styles/app.css'

import App from './components/App'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
