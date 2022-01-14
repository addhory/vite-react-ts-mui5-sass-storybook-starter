import { Button } from '@mui/material';
import React from 'react';
import Title from './components/Title/Title';
import MuIButton from './stories/Button/Button';
import styles from './styles/app.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <h1>Hello World</h1>
      <Title />
      <Button variant='contained'>My MUI Button</Button>
      <MuIButton variant='dashed'>dashed MUI</MuIButton>
    </div>
  );
}

export default App;
