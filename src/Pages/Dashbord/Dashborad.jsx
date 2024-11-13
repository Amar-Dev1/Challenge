import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import { MainTitle, RiskScoreCard, UnresolvedRisksCard, AssetCard, DomainCard } from '../../index';
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Dashboard = () => {
  const cards = [<RiskScoreCard />, <UnresolvedRisksCard />, <AssetCard />, <DomainCard />]

  // 

  return (
    <Container id='dashboard' fluid style={{ minHeight: '100vh' }}>
      <Container>
        <Row>
          <Col sm={6} md={6}
            lg={6} className='main-title-col'>
            <MainTitle title="Dashboard" />
          </Col>
          <Col sm={6} md={6}
            lg={6}>
            <GlobalIcons />
          </Col>
        </Row>
      </Container>
      <Container className='cards-wrapper'>
        <Row className="justify-content-center mt-5">
          {
            cards.map((card, index) => (
              <Col key={index} md={6} lg={6} className="d-flex justify-content-center mb-4">
                {card}
              </Col>
            ))
          }
        </Row>

      </Container>
    </Container>
  );
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

export default Dashboard;
