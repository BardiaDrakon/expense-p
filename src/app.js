import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from "./selectors/expenses";


const store=configureStore();


const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
