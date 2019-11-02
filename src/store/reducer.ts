import { combineReducers } from 'redux';
import * as reducers from '@pages/reducer';

const rootReducer = combineReducers({
   ...reducers
})


export default rootReducer;