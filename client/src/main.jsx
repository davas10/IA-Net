import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment , StrictMode no renderiza nada en la interfaz de usuario. Este modo también activa advertencias y comprobaciones adicionales para sus descendientes.
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Goerli}> 
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider> 
  </React.StrictMode>
  )