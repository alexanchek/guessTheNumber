import { NumberAction, NumberActionTypes, NumberState } from "../../types/number"

/*

CREATE_NUMBER - create a new number from 1 to 10, reset trials
SET_USERNUMBER - set the number of the player
SET_WIN - if the game is finished, SET_WIN stops the game and doesn't allow to send new numbers
SET_TRIALS - increase the amount of trials by 1
RESET_TRIALS - reset the amount of trials to 0.
SET_HELPER_MESSAGE - whatever a player number it shows that a number must be less or greater

*/

const initialState: NumberState = {
    numberComputer: '0',
    numberUser: '0',
    win: false,
    trials: 0,
    helperMessage: null
}

export const numberReducer = (state=initialState, action: NumberAction): NumberState => {
    switch(action.type) {
        case NumberActionTypes.CREATE_NUMBER:
            return {...state, numberComputer: action.payload}
        case NumberActionTypes.SET_USERNUMBER:
            return {...state, numberUser: action.payload}
        case NumberActionTypes.SET_WIN:
            return {...state, win: action.payload}
        case NumberActionTypes.SET_TRIALS:
            return {...state, trials: state.trials + 1}
        case NumberActionTypes.RESET_TRIALS:
            return {...state, trials: 0}
        case NumberActionTypes.SET_HELPER_MESSAGE:
            return {...state, helperMessage: action.payload}
        default:
            return state
    }
}