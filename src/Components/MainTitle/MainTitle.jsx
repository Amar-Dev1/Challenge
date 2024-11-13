import "../../App.css";
const MainTitle = (props) => {
    return (
        <h2 className="main-title" style={props.style}>{props.title}</h2>
        
    )
}

export default MainTitle;