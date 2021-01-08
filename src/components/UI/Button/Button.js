import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, selected = false }) => {

  return (
    <button
      className={`${styles.button} ${selected && styles.selected}`}
    >
      {children}
    </button>
  );
};

export default Button;