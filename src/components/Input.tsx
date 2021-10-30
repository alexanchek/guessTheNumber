import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { StylesDictionary } from '../types/stylesDictionary';

const Input: React.FC = () => {
    const { setUserNumber, setTrials } = useActions();
    const { numberUser } = useTypedSelector(state => state.number);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.target.value) < 1) {
            return;
        } 

        setUserNumber(parseInt(e.target.value));
    }

    const OnKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setTrials();
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