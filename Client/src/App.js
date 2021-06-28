import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { AuthProvider} from "./contexts/AuthContext";
import "./scss/style.scss";
import Signup from "./views/pages/fireBaseRegister/Signup";
import Login from "./views/pages/fireBaseLogin/Login"
import Settings from "./views/settings/Settings"
import ForgotPassword from "./views/pages/fireBaseForgotPassword/ForgotPassword"
import PrivateRoute from "./PrivateRoute";
import { createBrowserHistory } from "history";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
// const Login = React.lazy(() => import("./views/pages/login/Login"));
// const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const history = createBrowserHistory({ basename: '/' });

class App extends Component {

  render() {
    return (
          <BrowserRouter basename="/">
            <React.Suspense fallback={loading}>
              <AuthProvider>
                <Switch>
                  <Route path="/signup" component={Signup} />
                  <Route path="/register" component={Signup} />
                  <Route path="/login" name="Login Page" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                  <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
                  <PrivateRoute path="/" name="Home" component={TheLayout} />
                  <PrivateRoute path="/settings" name="Settings" component={Settings} />
                </Switch>
              </AuthProvider>
            </React.Suspense>
          </BrowserRouter>
    );
  }
}

export default App;
