import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './config/firebase'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

serviceWorkerRegistration.register()

reportWebVitals()
