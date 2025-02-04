import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Artist from './pages/Artist/Artist';
import ConnectWallet from './pages/ConnectWallet/ConnectWallet';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import MarketPlace from './pages/MarketPlace/MarketPlace';
import Nft from './pages/Nft/Nft';
import Ranking from './pages/Ranking/Ranking';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/artist' element={<Artist />} />
      <Route path='/connect-wallet' element={<ConnectWallet />} />
      <Route path='/create-account' element={<CreateAccount />} />
      <Route path='/market-place' element={<MarketPlace />} />
      <Route path='/nft' element={<Nft />} />
      <Route path='/rankings' element={<Ranking/>} />
    </Routes>
  );
}