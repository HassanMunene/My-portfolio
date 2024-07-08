import { useState } from 'react'
import './App.scss'
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
