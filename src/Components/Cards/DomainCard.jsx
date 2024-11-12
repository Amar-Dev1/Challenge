import '../../Pages/Dashbord/Dashboard.css';
import RootCard from './RootCard';
import globe from '../../assets/globe.png';
const DomainCard = () => {
  return (
    <RootCard
      title="New Domains"
      link="View all domains"
      children={

        <div className='domain-content'>
          <div>
            <div className='domain-img'>
              <img src={globe} alt="" /></div>
            <div className="domain-des">
              <p>access.example.io</p>
              <span>Services:80/http,443/https</span>
              <small>Today</small>
              </div>
          </div>
          <div>
            <div className='domain-img'>
              <img src={globe} alt="" /></div>
            <div className="domain-des">
              <p>account.example.io</p>
              <span>Services:80/http</span>
              <small>May 23</small></div>
          </div>
          <div>
            <div className='domain-img'>
              <img src={globe} alt="" /></div>
            <div className="domain-des">
              <p>dev.example.io</p>
              <span>443/https</span>
              <small>May 11</small></div>
          </div>
          <div>
            <div className='domain-img'><img src={globe} alt="" /></div>
            <div className="domain-des">
              <p>www.example.io</p>
              <span>Services:80/http,443/https,8443/http</span>
              <small>May 11</small></div>
          </div>
          <div>
            <div className='domain-img'>
              <img src={globe} alt="" />
            </div>
            <div className="domain-des">
              <p>test.example.io</p>
              <span>8443/http</span>
              <small>8 Jan</small></div>
          </div>
        </div>
      }
    />
  )
}

export default DomainCard
