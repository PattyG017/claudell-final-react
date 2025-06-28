import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const images = [
    '/multimedia/BannerA.jpg',
    '/multimedia/BannerB.jpg',
    '/multimedia/BannerC.jpg'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const featured = [
    {
      title: "Custom Chip Bag",
      description: "Potato chip bag party treat favors",
      image: "/multimedia/Custom Chip Bag.webp",
      price: "5.00"
    },
    {
      title: "Baby Shower Invitation",
      description: "Elephant Balloon Gender Reveal",
      image: "/multimedia/Elephant Gender Reveal Invitation.webp",
      price: "5.00"
    },
    {
      title: "Planner Stickers",
      description: "PRAY FOR for Erin Condren Planner",
      image: "/multimedia/Planner Stickers Pray For.webp",
      price: "2.50"
    },
    {
      title: "Cupcake Toppers",
      description: "Elephant Balloon Cupcake Topper & Wrapper",
      image: "/multimedia/Elephant Cupcake Wrapper.webp",
      price: "3.50"
    },
    {
      title: "Digital Paper Pack",
      description: "Wild 1 Rainbow Colors 12″x12″",
      image: "/multimedia/Wild 1.webp",
      price: "2.50"
    }
  ];

  const newProducts = [
    {
      title: "Mother's day Labels",
      description: "Love You Mom round labels",
      image: "/multimedia/I Love You Mom Labels.webp",
      price: "3.50"
    },
    {
      title: "Digital Paper Pack",
      description: "Building Colors 12″x12″",
      image: "/multimedia/Building Colors Girls.webp",
      price: "2.50"
    },
    {
      title: "Bear in the Magic Forest",
      description: "Baby Shower Welcome Tag",
      image: "/multimedia/Magic Forest Tag Welcome.webp",
      price: "3.50"
    },
    {
      title: "Digital Labels Pack (100)",
      description: "Dashed Frames Rainbow Colors Pack",
      image: "/multimedia/Labels Dashed Frame.webp",
      price: "2.50"
    },
    {
      title: "Baby Shower Invitation",
      description: "Sweet Baby Panda",
      image: "/multimedia/Panda Baby Shower Invitation.webp",
      price: "5.00"
    }
  ];

  const personalized = [
    {
      title: "Mother's Day Banner",
      description: "I Love You Mom Banner",
      image: "/multimedia/I Love You Mom Banner.webp",
      price: "3.50"
    },
    {
      title: "Christmas Feet Potato Can Wrapper",
      description: "Wrapper and Lid for Party Favors",
      image: "/multimedia/Christmas Feet.webp",
      price: "5.00"
    },
    {
      title: "Elephant Balloon Baby Shower",
      description: "Baby Shower Round Labels",
      image: "/multimedia/Elephant Thank You Labels.webp",
      price: "3.50"
    },
    {
      title: "Baby Shower Bear Banner",
      description: "Baby Shower Bear Pink in the Moon",
      image: "/multimedia/Bear Girl Baby Shower Banner.webp",
      price: "3.50"
    },
    {
      title: "Baby Shower Game Little Frog",
      description: "50 Bingo Baby Shower Cards",
      image: "/multimedia/Little Frog Blue Game Bingo.webp",
      price: "5.50"
    }
  ];

  return (
    <>
      <Navbar />

      <div style={{ width: '100%', overflow: 'hidden', maxHeight: '480px' }}>
        <img
          src={images[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '550px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>

      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>LET'S MAKE YOUR PARTY AMAZING!</h1>
          <p className={styles.subtitle}>
            Favor Boxes · Labels · Banners · Toppers · Stickers · Invitations · And More!
          </p>
        </div>
      </section>

      <section className={styles.products}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <div className={styles.cardGrid}>
            {featured.map((item, index) => (
              <Card
                key={`featured-${index}`}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className="container">
          <h2 className={styles.sectionTitle}>New Products</h2>
          <div className={styles.cardGrid}>
            {newProducts.map((item, index) => (
              <Card
                key={`new-${index}`}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Personalized Products</h2>
          <div className={styles.cardGrid}>
            {personalized.map((item, index) => (
              <Card
                key={`personalized-${index}`}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
