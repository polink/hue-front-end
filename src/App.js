import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import LightInterface from './components/lightInterface';
import NewUser from './components/newUser';
import Login from './components/login';

export default class App extends Component {
    render() {
        return (
            <main>
                <BrowserRouter>
                    <h1>Hue Out There?</h1>
                    <Route exact path="./components/lightInterface" component={LightInterfaceightInterface}/>
                    <Route exact path="/components/newUser" component={NewUser}/>
                    <Route exact path="/" component={Login}/>
                </BrowserRouter>
            </main>
        );
    }
}

