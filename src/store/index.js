import {createStore} from 'redux';

import rootReducer from './modules/rootReducer';

/*const enhancer = process.env.NODE_ENV === 'development'
? console.tron.createEnhacer()
: null;*/

//const store = createStore(rootReducer, enhancer);
const store = createStore(rootReducer);

export default store;

