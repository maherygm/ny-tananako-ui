import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from 'react-avatar';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RouteConfig from './config/routes/RouteConfig';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider colors={['red', 'green', 'blue']}>
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
