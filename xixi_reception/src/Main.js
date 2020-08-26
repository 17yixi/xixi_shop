import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from "./App";
import Details from './components/details/Index'

function Main() {
    return (
        <Router>
            <Redirect to="/index/home" />
            <Route path="/index" component={App} />
            <Route path="/details" component={Details} />
        </Router>
    )

}

export default Main