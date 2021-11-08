export interface NumberState {
    numberComputer: string,
    numberUser: string,
    win: boolean,
    trials: number,
    helperMessage: string | null
}

export enum NumberActionTypes {
    CREATE_NUMBER = "CREATE_NUMBER",
    SET_USERNUMBER = "SET_USERNUMBER",
    SET_WIN = "SET_WIN",
    SET_TRIALS = "SET_TRIALS",
    RESET_TRIALS = "RESET_TRIALS",
    SET_HELPER_MESSAGE = "SET_HELPER_MESSAGE",
}

interface CreateNumberAction {
    type: NumberActionTypes.CREATE_NUMBER,
    payload: string;
}

interface SetUserNumberAction {
    type: NumberActionTypes.SET_USERNUMBER,
    payload: string;
}

interface setWinAction {
    type: NumberActionTypes.SET_WIN,
    payload: boolean
}

interface setTrialsAction {
    type: NumberActionTypes.SET_TRIALS
}

interface resetTrialsAction {
    type: NumberActionTypes.RESET_TRIALS
}

interface setHelperMessageAction {
    type: NumberActionTypes.SET_HELPER_MESSAGE,
    payload: string
}


export type NumberAction = CreateNumberAction 
| SetUserNumberAction 
| setWinAction 
| setTrialsAction 
| resetTrialsAction
| setHelperMessageAction