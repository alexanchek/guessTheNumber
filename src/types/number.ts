export interface NumberState {
    numberComputer: number,
    numberUser: number,
    win: boolean,
    trials: number
}

export enum NumberActionTypes {
    CREATE_NUMBER = "CREATE_NUMBER",
    SET_USERNUMBER = "SET_USERNUMBER",
    SET_WIN = "SET_WIN",
    SET_TRIALS = "SET_TRIALS",
    RESET_TRIALS = "RESET_TRIALS"
}

interface CreateNumberAction {
    type: NumberActionTypes.CREATE_NUMBER,
    payload: number;
}

interface SetUserNumberAction {
    type: NumberActionTypes.SET_USERNUMBER,
    payload: number;
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


export type NumberAction = CreateNumberAction | SetUserNumberAction | setWinAction | setTrialsAction | resetTrialsAction
