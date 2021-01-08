import React from 'react';
import Button from '../Button/Button';
import styles from './Footer.module.css';

const Footer = ({ todos }) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.pColor}><span>{todos.length}</span> items left</p>
      <div>
        <Button selected>All</Button>
        <Button>Active</Button>
        <Button>Completed</Button>
      </div>
      <Button>Clear completed</Button>
    </footer>
  );
};

export default Footer;