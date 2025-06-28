import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description, image, price }) => {
    return (
    <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>${price}</span>
        <button className={styles.button}>Buy Now</button>
        </div>
    </div>
    );
};

export default Card;
