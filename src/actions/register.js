import { db } from '../Firebase';

const centerList = [
  'กรุงเทพฯ',
  'นนทบุรี',
  'ปทุมธานี',
  'สมุทรปราการ',
  'สมุทรสาคร',
  'นครปฐม'
];

export async function generateID({ info, uid }) {
  const { prefix, schoolProvince } = info;
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
      userRef.update({ info, code, register_status: 1 });
    }
  });
}
