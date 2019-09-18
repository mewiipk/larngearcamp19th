import React from 'react';
import LG18 from '../static/images/lg18.jpg';
import Student from '../static/images/student.PNG';
import Health from '../static/images/health.PNG';
import Night from '../static/images/night.PNG';
import Paper from '../static/images/paper.PNG';
import FB from '../static/images/fb-logo.svg';

function HomePage() {
  return (
    <React.Fragment>
      <div className="home-page">
        <div className="first-container">
          <h1>LARNGEAR CAMP 19th</h1>
          <p> ค้นหาความเป็น วิศวกร ด้วยมือของคุณเอง</p>
          <button>APPLY NOW</button>
        </div>

        <div className="about-container">
          <div className="left-half">
            <article>
              <h3>What is LARNGEAR CAMP?</h3>
              <p>
                ค่ายลานเกียร์เป็นค่ายที่จัดขึ้นในเดือนมกราคมของทุกปี
                โดยเปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนปลายทั่วประเทศที่สนใจศึกษา
                ต่อในสาขาวิศวกรรมศาสตร์ แต่ยังไม่มั่นใจ หรือมีข้อมูลไม่เพียงพอ
                ได้เข้ามาสัมผัสการเรียนการสอนในวิชาปฏิบัติการจริง
                รวมไปถึงการทำกิจกรรมต่างๆ
                ที่สอดแทรกเนื้อหาเกี่ยวกับงานทางวิศวกรรม
                เพื่อเป็นข้อมูลประกอบการตัดสินใจในการเลือกศึกษาต่อในระดับอุดมศึกษา
              </p>
            </article>
          </div>
          <div className="right-half">
            <div className="img-container">
              <img src={LG18} />
            </div>
          </div>
        </div>

        <div className="requirement-container">
          <h3>คุณสมบัติผู้สมัคร</h3>
          <div className="require">
            <div className="req">
              <img src={Student} />
              <p>
                1. กำลังศึกษาอยู่ในชั้นมัธยมศึกษาปีที่ 4 - 5
                หรือ ปวช. ปีที่ 1-2
              </p>
            </div>

            <div className="req">
              <img src={Health} />
              <p>2. ไม่ป่วยเป็นโรคติดต่อร้ายแรง</p>
            </div>

            <div className="req">
              <img src={Night} />
              <p>
                3. สามารถค้างคืนได้ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                ตลอดระยะเวลาจัดค่าย
              </p>
            </div>

            <div className="req">
              <img src={Paper} />
              <p>4. ไม่เคยเข้าร่วมค่ายลานเกียร์มาก่อน</p>
            </div>
          </div>
        </div>


        <div className = "timeline-container">
          <p className = "timeline-title">TIMELINE</p>

          <div className = "timeline-line">

            <div className = "phase">
                <div className = "circle"></div>
                <p className = "date">19 กันยายน - 10 ตุลาคม 2562</p>
                <p className = "detail">  รับสมัคร</p>

            </div>
    
            <div className = "phase">
                <div className = "circle"></div>
                <p className = "date">1 พฤศจิกายน 2562</p>
                <p className = "detail">  ประกาศผล</p>
            </div>

            <div className = "phase">
                <div className = "circle"></div>
                <p className = "date">2 - 8 พฤศจิกายน 2562</p>
                <p className = "detail">สัมภาษณ์รอบต่างจังหวัด</p>

            </div>

            <div className = "phase">
                <div className = "circle"></div>
                <p className = "date">9 พฤศจิกายน 2562</p>
                <p className = "detail">  สัมภาษณ์รอบกรุงเทพ</p>
            </div>

            <div className = "phase">
                <div className = "circle"></div>
                <p className = "date">To Be Announce</p>
                <p className = "detail">  ประกาศผลสัมภาษณ์</p>
            </div>

            <div className = "phase">
                <div className = "circle"></div>
                <p className = "date">To Be Announce</p>
                <p className = "detail">  โอนเงินเพื่อยืนยันสิทธิ์</p>

            </div>

            <div className = "phase">
                <div className = "circle"></div>
                <p className = "date">15 - 18 มกราคม 2563</p>
                <p className = "detail">  ค่ายลานเกียร์ ครั้งที่ 19</p>

            </div>

          </div>
        </div>

        <div className = "register-container">
          <h3>รับสมัคร 19 กันยายน - 10 ตุลาคม 2562</h3>
          <button>สมัครค่ายลานเกียร์</button>
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

export default HomePage;
