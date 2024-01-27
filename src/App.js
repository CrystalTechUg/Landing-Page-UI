import './App.css';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import LearnAndExplore from './components/LearnAndExplore/LearnAndExplore';
import LearnCrypto from './components/LearnCrypto/LearnCrypto';
import LogInForm from './components/LogInForm/Index';
import MarketTrend from './components/MarketTrend/MarketTrend';
import MarketUpdate from './components/MarketUpdate/MarketUpdate';
import Navbar from './components/Navbar/Navbar';
import StartAndBuild from './components/StartAndBuild/StartAndBuild';
import { useState } from 'react';

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <div className="App">
      <Navbar setShowModal={setShowLoginModal} />
      <StartAndBuild/>
      <LogInForm showModal={showLoginModal} setShowModal={setShowLoginModal} />
      <MarketTrend/>
      <Features/>
      <LearnAndExplore/>
      <MarketUpdate/>
      <GetStarted/>
      <LearnCrypto/>
      <Footer/>
    </div>
  );
}

export default App;
