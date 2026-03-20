import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import Loadstair from './components/comon/Loadstair.jsx'
import Navcontext from './context/Navcontext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './context/AuthContext.jsx'

const CLIENT_ID = "1049976244564-g3jmkhaqm8m8gl1gvgapm3npbgq9hcv4.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AuthProvider>
        <BrowserRouter>
          <Loadstair>
            <Navcontext>
              <App />
            </Navcontext>
          </Loadstair>
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
