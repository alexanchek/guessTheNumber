import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as NumberActionCreators from '../store/actions/number'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(NumberActionCreators, dispatch);
}