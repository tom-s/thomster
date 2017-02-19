import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from 'App'
import store from 'store'

import 'index.html'
import 'style.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
