import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduser from './redux/store';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
const store = createStore(reduser);
ReactDOM.render(
    <React.StrictMode>

        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>

    </React.StrictMode>,
    document.getElementById('container'));


serviceWorker.unregister();
