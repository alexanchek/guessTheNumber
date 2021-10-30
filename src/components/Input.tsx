import React from 'react';
import { useActions } from '../hooks/useActions';
import { StylesDictionary } from '../types/stylesDictionary';

const Input: React.FC = () => {
    const {setUserNumber, setTrials } = useActions();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserNumber(parseInt(e.target.value));
    }

    const OnKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setTrials();
        }
    }

    return (
        <div style={styles.btn_pd2}>
            <input className="form-control" type="text" placeholder="Your turn, sir!" onChange={onChange} onKeyPress={OnKeyPressHandler}></input>
        </div>
    );
};

const styles: StylesDictionary = {
    btn_pd2: {
        paddingTop: '2rem'
    }
}

export default Input;