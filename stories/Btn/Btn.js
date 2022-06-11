import React from 'react';
import styles from './Btn.module.css';

function Btn(props) {
  const { variant, children, ...rest } = props;
  console.log(variant);
  return (
    <button className={[styles.btn, styles[variant]].join(' ')} {...rest}>
      {children}
    </button>
  );
}

export default Btn;
