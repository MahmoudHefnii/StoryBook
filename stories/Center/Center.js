import React from 'react';
import styles from './Center.module.css';
function Center(props) {
  const { children } = props;
  return <div className={styles.center}>{children}</div>;
}

export default Center;
