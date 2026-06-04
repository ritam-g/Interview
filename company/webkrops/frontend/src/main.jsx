import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AuthContext from './context/AuthContext.jsx'
import store from './store.js'
import { AppRoute } from './AppRoute.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
  <AppRoute />
  </Provider>
  // </StrictMode>,
)
