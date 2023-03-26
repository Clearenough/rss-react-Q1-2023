import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : 'white',
              fontWeight: isActive ? '700' : '400',
            };
          }}
          role="link"
        >
          Welcome Page
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : 'white',
              fontWeight: isActive ? '700' : '400',
            };
          }}
          role="link"
        >
          About Us
        </NavLink>
        <NavLink
          to="/form"
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : 'white',
              fontWeight: isActive ? '700' : '400',
            };
          }}
          role="link"
        >
          Form
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
