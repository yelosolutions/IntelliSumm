import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './services/store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap entire application in Provider,
    Provider will service the app with Store(Global state)*/}
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);
