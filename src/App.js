import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { navigation } from './constants';
import Contacts from './Conteiners/Contacts/Contacts';
import Login from "./Conteiners/Login/Login";
import Registration from "./Conteiners/Registration/Registration";
import Header from './Components/Header/Header';
import { useSelector } from 'react-redux';

const App = () => {
  const { register } = navigation;
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
      <Switch>
        {token ? <Route exact path={navigation.contacts} component={Contacts} /> : <Route exact path={navigation.login} component={Login} />}
        <Route exact path={navigation.login} component={Login} />
        <Route exact path={register} component={Registration} />
        <Redirect to={navigation.login} />
      </Switch>
    </>
  );
};

export default App;