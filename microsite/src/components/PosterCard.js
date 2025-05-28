// src/components/PosterCard.js

import React from 'react';
import styles from './PosterCard.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const PosterCard = () => {
  return (
    <a
      href={useBaseUrl('/files/poster.pdf')}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink}
    >
      <div className={styles.posterCard}>
        <img
          src={useBaseUrl('/img/PosterPI.png')}
          alt="Poster preview"
          className={styles.posterImage}
        />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>View Our Project Poster</h3>
          <p className={styles.cardText}>Click to open PDF in a new tab</p>
        </div>
      </div>
    </a>
  );
};

export default PosterCard;
