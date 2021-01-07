import React from 'react';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header>
        <h1 className={styles.title}>todos</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
