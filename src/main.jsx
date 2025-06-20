import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { setupStore } from './store';
import {Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(

  // connect the store to the app
  <StrictMode>
    <Provider store={setupStore()}>
        <App />
    </Provider>
  </StrictMode>,
)