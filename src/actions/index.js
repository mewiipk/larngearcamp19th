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

const centerList = [
  'กรุงเทพฯ',
  'นนทบุรี',
  'ปทุมธานี',
  'สมุทรปราการ',
  'สมุทรสาคร',
  'นครปฐม'
];

export const register = ({ info, user }) => async dispatch => {
  console.log({ info, user });
  const { prefix, schoolProvince } = info;
  const { uid } = user;
  const counter = db.collection('counter').doc('counter');
  const userRef = db.collection('user').doc(uid);
  let code = 'LG-XXXXX';
  let type;
  if (prefix === 'Mr' || prefix === 'Master') {
    if (centerList.includes(schoolProvince)) {
      type = 'A';
    } else {
      type = 'B';
    }
  } else {
    if (centerList.includes(schoolProvince)) {
      type = 'C';
    } else {
      type = 'D';
    }
  }
  await counter.get().then(doc => {
    if (doc.exists) {
      const data = doc.data();
      data[type] += 1;
      data['all'] += 1;
      counter.update(data);
      if (data[type] < 10) {
        code = `LG-${type}000${data[type]}`;
      } else if (data[type] < 100) {
        code = `LG-${type}00${data[type]}`;
      } else if (data[type] < 1000) {
        code = `LG-${type}0${data[type]}`;
      } else code = `LG-${type}${data[type]}`;
      userRef.update({ info, code, register_status: 1 }).then(() => {
        dispatch({
          type: 'UPDATE',
          payload: { ...user, info, code, register_status: 1 }
        });
      });
    }
  });
};
