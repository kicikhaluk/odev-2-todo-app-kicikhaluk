import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, selected = false, ...props }) => {

  return (
    <button
      className={`${styles.button} ${selected && styles.selected}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;