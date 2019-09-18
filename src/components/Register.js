import React, { useState } from 'react';
import { Checkbox, Input } from 'antd';

function PreDetail({ setRead }) {
  const [isChecked, setChecked] = useState(false);
  const [showWarning, setWarning] = useState(false);
  return (
    <React.Fragment>
      <div className="pre-detail-container">
        <div className="checked-row">
          <Checkbox
            className="checkbox"
            checked={isChecked}
            onChange={e => setChecked(e.target.checked)}
          />
          <p>อ่านแล้ว</p>
        </div>
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
  return (
    <React.Fragment>
      <div className="register-form-container">
        <form>
          <label className="form-item">
            <p>ชื่อจริง</p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>นามสกุล</p>
            <Input className="form-input" />
          </label>
          <label className="form-item">
            <p>ชื่อเล่น</p>
            <Input className="form-input" />
          </label>
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
