import { Outlet, Link } from "react-router-dom";

import Logo from "./images/logo.png"

const Navbar = () => {
  return (
    <div >
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <ul>
                <li><Link to="/texnopark_site">Home</Link></li>
                <li><Link to="/texnopark_site/service">Xizmatlarimiz</Link></li>
                <li><Link to="/texnopark_site/courses">Kurslarimiz</Link></li>
            </ul>
        </div>
      <Outlet />
    </div>
  )
};

export default Navbar;