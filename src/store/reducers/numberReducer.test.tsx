import { NumberActionTypes, NumberState } from '../../types/number'
import { numberReducer } from './numberReducer';
import {describe, expect } from '@jest/globals'

const state: NumberState = {
    numberComputer: '',
    numberUser: '',
    win: false,
    trials: 0,
    helperMessage: 'welcome'
}

function getRandom() {
    return String(Math.floor(Math.random() * 10 + 1));
}

const cases = ['The number must be greater!', 'The number must be greater!', 'Please, input a number from 1 to 10!']

describe('should pass all tests of number reducer', () => {
    it("Should check numbers", () => {
        const randomNumber = getRandom();
    
        let newState = numberReducer(state, {
            type: NumberActionTypes.CREATE_NUMBER,
            payload: randomNumber    
        });
    
        expect(newState.numberComputer).toEqual(randomNumber);
    });
    
    it("Should set user number according to data", () => {
        const randomNumber = getRandom();
    
        let newState = numberReducer(state, {
            type: NumberActionTypes.SET_USERNUMBER,
            payload: randomNumber
        });
    
        expect(newState.numberUser).toEqual(randomNumber);
    });
    
    it("Should set win", () => {
        let newState = numberReducer(state, {
            type: NumberActionTypes.SET_WIN,
            payload: true
        });
    
        expect(newState.win).toBeTruthy();  
    });
    
    
    it("Should raise trials", () => {
        const randomRepeats = parseInt(getRandom());
    
        let newState: NumberState = state;
    
        for (let i = 0; i < randomRepeats; i++) {
            newState = numberReducer(newState, {
                type: NumberActionTypes.SET_TRIALS
            });
        }
    
        expect(newState.trials).toEqual(randomRepeats);
    });
    
    it('Should reset trials', () => {
        const randomTrials = parseInt(getRandom());

        let newState: NumberState = state;

        for (let i = 0; i < randomTrials; i++) {
            newState = numberReducer(newState, {
                type: NumberActionTypes.SET_TRIALS
            });
        };

        newState = numberReducer(newState, {
            type: NumberActionTypes.RESET_TRIALS
        });

        expect(newState.trials).toEqual(0);
    });

    it('should set helper messages', () => {
        let newState: NumberState = state;

        cases.map((element) => {
            newState = numberReducer(newState, {
                type: NumberActionTypes.SET_HELPER_MESSAGE,
                payload: element
            });

            expect(newState.helperMessage).toBe(element);
        })
    })
})