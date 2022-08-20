import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
// Example start --- you can remove from this line
import Template_reducer_ from './Reducers/Template.reducers';
// Example end --- to this line if you dont need the template
const all_reducers = combineReducers({ Template_reducer_ });

const store = createStore(all_reducers, applyMiddleware(thunk));

export default store;
