import React from 'react';
import styles from './About.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <section className={styles.aboutSection}>
        <div className="container">
          <h1 className={styles.title}>About Claudell Design Studio</h1>
          <p className={styles.text}>
            Claudell Design Studio is a creative space dedicated to designing personalized digital files
            for all types of events. From baby showers to birthdays, weddings and more, we create printable
            decorations that are unique, beautiful, and meaningful.
          </p>
          <p className={styles.text}>
            With over 8 years of experience selling internationally, we bring quality, style, and love to every design.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
