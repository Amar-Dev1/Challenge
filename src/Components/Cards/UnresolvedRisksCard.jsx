import '../../Pages/Dashbord/Dashboard.css';

import {CgDanger } from "react-icons/cg";
import RootCard from './RootCard';
import { riskData } from './RiskScoreCard';
const UnresolvedRisksCard = () => {
    return (
        <RootCard
            title="Unresolved Risks"
            link="View all risks"
            children={
                <div className='unresolved-content'>
                    <div className="risk01">
                        <div className="icon-wrapper"><CgDanger className='risk-icon' style={{ color: riskData.datasets[0].backgroundColor[0] }} /></div>
                        <div className="des-wrapper">
                            <p>VNC daemon doesn’t enforce Security Type</p>
                            <span>On www.example.io</span>
                            <small>Open for 88 days</small>

                        </div>
                    </div>
                    <div className="risk02">
                        <div className="icon-wrapper"><CgDanger className='risk-icon' style={{ color: riskData.datasets[0].backgroundColor[1] }} /></div>
                        <div className="des-wrapper">
                            <p>Jira - [CvE-2019-8451] Unauthenticated Server-side request</p>
                            <span>On www.example.io</span>
                            <small>Open for 45 days</small>
                        </div>
                    </div>
                    <div className="risk03">
                        <div className="icon-wrapper"><CgDanger className='risk-icon' style={{ color: riskData.datasets[0].backgroundColor[0] }} /></div>
                        <div className="des-wrapper">
                            <p>VNC daemon doesn’t enforce Security Type</p>
                            <span>On www.example.io</span>
                            <small>Open for 16 days</small>
                        </div>
                    </div>
                    <div className="risk04">
                        <div className="icon-wrapper"><CgDanger className='risk-icon' style={{ color: riskData.datasets[0].backgroundColor[2] }} /></div>
                        <div className="des-wrapper">
                            <p>Exposed Elasticsearch Vulnerability in Elastic Stack</p>
                            <span>On 18.192.0.120</span>
                            <small>Open for 16 days</small>
                        </div>
                    </div>
                    <div className="risk05">
                        <div className="icon-wrapper"><CgDanger className='risk-icon' style={{ color: riskData.datasets[0].backgroundColor[2] }} /></div>
                        <div className="des-wrapper">
                            <p>IIS Tilde Enumeration</p>
                            <span>On careers.example.com</span>
                            <small>Open for 8 days</small>
                        </div>
                    </div>
                </div>
            }
        />

    )
}

export default UnresolvedRisksCard;