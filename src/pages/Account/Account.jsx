import React from 'react';
import styles from './Account.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const Account = () => {
  return (
    <>
      <Navbar />
      <section className={styles.accountSection}>
        <div className="container">
          <h1 className={styles.title}>My Account</h1>
          <p className={styles.text}>
            Access your past orders, manage your downloads, and update your preferences here.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Account;
