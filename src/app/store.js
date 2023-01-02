
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduceBooking from 'feather/booking/redux/reduceBooking'
import reduceLogin from 'feather/login/redux/reduceLogin';
import reduceAdmin from 'feather/admin/redux/reduceAdmin'

const rootReduce = combineReducers({
    booking: reduceBooking,
    user: reduceLogin,
    admin: reduceAdmin,
})
const store = createStore(rootReduce, composeWithDevTools(applyMiddleware(thunk)));


export default store;