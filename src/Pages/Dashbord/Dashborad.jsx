import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import { MainTitle, RiskScoreCard, UnresolvedRisksCard, AssetCard, DomainCard } from '../../index';


const Dashboard = () => {
  const cards = [<RiskScoreCard />,<UnresolvedRisksCard />, <AssetCard />, <DomainCard />]

  // 

  return (
    <Container id='dashboard' fluid style={{ minHeight: '100vh' }}>
      <MainTitle title="Dashboard" style={{ margin: "0;" }} />
      <Container className='cards-wrapper'>
        <Row className='d-flex justify-content-center mt-5'>
          {
            cards.map(card => (
              <Col md={6} lg={6}>{card}</Col>
            ))
          }

        </Row>
      </Container>
    </Container>
  );
}

export default Dashboard;
