import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaPinterest, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaPinterest /></a>
        <a href="mailto:info@claudelldesignstudio.com"><FaEnvelope /></a>
      </div>
      <div className={styles.links}>
        <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a> · <a href="#">Contact Us</a>
      </div>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Claudell Design Studio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
