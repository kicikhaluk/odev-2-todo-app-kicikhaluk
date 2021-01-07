import React from 'react';
import styles from './Input.module.css';
import { ChevronDown } from '../../icons';
const Input = ({ inputHandler }) => {
  return (
    <div className={styles.formElement}>
      <ChevronDown className={styles.alignSelf} stroke="#e6e6e6" />
      <input
        type="text"
        onChange={inputHandler}
      />
    </div>
  );
};

export default Input;