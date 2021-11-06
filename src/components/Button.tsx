import React from 'react';
import { StylesDictionary } from '../types/stylesDictionary';

interface ButtonProps {
    text: string,
    testLabel: string,
    action: () => void
}

const Button: React.FC<ButtonProps> = ({text, testLabel, action}) => {
    return (
        <div style={styles.btn_pd2}>
            <button type="button" data-cy={testLabel} className="btn btn-primary" onClick={action}>{text}</button>
        </div>
    );
};

const styles: StylesDictionary = {
    btn_pd2: {
        paddingTop: '2rem'
    }
}

export default Button;