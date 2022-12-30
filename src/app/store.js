
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReduce = combineReducers({

})
const store = createStore(rootReduce, combineReducers(applyMiddleware(thunk)));


export default store;