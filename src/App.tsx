import React from 'react';
import {Route, Router, Switch} from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Layout from "./hoc/Layout";
import {createBrowserHistory} from "history";
import {PATH_MESSAGES, PATH_HOME, PATH_LIST_FRIENDS, PATH_LOGIN, PATH_REGISTRATION} from "./routeList";
import Messages from "./pages/Messages";
import FriendsList from "./pages/FriendsList";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./pages/NotFound";

const history = createBrowserHistory();

const App = () => {
  return (
      // <Router history={history}>
          <Layout>
              <Switch>
                  <Route exact path={PATH_LOGIN} component={Login} />
                  <Route path={PATH_REGISTRATION} component={Registration} />
                  <PrivateRoute path={PATH_HOME} component={Home} />
                  <PrivateRoute path={PATH_MESSAGES} component={Messages} />
                  <PrivateRoute path={PATH_LIST_FRIENDS} component={FriendsList} />
                  <Route path="*" component={NotFound} />
              </Switch>
          </Layout>
      // </Router>
  );
}

export default App;
