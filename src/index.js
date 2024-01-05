import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import {  HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './store';

// Use createRoot from react-dom/client
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
         <HashRouter>
            <App/> 
         </HashRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
