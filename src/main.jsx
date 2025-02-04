import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent/NavBarComponent.jsx';
import Footer from './components/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/Nft-MarketPlace-X1/'>
      <NavBarComponent />
      <App />
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);