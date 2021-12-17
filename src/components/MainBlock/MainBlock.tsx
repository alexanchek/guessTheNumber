import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { StylesDictionary } from '../../types/stylesDictionary';
import Button from '../Button';
import Input from '../Input';

const MainBlock: React.FC = () => {
  const { createNumber, setTrials } = useActions();
  const { numberComputer, numberUser, win, trials, helperMessage } = useTypedSelector(
    (state) => state.number
  );

  const OnClickTry = () => {
    setTrials(numberComputer, numberUser, win);
  };

  const onClickRefresh = () => {
    createNumber();
  };

  return (
    <div style={styles.container}>
      <div className='card' style={styles.bigSize}>
        <div className='card-body'>
          <div className='card-title' style={styles.title}>
            <h2>Guess a number</h2>
          </div>
          computer guessed the number from 1 to 10. Are you able to guess it? Created by Alex :)
          <Input />
          <Button text={`Let's try it!`} action={OnClickTry} testLabel={'try-it'} />
          <Button
            text={'Please, refresh the number'}
            action={onClickRefresh}
            testLabel={'refresh'}
          />
          {!win ? <div>{helperMessage}</div> : null}
          {!win && trials > 0 ? (
            <div>
              {' '}
              You tried <b>{trials}</b> times.
            </div>
          ) : null}
          {win ? (
            <div>
              <strong>Congratulations! You win! you tried {trials} times.</strong>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const styles: StylesDictionary = {
  container: {
    margin: 'auto',
    padding: '0 20px',
  },
  bigSize: {
    width: '100%',
    height: '40rem',
  },
};

export default MainBlock;
