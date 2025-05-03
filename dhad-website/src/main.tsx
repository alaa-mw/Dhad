import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find root element');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="311007239287-4mj5p3lie336bhg7t07s43up83cq396h.apps.googleusercontent.com">
      <App />      
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
