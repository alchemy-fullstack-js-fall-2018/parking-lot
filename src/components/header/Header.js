import React from 'react';
import styles from './Header.css';

export default function Header() {
  return (
    <div id={styles.header}>
      <h1>Herb's Parking Lot</h1>
      <nav>
        <a>Search Cars</a>
        <a>Search Lots</a>
        <a>Create Cars</a>
      </nav>
    </div>
  );
}
