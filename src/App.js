import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { navigation } from './constants';
import Header from './Components/Header/Header';
import { useSelector } from 'react-redux';
const Contacts = lazy(() => import('./Conteiners/Contacts/Contacts'));
const Login = lazy(() => import('./Conteiners/Login/Login'));
const Registration = lazy(() => import('./Conteiners/Registration/Registration'));

const App = () => {
  const token = useSelector((state) => state.token);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push(navigation.contacts);
    } else {
      history.push(navigation.login);
    }
  }, [history, token])

  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          {token ? <Route exact path={navigation.contacts} component={Contacts} /> : <Route exact path={navigation.login} component={Login} />}
          <Route exact path={navigation.login} component={Login} />
          <Route exact path={navigation.register} component={Registration} />
          <Redirect to={navigation.login} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;