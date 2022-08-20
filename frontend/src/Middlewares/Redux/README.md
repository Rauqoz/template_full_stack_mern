# Instructions for this Template of Redux

## Installation and Use

Redux is implemented in this template, it is divided as follows:

>If you want to remove the use of redux, you must remove the following lines of code

In index.js
```javascript
    // Example start --- you can remove from this line
    import { Provider } from 'react-redux';
    import store from './Middlewares/Redux/store';
    // Example end --- to this line if you dont need the template

	{/* Store for Redux */}
    <Provider store={store}>
        *Here your App*
    </Provider>
    {/* Delete the provider if you dont need redux */}
```

## Folder Actions

In this folder you can find the use of redaxios (already implemented) the states and an example of data handling and asynchronous requests

## Folder Reducers

In this folder you will find the reducers related to saving data in addition to the initial state 

>For each reducer, 1 file is recommended

## File Store.js

In this file is "redux-thunk" implemented to be able to make asynchronous requests with "redaxios"

There is also the "createStore" method that generates the redux store by combining the necessary amount of reducers

```javascript
const all_reducers = combineReducers({ Template_reducer_ });

const store = createStore(all_reducers, applyMiddleware(thunk));
```

>If you need see the official doc for redux:

[Documentation](https://es.redux.js.org/docs/basico/)