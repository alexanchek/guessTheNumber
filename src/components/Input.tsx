import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { StylesDictionary } from '../types/stylesDictionary';

const Input: React.FC = () => {
    const { setUserNumber, setTrials } = useActions();
    const { numberUser, numberComputer, win } = useTypedSelector(state => state.number);
    const [ value, setValue ] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setUserNumber(e.target.value);
    }
    
    const OnKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (win) return;
            setUserNumber(value);

            setTrials(numberComputer, numberUser);

        }
    }

    return (
        <div style={styles.btn_pd2}>
            <form id="form-control">
            <input className="form-control" type="number" placeholder="Your turn, sir!" value={numberUser} onChange={onChange} onKeyPress={OnKeyPressHandler}></input>
            </form>
        </div>
    );
};

const styles: StylesDictionary = {
    btn_pd2: {
        paddingTop: '2rem'
    }
}

export default Input;