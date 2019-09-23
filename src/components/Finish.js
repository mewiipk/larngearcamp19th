import React from 'react';

function FinishPhase({auth}) {
  return (
    <React.Fragment>
      <div className="finish-phase-container">
        <div className="register-info">
            <p className="register-code">
              <span>รหัสประจำตัวผู้สมัคร : </span>
              {auth.code}
            </p>
            <p className="register-code">
              <span>ชื่อ - นามสกุล ผู้สมัคร : </span>
              {auth.info.firstName} {auth.info.lastName}
            </p>
        </div>
        <h5>เสร็จสิ้นการสมัครค่ายลานเกียร์ครั้งที่ 19</h5>
        <p>สามารถติดตามประกาศผลผู้มีสิทธิ์สัมภาษณ์ได้ ในวันที่ 1 พฤศจิกายน 2562 ได้ที่เพจ LarnGear Camp</p>
      </div>
    </React.Fragment>
  );
}

export default FinishPhase;
