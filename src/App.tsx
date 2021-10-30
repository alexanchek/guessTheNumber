import React from 'react';
import MainBlock from './components/MainBlock/MainBlock';
import { StylesDictionary } from './types/stylesDictionary';
import { useEffect } from 'react';
import { useActions } from './hooks/useActions';


export const App: React.FC = () => {
  const {createNumber} = useActions();

  useEffect(() => {
    createNumber();
  }, [])

  return (
    <div style={styles.center}>
      <MainBlock/>
    </div>
  );
}


const styles: StylesDictionary = {
  center: {
    background: '#999999',
    display:'flex', 
    position: 'absolute', 
    top:0, 
    bottom:0, 
    right:0,
    left:0,
  }
}

export default App;
