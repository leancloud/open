import React from 'react';
import Link from 'gatsby-link';
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
  <div className={styles.headerBackground}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1>
        <Link to="/" className={styles.headerLink}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
