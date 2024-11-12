import '../../Pages/Dashbord/Dashboard.css';
import RootCard from './RootCard';
const AssetCard = () => {
    return (
        <RootCard customStyles={{ padding: '0' }} title=""
            children={
                <div className='asset-content'>
                    <a href="#" className="asset-link">View all assets {'->'}</a>
                    <div className="overlay"></div>
                    <div className="assets">
                        <label>Assets</label>
                        <h3>88</h3>
                    </div>
                    <div className="domains">
                        <label>Domains</label>
                        <h3>104</h3>
                    </div>
                    <div className="ips">
                        <label>IPs</label>
                        <h3>263</h3>
                    </div>
                </div>
            }
        />
    )
}

export default AssetCard;