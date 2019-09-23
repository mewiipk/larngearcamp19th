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
import Terms from './pages/Terms';
import Policy from './pages/Policy';
import QandAPage from './pages/Q&A';
import Header from './components/Header';
import firebase from './Firebase';

function App(props) {
  const { getUser } = props;
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        const a = getUser(user.providerData[0]);
        a.then(() => {
          setLogin(true);
        });
      } else {
        // User is signed out.
        // ...
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
        <Route path="/terms" render={() => <Terms />} />
        <Route path="/policy" render={() => <Policy />} />
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
