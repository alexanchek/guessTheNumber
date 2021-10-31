import { Dispatch } from "react"
import { ThunkAction } from "redux-thunk";
import {NumberAction, NumberActionTypes} from '../../types/number'
import { RootState } from "../reducers";

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

export const setTrials = (numberComputer: string, numberUser: string, win: boolean): ThunkAction<void, RootState, null, NumberAction> => {
    return async dispatch => {
        // we must check out if the game is finished or user doesnt write a number
        if (win || numberUser === '') return;

        // increase a trial by 1
        dispatch({type: NumberActionTypes.SET_TRIALS});

        // check out values and set "win state"
        if (parseInt(numberComputer) === parseInt(numberUser)) {
            dispatch(setWin(true));
        } else {
            dispatch(setWin(false));

            if (parseInt(numberComputer) > parseInt(numberUser)) {
                dispatch(SetHelperMessage('LESS'));
            } else {
                dispatch(SetHelperMessage(''));
            }
        }
    }
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