import { NavLink } from 'react-router-dom';

const NavItems = () => (
  <ul className="nav-items">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="calculator">Calulator</NavLink></li>
    <li><NavLink to="quotes">Quotes</NavLink></li>
  </ul>
);

export default NavItems;
