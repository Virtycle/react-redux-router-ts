import React, { Suspense, lazy } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import routerMap from "./router";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                {/* react lazy 引用失败 */}
                {/* <Suspense fallback={<div>Loading...</div>}> */}
                    <Switch>
                        {/* {routerMap.map(route => (
                            route.importPath ?
                                <Route
                                    path={route.path}
                                    exact
                                    key={route.name}
                                    component={lazy(() => import(route.importPath))}
                                />
                                : <Route
                                    path={route.path}
                                    exact
                                    key={route.name}
                                    render={props => <route.component {...props} />}
                                />
                        ))} */}
                        {routerMap.map(route => (
                            <Route
                                path={route.path}
                                exact
                                key={route.name}
                                render={props => <route.component {...props} />}
                            />
                        ))}
                    </Switch>
                {/* </Suspense> */}
            </Router>
        </div>
    );
};

export default App;
