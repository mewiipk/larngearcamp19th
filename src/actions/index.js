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
      const data = {
        uid: user.uid,
        email: user.email,
        register_status: 0,
        created_time: new Date()
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
  const { prefix, schoolProvince } = info;
  const { uid } = user;
  const counterRef = db.collection('counter').doc('counter_dev');
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
  return db
    .runTransaction(function(transaction) {
      return transaction.get(counterRef).then(function(counterDoc) {
        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        const data = counterDoc.data();
        data[type] += 1;
        data['all'] += 1;
        transaction.update(counterRef, data);
        if (data[type] < 10) {
          code = `LG-${type}000${data[type]}`;
        } else if (data[type] < 100) {
          code = `LG-${type}00${data[type]}`;
        } else if (data[type] < 1000) {
          code = `LG-${type}0${data[type]}`;
        } else code = `LG-${type}${data[type]}`;
      });
    })
    .then(function() {
      const register_time = new Date();
      userRef
        .update({ info, code, register_status: 1, register_time })
        .then(() => {
          dispatch({
            type: 'UPDATE',
            payload: {
              ...user,
              info,
              code,
              register_status: 1,
              register_time
            }
          });
        });
    })
    .catch(function(error) {
      console.log(error);
    });
  // await counterRef.get().then(doc => {
  //   if (doc.exists) {
  //     const data = doc.data();
  //     data[type] += 1;
  //     data['all'] += 1;
  //     counterRef.update(data);
  //     if (data[type] < 10) {
  //       code = `LG-${type}000${data[type]}`;
  //     } else if (data[type] < 100) {
  //       code = `LG-${type}00${data[type]}`;
  //     } else if (data[type] < 1000) {
  //       code = `LG-${type}0${data[type]}`;
  //     } else code = `LG-${type}${data[type]}`;
  //     const register_time = new Date();
  //     userRef
  //       .update({ info, code, register_status: 1, register_time })
  //       .then(() => {
  //         dispatch({
  //           type: 'UPDATE',
  //           payload: { ...user, info, code, register_status: 1, register_time }
  //         });
  //       });
  //   }
  // });
};

export const finish = (user, upload) => async dispatch => {
  const { uid, code } = user;
  const userRef = db.collection('user').doc(uid);
  const finishedUserRef = db.collection('finished_user').doc(code);
  const finished_time = new Date();
  await userRef.update({ register_status: 2, finished_time }).then(() => {
    dispatch({
      type: 'UPDATE',
      payload: { ...user, register_status: 2, finished_time }
    });
  });
  await finishedUserRef.set({
    ...user,
    ...upload,
    register_status: 2,
    finished_time
  });
};
