import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Search, Connections, Warning, Globe, Layers, Dashboard, SideBar } from './index';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  return (
    <BrowserRouter>
      <Container fluid>
        <Row >
          <Col md={1} sm={1} lg={1} className="sidebar-col">
            <SideBar />
          </Col>
          <Col md={11} sm={11} lg={11} className="dashboard-col">
            <Routes>
              <Route path='/' element={<Navigate to="/dashboard" />} />
              <Route path='/Search' element={<Search />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/Warning' element={<Warning />} />
              <Route path='Globe' element={<Globe />} />
              <Route path='/Connections' element={<Connections />} />
              <Route path='/Layers' element={<Layers />} />

            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App;