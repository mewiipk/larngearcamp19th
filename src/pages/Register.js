import React from 'react';
import FBLogo from '../static/images/fb-logo.svg';
import firebase from '../Firebase';
import { connect } from 'react-redux';
import * as actions from '../actions';
import RegisterPhase from '../components/Register';
import UploadPhase from '../components/Upload';
import FinishPhase from '../components/Finish';

function facebookLogin() {
  let provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
}

// function facebookGetRedirectResult(getUser) {
//   console.log('get result');
//   firebase
//     .auth()
//     .getRedirectResult()
//     .then(function(result) {
//       if (result.credential) {
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         let token = result.credential.accessToken;
//         console.log(token);
//         // ...
//       }
//       // The signed-in user info.
//       let user = result.user;
//       if (user) {
//         const { uid, email } = user.providerData[0];
//         db.collection('user')
//           .doc(uid)
//           .set({ uid, email, register_status: 0 })
//           .then(async () => {
//             await getUser({ uid, email, register_status: 0 });
//           });
//       }
//     })
//     .catch(function(error) {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       const credential = error.credential;
//       // ...
//     });
// }

const REGISTER_STATUS = {
  INIT: 0,
  UPLOAD: 1,
  FINISH: 2
};

function RegisterPage(props) {
  if (!props.isLogin)
    return (
      <div className="authenticating">
        <p>กำลังประมวลผล . .</p>
      </div>
    );

  if (!props.auth) {
    return (
      <div className="connect-to-facebook">
        <h1>เชื่อมต่อกับ Facebook เพื่อสมัครค่ายลานเกียร์</h1>
        <button onClick={() => facebookLogin()} className="login-btn">
          <img src={FBLogo} alt="fb-logo" />
          <p className="font-montserrat">Continue with Facebook</p>
        </button>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="register-page">
        {(() => {
          switch (props.auth.register_status) {
            case REGISTER_STATUS.UPLOAD:
              return <UploadPhase auth={props.auth} finish={props.finish} />;
            case REGISTER_STATUS.FINISH:
              return <FinishPhase />;
            case REGISTER_STATUS.INIT:
            default:
              return (
                <RegisterPhase auth={props.auth} register={props.register} />
              );
          }
        })()}
        <button className="logout-btn" onClick={() => props.signOut()}>
          ออกจากระบบ
        </button>
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
