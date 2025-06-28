import React from 'react';
import styles from './Blog.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const Blog = () => {
  return (
    <>
      <Navbar />
      <section className={styles.blogSection}>
           <div className="container">
          <h1 className={styles.title}>How to Celebrate with Printables</h1>
          <p className={styles.text}>
            Discover creative ways to transform your events using digital files — easy, beautiful, and made just for you!
          </p>
          <p className={styles.text}>
            From invitations and banners to cupcake toppers and labels, printable party decor allows you to personalize every detail while staying on budget.
          </p>
         
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
