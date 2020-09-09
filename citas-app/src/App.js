import React, {Fragment} from 'react';
import './App.css';
import Cita from "./components/Cita";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
    return (
        <Router>
            <Fragment>
                <div className="App">
                    <main className="">
                        <Switch>
                            <Route exact path="/" component={Cita}/>
                        </Switch>
                    </main>
                </div>
            </Fragment>
        </Router>);
}

export default App;
