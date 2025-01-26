import { createRoot } from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './ilb/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
