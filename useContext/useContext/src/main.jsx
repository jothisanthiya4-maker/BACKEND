import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Provider from './provider/Provider.jsx'
import UserProvider from './provider/UserProvider.jsx'
import AuthContext from './provider/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    
    <AuthContext>
        <UserProvider>
            <Provider>
                <App />
            </Provider>
        </UserProvider>
    </AuthContext>
)
