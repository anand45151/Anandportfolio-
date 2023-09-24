import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import './App.scss'

function App() {
  return (
    <>
    <Sidebar />
      {/* <Routes> */}
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
         */}
        {/* </Route> */}
      {/* </Routes> */}
    </>
  )
}

export default App
