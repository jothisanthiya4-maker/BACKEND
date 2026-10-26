import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Provider from './provider/Provider.jsx'
import UserProvider from './provider/UserProvider.jsx'
import AuthenProvider from './provider/AuthenProvider.jsx'

createRoot(document.getElementById('root')).render(
    
    <AuthenProvider>
        <UserProvider>
            <Provider>
                <App />
            </Provider>
        </UserProvider>
    </AuthenProvider>
)
