import { NumberAction, NumberActionTypes, NumberState } from "../../types/number"

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