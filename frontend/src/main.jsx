import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from './Context/StateProvider'
import { InitialState } from './Context/InitialState'
import Reducer from './Context/Reducer'
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
    <StateProvider InitialState={InitialState} Reducer={Reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
</React.StrictMode>,
)
