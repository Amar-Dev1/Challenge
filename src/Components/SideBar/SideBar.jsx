import './SideBar.css';
import { Link } from 'react-router-dom';

// import icons
import { MdOutlineLayers, MdHome, MdOutlineWebhook } from "react-icons/md";
import { IoWarningOutline, IoGlobeOutline, IoSearch } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { useState } from 'react';

const SideBar = () => {

    const [activeLink, setActiveLink] = useState('');

    const handleClick = (link) => {
        setActiveLink(link);
    }

    const homeStyle = {
        "marginBottom": "20px",
        "color": "red",
        "backgroundColor": "rgba(0,0,0,0.5)"
    }

    const links = [
        { name: "home", icon: <MdHome />, route: "/home", style: { homeStyle } }, { name: "search", icon: <IoSearch />, route: "/search" },
        {
            name: "dashboard",
            icon: <AiOutlineProject style={{ transform: "rotate(180deg)" }} />,
            route: "/dashboard",
        },
        { name: "warning", icon: <IoWarningOutline />, route: "/warning" },
        { name: "connected", icon: <MdOutlineWebhook />, route: "/connections" },
        { name: "global", icon: <IoGlobeOutline />, route: "/globe" },
        { name: "layers", icon: <MdOutlineLayers />, route: "/layers" }
    ];


    return (
        // using normal div ( i think it`s best solution )
        <div id='sidebar'>
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    route={link.route}
                    icon={link.icon}
                    onClick={() => handleClick(link.name)}
                    className={activeLink === link.name ? "active" : "link"}
                />
            ))}
        </div>

    )
}

// this is the sidebar link component
export const NavLink = (props) => {
    return (
        <Link to={props.route} className={props.className} style={props.style} onClick={props.onClick}>{props.icon}</Link>
    )
}

export default SideBar;