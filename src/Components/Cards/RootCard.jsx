import '../../App.css';
const RootCard = ({ title, children ,customStyles, link }) => {
  return (
    <div className='card' style={{  ...customStyles }}>
      <span className='title'>{title}</span>
      {link && <a href="#" className="more">{link}</a>} 
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default RootCard;