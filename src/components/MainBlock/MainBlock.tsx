import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { StylesDictionary } from '../../types/stylesDictionary';
import Button from '../Button';
import Input from '../Input';

const MainBlock: React.FC = () => {
    const {createNumber, setWin, setTrials} = useActions();
    const {numberComputer, numberUser, win, trials} = useTypedSelector(state => state.number);

    const OnClickTry = () => {
        setTrials();
        if (numberComputer === numberUser) {
            setWin(true);
        } else {
            setWin(false);
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

                    <Input/>
                    <Button text={'Попробовать'} action={OnClickTry}/>
                    <Button text={'Начать с начала'} action={onClickRefresh}/>

                    {!win && trials > 0 ? <div>Нужно угадывать ;) Пока попыток: {trials}</div>: null}
                    {win ? <div>Вы победили, количество попыток: {trials}</div> : null}
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