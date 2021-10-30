import React from 'react';
import { StylesDictionary } from '../types/stylesDictionary';

interface ButtonProps {
    text: string,
    action: () => void
}

const Button: React.FC<ButtonProps> = ({text, action}) => {
    return (
        <div style={styles.btn_pd2}>
            <button type="button" className="btn btn-primary" onClick={action}>{text}</button>
        </div>
    );
};

const styles: StylesDictionary = {
    btn_pd2: {
        paddingTop: '2rem'
    }
}

export default Button;