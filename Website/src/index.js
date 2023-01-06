import React from 'react'
import App from './App'

import { createRoot } from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './styles/index.scss';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <ProSidebarProvider>
            <App />
        </ProSidebarProvider>
    </React.StrictMode>
  );
