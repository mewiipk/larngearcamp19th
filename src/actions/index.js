import firebase, { db } from '../Firebase';

export const getUser = user => async dispatch => {
  let userRef = db.collection('user').doc(user.uid);
  await userRef.get().then(doc => {
    if (doc.exists) {
      dispatch({
        type: 'LOGIN',
        payload: doc.data()
      });
    } else {
      console.log('No data');
      const data = {
        uid: user.uid,
        email: user.email,
        register_status: 0
      };
      userRef.set(data);
      dispatch({
        type: 'LOGIN',
        payload: data
      });
    }
  });
};

export const signOut = () => async dispatch => {
  await firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log('User Logged Out!');
      dispatch({
        type: 'LOGOUT',
        payload: null
      });
    })
    .catch(function(error) {
      // An error happened.
      console.log(error);
    });
};
