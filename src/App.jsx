import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, SideBar } from './index';
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Container } from 'react-bootstrap';

function App() {

  return (
    <BrowserRouter>
      <GlobalIcons />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div style={{ flex: 1 }}> {/* This allows the main content to take the remaining space */}
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

const GlobalIcons = () => {
  return (
    <Container>
      <div className="global-icons">
        <div><AiOutlineQuestionCircle className='icon' /></div>
        <div><IoSettingsOutline className='icon' /></div>
        <div><FaRegUser className='icon' /></div>
      </div>
    </Container>

  )
}

export default App;