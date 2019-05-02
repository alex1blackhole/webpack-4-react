import React, {Component} from 'react';
import {Route, Switch, } from 'react-router-dom';
import News from "./news/News";
import Request from "./request/Request";

export default class Router extends Component {

    render() {

        return (
            <Switch>
                <Route exact path='/request' component={Request} />
                <Route exact path='/news' component={News} />
            </Switch>
        )
    }
}
