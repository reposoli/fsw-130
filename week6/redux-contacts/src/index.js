import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {Footer} from './Footer';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <App />
    <Footer />
</Provider>, document.getElementById('root'));