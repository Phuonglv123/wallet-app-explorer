import {combineReducers} from 'redux';

import {authentication} from './Authenticate';
import {registration} from './registerReducer';
import {users, changePassword} from './userReducer';
import {alert} from './alertReducer';
import {accountBalance} from './accountBalanceReducer'

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    accountBalance,
    changePassword,
});

export default rootReducer;
