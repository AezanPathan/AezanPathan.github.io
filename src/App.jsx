import { useState } from 'react'
import './index.css';
import Hero from './components/Hero.jsx'
import { ContributionGraph } from "./components/ContributionGraph";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/pages/About.jsx';
import Showcase from './components/pages/Showcase.jsx';
import Connect from './components/pages/Connect.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
    {/* <Hero/>
      <ContributionGraph /> */}
    </>
  
  )
}

export default App
