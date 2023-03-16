import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? 'red' : 'white',
              fontWeight: isActive ? '700' : '400',
            };
          }}
        >
          Welcome Page
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? 'red' : 'white',
              fontWeight: isActive ? '700' : '400',
            };
          }}
        >
          About Us
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
