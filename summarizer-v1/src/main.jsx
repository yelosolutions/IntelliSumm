import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap entire application in Provider
    Provider will service the app with Store(Global state)*/}
    <Provider>
      <App />
    </Provider>
    
  </React.StrictMode>
);
