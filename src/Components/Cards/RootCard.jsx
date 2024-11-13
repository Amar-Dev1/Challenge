import '../../App.css';
const RootCard = ({ cardClass,title, img,imgClass, children, customStyles, link }) => {
  return (
    <div className={`${cardClass} || card`} style={{ ...customStyles }}>
      <img src={img} alt="" className={imgClass}/>
      <span className='title'>{title}</span>
      {link && <a href="#" className="more">{link}</a>}
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default RootCard;