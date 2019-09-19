import React, { useState } from 'react';
import { Icon } from 'antd';
import firebase, { db } from '../Firebase';

function UploadPhase({ auth, finish }) {
  const [isLoading, setLoading] = useState(false);
  const initUpload = auth.upload
    ? auth.upload
    : {
        studentIdentification: null,
        registerFile: null,
        personalIDCard: null
      };
  const [upload, setUpload] = useState(initUpload);
  const [isUpload, setIsUpload] = useState({
    studentIdentification: false,
    registerFile: false,
    personalIDCard: false
  });
  const onUploadRegisterFile = async e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    console.log(file);
    setIsUpload({ ...isUpload, registerFile: true });
    let uploadTask = storageRef
      .child('registerFile/' + file.name + '_' + auth.uid)
      .put(file);
    await uploadTask
      .then(async snapshot => {
        await snapshot.ref.getDownloadURL().then(async url => {
          await db
            .collection('user')
            .doc(auth.uid)
            .update({ 'upload.registerFile': url });
          setUpload({ ...upload, registerFile: url });
          setIsUpload({ ...isUpload, registerFile: false });
        });
      })
      .catch(error => {
        console.log(error.code);
      });
  };

  const onUploadPersonalIDCard = async e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    console.log(file);
    setIsUpload({ ...isUpload, personalIDCard: true });
    let uploadTask = storageRef
      .child('personalIDCard/' + file.name + '_' + auth.uid)
      .put(file);
    await uploadTask
      .then(async snapshot => {
        await snapshot.ref.getDownloadURL().then(async url => {
          await db
            .collection('user')
            .doc(auth.uid)
            .update({ 'upload.personalIDCard': url });
          setUpload({ ...upload, personalIDCard: url });
          setIsUpload({ ...isUpload, personalIDCard: false });
        });
      })
      .catch(error => {
        console.log(error.code);
      });
  };

  const onUploadStudentIdentification = async e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    console.log(file);
    setIsUpload({ ...isUpload, studentIdentification: true });
    let uploadTask = storageRef
      .child('studentIdentification/' + file.name + '_' + auth.uid)
      .put(file);
    await uploadTask
      .then(async snapshot => {
        await snapshot.ref.getDownloadURL().then(async url => {
          await db
            .collection('user')
            .doc(auth.uid)
            .update({ 'upload.studentIdentification': url });
          setUpload({ ...upload, studentIdentification: url });
          setIsUpload({ ...isUpload, studentIdentification: false });
        });
      })
      .catch(error => {
        console.log(error.code);
      });
  };

  const onFinish = async () => {
    setLoading(true);
    await finish(auth);
  };
  return (
    <React.Fragment>
      <div className="upload-phase-container">
      <h4>สมัครค่ายลานเกียร์ ครั้งที่ 19</h4>
        <div className = "register-info">
          <p className = "register-code"><span>รหัสประจำตัวผู้สมัคร : </span>{auth.code}</p>
          <p className = "register-code"><span>ชื่อ - นามสกุล ผู้สมัคร : </span>{auth.info.firstName} {auth.info.lastName}</p>
          <h6>ดาวน์โหลดใบสมัคร</h6>
          <p>ใบสมัครมีทั้งหมด 8 หน้า ทำให้ครบถ้วนทุกหน้าก่อนส่ง</p>
          <div className = "download-paper">
            <a href="https://firebasestorage.googleapis.com/v0/b/larngearcamp19th.appspot.com/o/LG19Application.pdf?alt=media&token=b6495b7f-529d-4c4a-a948-fe0175a4b2e4" target="_blank">DOWNLOAD ใบสมัคร</a>
          </div>
          
        </div>
      

        <div className = "upload-requirement">
          <h5>ส่งใบสมัคร</h5>
          <p>น้อง ๆ ต้องส่งทั้งสิ้น 3 ไฟล์ คือ</p>
            <p className = "requirement">1. สำเนาบัตรประชาชน หรือ สำเนาทะเบียนบ้านที่มีชื่อตนเองอยู่ในหน้านั้น <span>**</span></p> 
            <p className = "requirement">2. เอกสารที่แสดงว่ากำลังศึกษาอยู่ในระดับชั้น ม.4-5 หรือ ปวช. ปี 1-2 (ปพ.1 หรือ ปพ.7) <span>**</span></p> 
            <p className = "requirement">3. ใบสมัครครบถ้วนทั้ง 7 หน้า (ไม่รวมหน้าแรก)</p>
            <p className = "ps">** อย่าลืมเซ็นรับรองสำเนาถูกต้องด้วยนะคะ</p>
          <p className = "upload-date">ระบบจะเปิดให้ส่งใบสมัครตั้งแต่วันที่ 22 กันยายน - 10 ตุลาคม</p>
        </div>
        {/* <div className="upload-piece">
          <p className="head">อัพโหลดใบสมัคร</p>
          <p className="detail">รองรับเฉพาะไฟล์ประเภท pdf เท่านั้น</p>
          <div>
            <input
              id="register-file"
              name="register-file"
              type="file"
              hidden
              onChange={onUploadRegisterFile}
              accept="application/pdf"
            />
            {!isUpload.registerFile ? (
              <label className="file-upload" htmlFor="register-file">
                <Icon type="upload" /> คลิกเพื่ออัพโหลด
              </label>
            ) : (
              <div className="file-upload" htmlFor="register-file">
                <Icon type="upload" /> กำลังอัพโหลด...
              </div>
            )}
            {upload.registerFile && !isUpload.registerFile && (
              <a href={upload.registerFile} target="_blank">
                ดูไฟล์ใบสมัครที่อัพโหลดล่าสุด
              </a>
            )}
          </div>
        </div>
        <div className="upload-piece">
          <p className="head">อัพโหลดสำเนาบัตรประชาชน</p>
          <p className="detail">รองรับไฟล์ประเภท pdf และรูปภาพ</p>
          <div>
            <input
              id="personal-id-card"
              name="personal-id-card"
              type="file"
              hidden
              onChange={onUploadPersonalIDCard}
              accept="application/pdf,image/*"
            />
            {!isUpload.personalIDCard ? (
              <label className="file-upload" htmlFor="personal-id-card">
                <Icon type="upload" /> คลิกเพื่ออัพโหลด
              </label>
            ) : (
              <div className="file-upload">
                <Icon type="upload" /> กำลังอัพโหลด...
              </div>
            )}
            {upload.personalIDCard && !isUpload.personalIDCard && (
              <a href={upload.personalIDCard} target="_blank">
                ดูไฟล์สำเนาบัตรประชาชนที่อัพโหลดล่าสุด
              </a>
            )}
          </div>
        </div>
        <div className="upload-piece">
          <p className="head">อัพโหลดใบปพ.</p>
          <p className="detail">รองรับไฟล์ประเภท pdf และรูปภาพ</p>
          <div>
            <input
              id="student-identification"
              name="student-identification"
              type="file"
              hidden
              onChange={onUploadStudentIdentification}
              accept="application/pdf,image/*"
            />
            {!isUpload.studentIdentification ? (
              <label className="file-upload" htmlFor="student-identification">
                <Icon type="upload" /> คลิกเพื่ออัพโหลด
              </label>
            ) : (
              <div className="file-upload">
                <Icon type="upload" /> กำลังอัพโหลด...
              </div>
            )}
            {upload.studentIdentification && !isUpload.studentIdentification && (
              <a href={upload.studentIdentification} target="_blank">
                ดูไฟล์ใบ ปพ. ที่อัพโหลดล่าสุด
              </a>
            )}
          </div>
        </div>
        <button
          disabled={isLoading}
          className="register-btn"
          onClick={() => onFinish()}
        >
          ยืนยันข้อมูล
        </button> */}
      </div>
    </React.Fragment>
  );
}

export default UploadPhase;
