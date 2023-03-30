import { Outlet } from 'react-router-dom';
import NavItem from './NavItems';

const NavBar = () => (
  <nav className="navbar">
    <div className="nav-container">
      <h1>Math Magicians</h1>
      <NavItem />
    </div>
    <Outlet />
  </nav>
);

export default NavBar;
