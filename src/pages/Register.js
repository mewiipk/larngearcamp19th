import React, { useEffect } from 'react';
import FBLogo from '../static/images/fb-logo.svg';
import firebase, { db } from '../Firebase';
import { connect } from 'react-redux';
import * as actions from '../actions';

function facebookLogin() {
  let provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
}

function facebookGetRedirectResult(getUser) {
  console.log('get result');
  firebase
    .auth()
    .getRedirectResult()
    .then(function(result) {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        let token = result.credential.accessToken;
        console.log(token);
        // ...
      }
      // The signed-in user info.
      let user = result.user;
      if (user) {
        const { uid, email } = user.providerData[0];
        db.collection('user')
          .doc(uid)
          .set({ uid, email })
          .then(async () => {
            await getUser({ uid, email });
          });
      }
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
}

function RegisterPage(props) {
  useEffect(() => {
    facebookGetRedirectResult(props.getUser);
  }, []);

  if (!props.isLogin) return <div />;
  return (
    <React.Fragment>
      <div className="register-page">
        {!props.auth ? (
          <button onClick={() => facebookLogin()} className="login-btn">
            <img src={FBLogo} alt="fb-logo" />
            <p className="font-montserrat">Continue with Facebook</p>
          </button>
        ) : (
          <button onClick={() => props.signOut()}>Log out</button>
        )}
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(RegisterPage);
