import React from 'react';
import LG18 from '../static/images/lg18.jpg';
import Student from '../static/images/student.PNG';
import Health from '../static/images/health.PNG';
import Night from '../static/images/night.PNG';
import Paper from '../static/images/paper.PNG';

function HomePage() {
  return (
    <React.Fragment>
      <div className="home-page">

        <div className = "first-container"> 
            <h1>LARNGEAR CAMP 19th</h1>
            <p> ค้นหาความเป็น วิศวกร ด้วยมือของคุณเอง</p>
            <button>APPLY NOW</button>
          </div>

        <div className = "about-container">
            <div class="left-half">
                <article>
                <h3>What is LARNGEAR CAMP?</h3>
                <p>ค่ายลานเกียร์เป็นค่ายที่จัดขึ้นในเดือนมกราคมของทุกปี โดยเปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนปลายทั่วประเทศที่สนใจศึกษา ต่อในสาขาวิศวกรรมศาสตร์ แต่ยังไม่มั่นใจ หรือมีข้อมูลไม่เพียงพอ ได้เข้ามาสัมผัสการเรียนการสอนในวิชาปฏิบัติการจริง รวมไปถึงการทำกิจกรรมต่างๆ ที่สอดแทรกเนื้อหาเกี่ยวกับงานทางวิศวกรรม เพื่อเป็นข้อมูลประกอบการตัดสินใจในการเลือกศึกษาต่อในระดับอุดมศึกษา</p>
                </article>
            </div>
            <div class="right-half">
                <img src = {LG18}/>
            </div>
        </div>

        <div className = "requirement">
            <h3>คุณสมบัติผู้สมัคร</h3>
            <div class = "require">
                <div class = "req1">
                    <p>1. กำลังศึกษาอยู่ในชั้นมัธยมศึกษาปีที่ 4 - 5 ในแผนการเรียนวิทยาศาสตร์ - คณิตศาสตร์</p>
                    <img src={Student} />
                </div>

                <div class = "req2">
                    <p>2. ไม่ป่วยเป็นโรคติดต่อร้ายแรง</p>
                    <img src={Health} />
                </div>

                <div class = "req3">
                    <p>3. สามารถค้างคืนได้ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ตลอดระยะเวลาจัดค่าย</p>
                    <img src={Night} />
                </div>

                <div class = "req4">
                    <p>4. ไม่เคยเข้าร่วมค่ายลานเกียร์มาก่อน</p>
                    <img src={Paper} />
                </div>

            </div>
        </div>

        <div className = "timeline">

        </div>

      </div>
  

   
      
    </React.Fragment>
  );
}

export default HomePage;
