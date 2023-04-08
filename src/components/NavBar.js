import { Outlet } from 'react-router-dom';
import NavItem from './NavItems';

const NavBar = () => (
  <>
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <NavItem />
    </nav>
    <Outlet />
  </>
);

export default NavBar;
