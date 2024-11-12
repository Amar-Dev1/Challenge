import { Container } from "react-bootstrap";
import "../../App.css";
const MainTitle = (props) => {
    return (
        <Container><h2 className="main-title">{props.title}</h2></Container>
        
    )
}

export default MainTitle;