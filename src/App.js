import React from 'react';
import './index.css';
import Layout from './components/Layout/Layout';
import Card from './components/UI/Card/Card';
import Input from './components/UI/Input/Input';

const App = () => {

  const inputHandler = (e) => {

  };
  /* 
    list item => hover border-top grayish
    list item => border-top : #e6e6e6
  */

  return (
    <Layout>
      <Card>
        <Input
          inputHandler={inputHandler}
        />
      </Card>
    </Layout>
  );
}

export default App;
