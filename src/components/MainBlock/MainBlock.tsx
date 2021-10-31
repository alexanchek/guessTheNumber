import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { StylesDictionary } from '../../types/stylesDictionary';
import Button from '../Button';
import Input from '../Input';

const MainBlock: React.FC = () => {
    const {createNumber, setWin, setTrials, SetHelperMessage} = useActions();
    const {numberComputer, numberUser, win, trials, helperMessage} = useTypedSelector(state => state.number);

    const OnClickTry = () => {
        if (win) {
            return;
        }

        setTrials(numberComputer, numberUser);
        if (parseInt(numberComputer) === parseInt(numberUser)) {
            setWin(true);
        } else {
            setWin(false);

            if (parseInt(numberComputer) > parseInt(numberUser)) {
                SetHelperMessage('LESS');
            } else {
                SetHelperMessage('')
            }
        }
    }

    const onClickRefresh = () => {
        createNumber();

    }
    
    return (
        <div style={styles.container}>
            <div className="card" style={styles.bigSize}>
                <div className="card-body">
                    <div className="card-title" style={styles.title}>
                        <h2>Guess a number</h2>
                    </div>
                    computer guessed the number. Are you able to guess it?

                    <Input />
                    <Button text={`Let's try it!`} action={OnClickTry}/>
                    <Button text={'Please, refresh the number'} action={onClickRefresh}/>

                    {!win && trials > 0 ? <div> {helperMessage} You tried {trials} times</div>: null}
                    {win ? <div>Congratulations! You win! you tried {trials} times.</div> : null}
                </div>
            </div>
        </div>
    );
};

const styles:StylesDictionary = {
    container: {
        margin: 'auto'
    },
    bigSize: {
        width: '40rem',
        height: '40rem'
    },
}

export default MainBlock;