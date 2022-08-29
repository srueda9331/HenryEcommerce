import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.page_404}>
      <div className={styles.four_zero_four_bg}></div>

      <div className={styles.contant_box_404}>
        <Button className={styles.btn} as={Link} to="/">
          Volver
        </Button>
      </div>
    </div>
  );
}
