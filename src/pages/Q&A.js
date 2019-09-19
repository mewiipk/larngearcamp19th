import React from 'react';
import FB from '../static/images/fb-logo.svg';

function QandAPage() {
  return (
    <React.Fragment>
      <div className="q-a-page">
        <div className="title">
          <h1>Frequently Asked Questions</h1>
          <p>ถามมา ตอบไป ถามอะไร ตอบได้ รวมคำถามที่พบบ่อยเกี่ยวกับค่ายลานเกียร์</p>
        </div>

        <div className = "question">
          <h3 className = "quest">อยู่ ม. ไหนสมัครได้บ้าง?</h3>
          <p className = "ans">ค่ายลานเกียร์เปิดโอกาสให้น้อง ๆ ที่เรียนอยู่ชั้น ม.4 - 5 หรือ ปวช.ปี 1 - 2 หรือเทียบเท่าค่ะ</p>
        </div>

        <div className = "question">
          <h3 className = "quest">สมัครก่อนมีสิทธิ์ได้ก่อนรึเปล่า?</h3>
          <p className = "ans">ไม่มีผลค่ะ พี่ ๆ คัดเลือกจากคำตอบที่น้อง ๆ เขียนมาในใบสมัครค่ะ พี่ ๆ รออ่านอยู่นะคะ</p>
        </div>

        <div className = "question">
          <h3 className = "quest">ค่าสมัครเท่าไหร่?</h3>
          <p className = "ans">สมัครฟรีค่ะ แต่สำหรับน้อง ๆ ที่ผ่านรอบสัมภาษณ์ จะมีค่าใช้จ่าย 500 บาทค่ะ</p>
        </div>

        <div className = "question">
          <h3 className = "quest">ถ้าเคยสมัครปีที่แล้ว ปีนี้ต้องกรอกข้อมูลใหม่ไหม?</h3>
          <p className = "ans">ต้องกรอกข้อมูลใหม่ค่ะ และต้องไม่เคยเข้าค่ายลานเกียร์มาก่อนด้วยนะคะ</p>
        </div>

        <div className = "info-container">
          <div className = "info-left">
            <h3>ติดต่อ</h3>
            <p className = "moreinfo">หากมีข้อสงสัยเพิ่มเติม ติดต่อ</p>
            <p className = "contact">⚙️พี่นำ 081-480-0063</p>
            <p className = "contact">⚙️พี่แทน 085-915-9188</p>
            <p className = "contact">⚙️พี่มิว 085-254-5588</p>
          </div>

          <div className = "info-right">
            <h3>ติดตามข่าวสารได้ที่</h3>
            <div className = "facebook">
              <img src={FB} />
              <p className = "facebook-pg">LarnGear Camp</p>
            </div>

          </div>
        </div>


      </div>
    </React.Fragment>
  );
}

export default QandAPage;
