import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.scss';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import HomePage from './pages/Index';
import RegisterPage from './pages/Register';
import Header from './components/Header';
import firebase from './Firebase';

function App(props) {
  console.log(props);
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('sign in');
        const { uid, email } = user.providerData[0];
        const a = props.getUser({ uid, email });
        a.then(() => {
          console.log('get user');
          setLogin(true);
        });
      } else {
        // User is signed out.
        // ...
        console.log('not sign in');
        setLogin(true);
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          path="/register"
          render={() => <RegisterPage isLogin={isLogin} />}
        />
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(App)
);
