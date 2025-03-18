
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { reg } from './Data/data'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <App reg={reg}/>
</BrowserRouter>
)
