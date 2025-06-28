import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img
          src={process.env.PUBLIC_URL + "/multimedia/Logo.png"}
          alt="Claudell Design Studio Logo"
          className={styles.logo}
        />
        <div>
          <h1 className={styles.title}>Claudell Design Studio</h1>
          <p className={styles.subtitle}>Custom Party Printables</p>
        </div>
      </div>

      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>

        <li className={styles.dropdown}>
          <span>Products ▾</span>
          <ul className={styles.dropdownMenu}>
            <li><Link to="/products/invitations">Invitations</Link></li>
            <li><Link to="/products/labels">Labels</Link></li>
            <li><Link to="/products/banners">Banners</Link></li>
          </ul>
        </li>

        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/account">My Account</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
