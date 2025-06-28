import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <img
        src="/multimedia/Logo.png"
        alt="Claudell Logo"
        className={styles.logo}
      />
      <p className={styles.slogan}>“where small details make the difference”</p>
    </section>
  );
};

export default Banner;
