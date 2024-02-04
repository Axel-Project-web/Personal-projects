//react
import React from 'react';
import ReactDOM from 'react-dom/client';

//global styles
import './index.css';

//router
import RouterApp from './router/Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterApp/>
  </React.StrictMode>
);
