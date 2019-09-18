import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import './styles/App.scss';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import HomePage from './pages/Index';
import RegisterPage from './pages/Register';
import QandAPage from './pages/Q&A';
import Header from './components/Header';
import firebase from './Firebase';

function App(props) {
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('sign in');
        const a = props.getUser(user.providerData[0]);
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
        <Route path="/questions" render={() => <QandAPage />} />
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
