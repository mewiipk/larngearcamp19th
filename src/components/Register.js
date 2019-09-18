import React, { useState } from 'react';
import { Checkbox, Input, Select, DatePicker } from 'antd';

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
        <label className="checked-row">
          <Checkbox
            className="checkbox"
            checked={isChecked}
            onChange={e => setChecked(e.target.checked)}
          />
          <p>อ่านแล้ว</p>
        </label>
        {showWarning && <p className="warning">กรุณากดยืนยันว่าอ่านแล้ว</p>}
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

function RegisterForm() {
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit!');
  };
  return (
    <React.Fragment>
      <div className="register-form-container">
        <h4>สมัครค่ายลานเกียร์ ครั้งที่ 19</h4>
        <form onSubmit={onSubmit}>
          <label className="form-item">
            <p>
              คำนำหน้าชื่อ<span>*</span>
            </p>
            <Select className="form-input">
              <Select.Option value="Mr.">นาย / Mr.</Select.Option>
              <Select.Option value="Ms.">นางสาว / Ms.</Select.Option>
              <Select.Option value="Master">เด็กชาย / Master</Select.Option>
              <Select.Option value="Miss">เด็กหญิง / Miss</Select.Option>
            </Select>
          </label>
          <label className="form-item">
            <p>
              ชื่อจริง<span>*</span>
            </p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>
              นามสกุล<span>*</span>
            </p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>
              ชื่อเล่น<span>*</span>
            </p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>
              เลขประจำตัวประชาชน<span>*</span>
            </p>
            <Input pattern="\d*" className="form-input" />
          </label>
          <label className="form-item">
            <p>
              วันเกิด<span>*</span>
            </p>
            <DatePicker className="form-input" />
          </label>
          <label className="form-item">
            <p>
              ที่อยู่บ้าน<span>*</span>
            </p>
            <TextArea row={2} className="form-input" />
          </label>
          <label className="form-item">
            <p>
              จังหวัด<span>*</span>
            </p>
            <Select className="form-input">
              {province_th.map((province, i) => {
                return (
                  <Select.Option key={i} value={province}>
                    {province}
                  </Select.Option>
                );
              })}
            </Select>
          </label>
          <label className="form-item">
            <p>
              รหัสไปรษณีย์<span>*</span>
            </p>
            <Input pattern="\d*" className="form-input" />
          </label>
          <label className="form-item">
            <p>
              เบอร์โทรศัพท์<span>*</span>
            </p>
            <Input pattern="\d*" className="form-input" />
          </label>
          <label className="form-item">
            <p>
              กรุ๊ปเลือด<span>*</span>
            </p>
            <Select className="form-input">
              <Select.Option value="A">A</Select.Option>
              <Select.Option value="B">B</Select.Option>
              <Select.Option value="AB">AB</Select.Option>
              <Select.Option value="O">O</Select.Option>
            </Select>
          </label>
          <label className="form-item">
            <p>
              ศาสนา<span>*</span>
            </p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>
              ชั้นปี<span>*</span>
            </p>
            <Select className="form-input">
              <Select.Option value="ม.5">ม.5</Select.Option>
              <Select.Option value="ม.6">ม.6</Select.Option>
              <Select.Option value="ปวช. ปี 1">ปวช. ปี 1</Select.Option>
              <Select.Option value="ปวช. ปี 2">ปวช. ปี 2</Select.Option>
            </Select>
          </label>
          <label className="form-item">
            <p>
              โรงเรียน<span>*</span>
            </p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>
              จังหวัดโรงเรียน<span>*</span>
            </p>
            <Select className="form-input">
              {province_th.map((province, i) => {
                return (
                  <Select.Option key={i} value={province}>
                    {province}
                  </Select.Option>
                );
              })}
            </Select>
          </label>
          <label className="form-item">
            <p>
              Facebook<span>*</span>
            </p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>Line</p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>
              E-mail<span>*</span>
            </p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>
              ชื่อ-นามสกุลผู้ติดต่อฉุกเฉิน<span>*</span>
            </p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>
              เบอร์โทรศัพท์ผู้ติดต่อฉุกเฉิน<span>*</span>
            </p>
            <Input pattern="\d*" className="form-input" />
          </label>
          <label className="form-item">
            <p>
              ความสัมพันธ์<span>*</span>
            </p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>
              รู้จักค่ายจาก<span></span>
            </p>
            <div className="checkbox-col">
              <label className="checked-row">
                <Checkbox className="checkbox" />
                <p>Facebook</p>
              </label>
              <label className="checked-row">
                <Checkbox className="checkbox" />
                <p>Twitter</p>
              </label>
              <label className="checked-row">
                <Checkbox className="checkbox" />
                <p>Camphub.in.th</p>
              </label>
              <label className="checked-row">
                <Checkbox className="checkbox" />
                <p>โรงเรียน</p>
              </label>
              <label className="checked-row">
                <Checkbox className="checkbox" />
                <p>สถาบันกวดวิชา</p>
              </label>
              <label className="checked-row">
                <Checkbox className="checkbox" />
                <p>เพื่อน</p>
              </label>
              <label className="checked-row">
                <Checkbox className="checkbox" />
                <p>อื่น ๆ</p>
              </label>
            </div>
          </label>
          <label className="form-item">
            <p>อาหารที่แพ้</p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>ยาที่แพ้</p>
            <Input className="form-input" />
          </label>
          <button className="register-btn" type="submit">
            สมัคร
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

function RegisterPhase() {
  const [isRead, setRead] = useState(false);
  return (
    <React.Fragment>
      {isRead ? <RegisterForm /> : <PreDetail setRead={setRead} />}
    </React.Fragment>
  );
}

export default RegisterPhase;
