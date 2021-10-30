import { Dispatch } from "react"
import {NumberAction, NumberActionTypes} from '../../types/number'

export const createNumber = () => {
    return (dispatch: Dispatch<NumberAction>) => {
        const random = Math.ceil(Math.random()*10);
        dispatch({type: NumberActionTypes.CREATE_NUMBER, payload: random})
        dispatch({type: NumberActionTypes.SET_WIN, payload: false})
        dispatch({type: NumberActionTypes.RESET_TRIALS})
    }
}

export const setUserNumber = (userNumber: number) => {
    return (dispatch: Dispatch<NumberAction>) => {
        dispatch({type: NumberActionTypes.SET_USERNUMBER, payload: userNumber})
    };
}

export const setWin = (condition: boolean) => {
    return (dispatch: Dispatch<NumberAction>) => {
        dispatch({type: NumberActionTypes.SET_WIN, payload: condition})
    };
}

export const setTrials = () => {
    return (dispatch: Dispatch<NumberAction>) => {
        dispatch({type: NumberActionTypes.SET_TRIALS})
    };
}