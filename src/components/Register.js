import React, { useState } from 'react';
import { Checkbox, Input, Select, DatePicker } from 'antd';
import * as moment from 'moment';

const { TextArea } = Input;

const province_th = [
  'กรุงเทพฯ',
  'กระบี่',
  'กาญจนบุรี',
  'กาฬสินธุ์',
  'กำแพงเพชร',
  'ขอนแก่น',
  'จันทบุรี',
  'ฉะเชิงเทรา',
  'ชลบุรี',
  'ชัยนาท',
  'ชัยภูมิ',
  'ชุมพร',
  'เชียงใหม่',
  'เชียงราย',
  'ตรัง',
  'ตราด',
  'ตาก',
  'นครนายก',
  'นครปฐม',
  'นครพนม',
  'นครราชสีมา',
  'นครศรีธรรมราช',
  'นครสวรรค์',
  'นนทบุรี',
  'นราธิวาส',
  'น่าน',
  'บึงกาฬ',
  'บุรีรัมย์',
  'ปทุมธานี',
  'ประจวบคีรีขันธ์',
  'ปราจีนบุรี',
  'ปัตตานี',
  'พระนครศรีอยุธยา',
  'พะเยา',
  'พังงา',
  'พัทลุง',
  'พิจิตร',
  'พิษณุโลก',
  'เพชรบุรี',
  'เพชรบูรณ์',
  'แพร่',
  'ภูเก็ต',
  'มหาสารคาม',
  'มุกดาหาร',
  'แม่ฮ่องสอน',
  'ยโสธร',
  'ยะลา',
  'ร้อยเอ็ด',
  'ระนอง',
  'ระยอง',
  'ราชบุรี',
  'ลพบุรี',
  'ลำปาง',
  'ลำพูน',
  'เลย',
  'ศรีสะเกษ',
  'สกลนคร',
  'สงขลา',
  'สตูล',
  'สมุทรปราการ',
  'สมุทรสงคราม',
  'สมุทรสาคร',
  'สระแก้ว',
  'สระบุรี',
  'สิงห์บุรี',
  'สุโขทัย',
  'สุพรรณบุรี',
  'สุราษฎร์ธานี',
  'สุรินทร์',
  'หนองคาย',
  'หนองบัวลำภู',
  'อ่างทอง',
  'อำนาจเจริญ',
  'อุดรธานี',
  'อุตรดิตถ์',
  'อุทัยธานี',
  'อุบลราชธานี'
];

function PreDetail({ setRead }) {
  const [isChecked, setChecked] = useState(false);
  const [showWarning, setWarning] = useState(false);
  return (
    <React.Fragment>
      <div className="pre-detail-container">
        <div className="requirement-register-container">
          <div className="title">
            <h1>รายละเอียดการสมัครค่ายลานเกียร์ ครั้งที่ 19</h1>
          </div>
          <div className="register-requirement">
            <h3>คุณสมบัติผู้สมัคร</h3>
            <p className="requirement">
              1. กำลังศึกษาอยู่ในชั้นมัธยมศึกษาปีที่ 4 - 5 หรือ ปวช. ปีที่ 1-2
            </p>
            <p className="requirement">2. ไม่ป่วยเป็นโรคติดต่อร้ายแรง</p>
            <p className="requirement">
              3. สามารถค้างคืนได้ที่คณะวิศวกรรมศาสตร์
              จุฬาลงกรณ์มหาวิทยาลัยตลอดระยะเวลาจัดค่าย
            </p>
            <p className="requirement">4. ไม่เคยเข้าร่วมค่ายลานเกียร์มาก่อน</p>
            <p></p>

            <h3>กำหนดการรับสมัคร</h3>
            <p className="requirement">เปิดรับสมัคร 19 ก.ย. - 10 ต.ค. 2562</p>
            <p className="requirement">
              ระบบจะเปิดให้ upload ใบสมัครในวันที่ 22 ก.ย. เป็นต้นไป
            </p>
            <p></p>

            <h3>เอกสารที่ต้องใช้ประกอบการสมัคร</h3>
            <p className="requirement">
              1. สำเนาบัตรประชาชน หรือ
              สำเนาทะเบียนบ้านที่มีชื่อตนเองอยู่ในหน้านั้น <span>**</span>
            </p>
            <p className="requirement">
              2. เอกสารที่แสดงว่ากำลังศึกษาอยู่ในระดับชั้น ม.4-5 หรือ ปวช. ปี
              1-2 (ปพ.1 หรือ ปพ.7) <span>**</span>
            </p>
            <p className="requirement">
              3. ใบสมัครครบถ้วนทั้ง 7 หน้า (ไม่รวมหน้าแรก)
            </p>
            <p className="ps">** อย่าลืมเซ็นรับรองสำเนาถูกต้องด้วยนะคะ</p>
          </div>
        </div>
        <label className="checked-row">
          <Checkbox
            className="checkbox"
            checked={isChecked}
            onChange={e => setChecked(e.target.checked)}
          />
          <p>คุณได้อ่านรายละเอียดการสมัครครบถ้วนเรียบร้อยแล้ว</p>
        </label>
        {showWarning && (
          <p className="warning">กรุณากดยืนยันเมื่ออ่านรายละเอียดครบถ้วนแล้ว</p>
        )}
        <button
          className="register-btn"
          onClick={() => {
            if (!isChecked) {
              setWarning(true);
            } else {
              setRead(true);
            }
          }}
        >
          สมัคร
        </button>
      </div>
    </React.Fragment>
  );
}

function RegisterForm({ auth, register }) {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    prefix: null,
    firstName: null,
    lastName: null,
    nickName: null,
    personalID: null,
    birthday: null,
    address: null,
    province: null,
    postcode: null,
    phone: null,
    bloodType: null,
    religion: null,
    schoolYear: null,
    school: null,
    schoolProvince: null,
    facebook: null,
    line: null,
    contactEmail: null,
    emergencyName: null,
    emergencyPhone: null,
    emergencyRelationship: null,
    knowFrom: {
      facebook: false,
      twitter: false,
      camphub: false,
      school: false,
      tutor: false,
      friend: false,
      other: false
    },
    foodAllergic: null,
    drugAllergic: null
  });
  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let newError = '';
    if (!info.prefix) {
      newError += 'กรุณาเลือกคำนำหน้าชื่อ';
    }
    if (!info.birthday) {
      if (newError !== '') newError += '\n';
      newError += 'กรุณาเลือกวันเกิด';
    }
    if (!info.province) {
      if (newError !== '') newError += '\n';
      newError += 'กรุณาเลือกจังหวัด';
    }
    if (!info.bloodType) {
      if (newError !== '') newError += '\n';
      newError += 'กรุณาเลือกกรุ๊ปเลือด';
    }
    if (!info.schoolYear) {
      if (newError !== '') newError += '\n';
      newError += 'กรุณาเลือกชั้นปี';
    }
    if (!info.schoolProvince) {
      if (newError !== '') newError += '\n';
      newError += 'กรุณาเลือกจังหวัดโรงเรียน';
    }
    if (newError !== '') {
      setError(newError);
      setLoading(false);
      return;
    }
    setError(null);
    await register({
      info: { ...info, birthday: moment(info.birthday).format('DD/MM/YYYY') },
      user: auth
    });
    setLoading(false);
  };
  return (
    <React.Fragment>
      <div className="register-form-container">
        <h4>สมัครค่ายลานเกียร์ ครั้งที่ 19</h4>
        <form onSubmit={onSubmit}>
          <label className="form-item row">
            <p className="col-4">
              คำนำหน้าชื่อ<span>*</span>
            </p>
            <Select
              className="form-input col-8"
              value={info.prefix}
              onChange={value => setInfo({ ...info, prefix: value })}
            >
              <Select.Option value="Mr">นาย / Mr.</Select.Option>
              <Select.Option value="Ms">นางสาว / Ms.</Select.Option>
              <Select.Option value="Master">เด็กชาย / Master</Select.Option>
              <Select.Option value="Miss">เด็กหญิง / Miss</Select.Option>
            </Select>
          </label>
          <label className="form-item row">
            <p className="col-4">
              ชื่อจริง<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.firstName}
              onChange={e => setInfo({ ...info, firstName: e.target.value })}
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              นามสกุล<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.lastName}
              onChange={e => setInfo({ ...info, lastName: e.target.value })}
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              ชื่อเล่น<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.nickName}
              onChange={e => setInfo({ ...info, nickName: e.target.value })}
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              เลขประจำตัวประชาชน<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.personalID}
              onChange={e => setInfo({ ...info, personalID: e.target.value })}
              placeholder="ตัวอย่าง: 1399911155566"
              pattern="[0-9]{13}$"
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              วันเกิด<span>*</span>
            </p>
            <DatePicker
              className="form-input col-8"
              value={info.birthday}
              onChange={date => setInfo({ ...info, birthday: date })}
              format={'DD/MM/YYYY'}
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              ที่อยู่บ้าน<span>*</span>
            </p>
            <TextArea
              className="form-input col-8"
              value={info.address}
              onChange={e => setInfo({ ...info, address: e.target.value })}
              row={2}
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              จังหวัด<span>*</span>
            </p>
            <Select
              className="form-input col-8"
              value={info.province}
              onChange={value => setInfo({ ...info, province: value })}
            >
              {province_th.map((province, i) => {
                return (
                  <Select.Option key={i} value={province}>
                    {province}
                  </Select.Option>
                );
              })}
            </Select>
          </label>
          <label className="form-item row">
            <p className="col-4">
              รหัสไปรษณีย์<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.postcode}
              onChange={e => setInfo({ ...info, postcode: e.target.value })}
              pattern="[0-9]{5}$"
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              เบอร์โทรศัพท์<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.phone}
              onChange={e => setInfo({ ...info, phone: e.target.value })}
              placeholder="ตัวอย่าง: 0812345678"
              pattern="[0-9]{10}$"
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              กรุ๊ปเลือด<span>*</span>
            </p>
            <Select
              className="form-input col-8"
              value={info.bloodType}
              onChange={value => setInfo({ ...info, bloodType: value })}
            >
              <Select.Option value="A">A</Select.Option>
              <Select.Option value="B">B</Select.Option>
              <Select.Option value="AB">AB</Select.Option>
              <Select.Option value="O">O</Select.Option>
            </Select>
          </label>
          <label className="form-item row">
            <p className="col-4">
              ศาสนา<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.religion}
              onChange={e => setInfo({ ...info, religion: e.target.value })}
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              ชั้นปี<span>*</span>
            </p>
            <Select
              className="form-input col-8"
              value={info.schoolYear}
              onChange={value => setInfo({ ...info, schoolYear: value })}
            >
              <Select.Option value="ม.4">ม.4</Select.Option>
              <Select.Option value="ม.5">ม.5</Select.Option>
              <Select.Option value="ปวช. ปี 1">ปวช. ปี 1</Select.Option>
              <Select.Option value="ปวช. ปี 2">ปวช. ปี 2</Select.Option>
            </Select>
          </label>
          <label className="form-item row">
            <p className="col-4">
              โรงเรียน<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.school}
              onChange={e => setInfo({ ...info, school: e.target.value })}
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              จังหวัดโรงเรียน<span>*</span>
            </p>
            <Select
              className="form-input col-8"
              value={info.schoolProvince}
              onChange={value => setInfo({ ...info, schoolProvince: value })}
            >
              {province_th.map((province, i) => {
                return (
                  <Select.Option key={i} value={province}>
                    {province}
                  </Select.Option>
                );
              })}
            </Select>
          </label>
          <label className="form-item row">
            <p className="col-4">
              Facebook<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.facebook}
              onChange={e => setInfo({ ...info, facebook: e.target.value })}
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">Line</p>
            <Input
              className="form-input col-8"
              value={info.line}
              onChange={e => setInfo({ ...info, line: e.target.value })}
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              E-mail<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.contactEmail}
              onChange={e => setInfo({ ...info, contactEmail: e.target.value })}
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              ชื่อ-นามสกุลผู้ติดต่อฉุกเฉิน<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.emergencyName}
              onChange={e =>
                setInfo({ ...info, emergencyName: e.target.value })
              }
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              เบอร์โทรศัพท์ผู้ติดต่อฉุกเฉิน<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.emergencyPhone}
              onChange={e =>
                setInfo({ ...info, emergencyPhone: e.target.value })
              }
              placeholder="ตัวอย่าง: 0812345678"
              pattern="[0-9]{10}$"
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              ความสัมพันธ์<span>*</span>
            </p>
            <Input
              className="form-input col-8"
              value={info.emergencyRelationship}
              onChange={e =>
                setInfo({ ...info, emergencyRelationship: e.target.value })
              }
              required
            />
          </label>
          <label className="form-item row">
            <p className="col-4">
              รู้จักค่ายจาก<span></span>
            </p>
            <div className="checkbox-col">
              <label className="checked-row">
                <Checkbox
                  checked={info.knowFrom.facebook}
                  onChange={e =>
                    setInfo({
                      ...info,
                      knowFrom: { ...info.knowFrom, facebook: e.target.checked }
                    })
                  }
                  className="checkbox"
                />
                <p>Facebook</p>
              </label>
              <label className="checked-row">
                <Checkbox
                  checked={info.knowFrom.twitter}
                  onChange={e =>
                    setInfo({
                      ...info,
                      knowFrom: { ...info.knowFrom, twitter: e.target.checked }
                    })
                  }
                  className="checkbox"
                />
                <p>Twitter</p>
              </label>
              <label className="checked-row">
                <Checkbox
                  checked={info.knowFrom.camphub}
                  onChange={e =>
                    setInfo({
                      ...info,
                      knowFrom: { ...info.knowFrom, camphub: e.target.checked }
                    })
                  }
                  className="checkbox"
                />
                <p>Camphub.in.th</p>
              </label>
              <label className="checked-row">
                <Checkbox
                  checked={info.knowFrom.school}
                  onChange={e =>
                    setInfo({
                      ...info,
                      knowFrom: { ...info.knowFrom, school: e.target.checked }
                    })
                  }
                  className="checkbox"
                />
                <p>โรงเรียน</p>
              </label>
              <label className="checked-row">
                <Checkbox
                  checked={info.knowFrom.tutor}
                  onChange={e =>
                    setInfo({
                      ...info,
                      knowFrom: { ...info.knowFrom, tutor: e.target.checked }
                    })
                  }
                  className="checkbox"
                />
                <p>สถาบันกวดวิชา</p>
              </label>
              <label className="checked-row">
                <Checkbox
                  checked={info.knowFrom.friend}
                  onChange={e =>
                    setInfo({
                      ...info,
                      knowFrom: { ...info.knowFrom, friend: e.target.checked }
                    })
                  }
                  className="checkbox"
                />
                <p>เพื่อน</p>
              </label>
              <label className="checked-row">
                <Checkbox
                  checked={info.knowFrom.other}
                  onChange={e =>
                    setInfo({
                      ...info,
                      knowFrom: { ...info.knowFrom, other: e.target.checked }
                    })
                  }
                  className="checkbox"
                />
                <p>อื่น ๆ</p>
              </label>
            </div>
          </label>
          <label className="form-item row">
            <p className="col-4">อาหารที่แพ้</p>
            <Input
              className="form-input col-8"
              value={info.foodAllergic}
              onChange={e => setInfo({ ...info, foodAllergic: e.target.value })}
            />
          </label>
          <label className="form-item row">
            <p className="col-4">ยาที่แพ้</p>
            <Input
              className="form-input col-8"
              value={info.drugAllergic}
              onChange={e => setInfo({ ...info, drugAllergic: e.target.value })}
            />
          </label>
          <h6>
            ** ตรวจสอบข้อมูลการสมัครให้ถูกต้อง
            หลังจากกดสมัครแล้วจะไม่สามารถกลับมาแก้ไขข้อมูลส่วนตัวได้ **
          </h6>
          {error && <p className="error">{error}</p>}
          <button disabled={isLoading} className="register-btn" type="submit">
            {isLoading || auth.register_status !== 0
              ? 'กำลังสมัคร . .'
              : 'สมัคร'}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

function RegisterPhase({ auth, register }) {
  const [isRead, setRead] = useState(false);
  return (
    <React.Fragment>
      {isRead ? (
        <RegisterForm auth={auth} register={register} />
      ) : (
        <PreDetail setRead={setRead} />
      )}
    </React.Fragment>
  );
}

export default RegisterPhase;
