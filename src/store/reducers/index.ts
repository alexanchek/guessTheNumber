import {combineReducers} from 'redux';
import { numberReducer } from './numberReducer';

export const rootReducer = combineReducers({
    number: numberReducer
})

export type RootState = ReturnType<typeof rootReducer>
