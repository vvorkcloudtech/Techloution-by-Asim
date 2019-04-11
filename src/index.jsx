
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";


const store = createStore(reducer);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, document.getElementById("app"))
