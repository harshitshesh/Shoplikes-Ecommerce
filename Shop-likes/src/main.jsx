import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import Loadstair from './components/comon/Loadstair.jsx'
import Navcontext from './context/Navcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <Loadstair>
<Navcontext>

      <App />

</Navcontext>


    </Loadstair>
    </BrowserRouter>
  </StrictMode>,
)
