// ** React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'

// ** Custom Components Imports
import App from './App.jsx'

// ** Custom Styles Imports
import './styles/index.css'

// ** Store Imports
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
