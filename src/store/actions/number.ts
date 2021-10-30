import { Dispatch } from "react"
import {NumberAction, NumberActionTypes} from '../../types/number'

export const createNumber = () => {
    return (dispatch: Dispatch<NumberAction>) => {
        const random = String(Math.ceil(Math.random()*10));
        dispatch({type: NumberActionTypes.CREATE_NUMBER, payload: random})
        dispatch({type: NumberActionTypes.SET_WIN, payload: false})
        dispatch({type: NumberActionTypes.RESET_TRIALS});
        dispatch({type: NumberActionTypes.SET_USERNUMBER, payload: ''});
    }
}

export const setUserNumber = (userNumber: string) => {
    return (dispatch: Dispatch<NumberAction>) => {
        dispatch({type: NumberActionTypes.SET_USERNUMBER, payload: userNumber})
    };
}

export const setWin = (condition: boolean) => {
    return (dispatch: Dispatch<NumberAction>) => {
        dispatch({type: NumberActionTypes.SET_WIN, payload: condition});
    };
}

export const setTrials = () => {
    return (dispatch: Dispatch<NumberAction>) => {
        dispatch({type: NumberActionTypes.SET_TRIALS})
    };
}

export const SetHelperMessage = (parameter: string) => {
    if (parameter === "LESS") {
        return (dispatch: Dispatch<NumberAction>) => {
            dispatch({type: NumberActionTypes.SET_HELPER_MESSAGE, payload: 'The number must be greater!'})
        }
    } else {
        return (dispatch: Dispatch<NumberAction>) => {
            dispatch({type: NumberActionTypes.SET_HELPER_MESSAGE, payload: 'The number must be less!'})
        }
    }
}