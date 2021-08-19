import { useRef, useState } from "react";
import CarouselComponent from "../component/CarouselComponent";

const database = [
  {
    email: "testDuplicate@hotmail.com",
    tel: "0123456789",
  },
];

function RegisterPage() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordIsShow, setPasswordIsShow] = useState(false);
  const [confirmPasswordIsShow, setConfirmPasswordIsShow] = useState(false);
  const [frontIdSvgHover, setFrontIdSvgHover] = useState("#8f8f8f");
  const [backIdSvgHover, setBackIdSvgHover] = useState("#8f8f8f");

  const [showPage, setShowPage] = useState({
    Register: true,
    ToS: false,
    CompleteRegis: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setError((prev) => ({ ...prev, [name]: "" }));
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  console.log(input);

  const handlePasswordTypeChange = () => {
    setPasswordIsShow(!passwordIsShow);
  };

  const handleConfirmPasswordTypeChange = () => {
    setConfirmPasswordIsShow(!confirmPasswordIsShow);
  };

  const [idCardUpload, setIdCardUpload] = useState({
    frontId: "",
    backId: "",
  });

  const frontIdUpload = useRef(null);
  const backIdUpload = useRef(null);

  const handleClickUploadFrontIdCard = () => {
    frontIdUpload.current.click();
  };

  const handleClickUploadBackIdCard = () => {
    backIdUpload.current.click();
  };

  const handleIdCardChange = (e) => {
    const { name, files } = e.target;

    setError((prev) => ({ ...prev, [name]: "" }));
    setIdCardUpload((prev) => ({ ...prev, [name]: files[0] }));
  };
  console.log(idCardUpload);

  const handleRemoveIdCard = (e) => {
    const { id } = e.target;
    if (id === "frontId") {
      return setIdCardUpload((prev) => ({ ...prev, frontId: "" }));
    }
    if (id === "backId") {
      return setIdCardUpload((prev) => ({ ...prev, backId: "" }));
    }
  };

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    password: "",
    confirmPassword: "",
    frontId: "",
    backId: "",
  });

  const submitRegisterForm = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, tel, password, confirmPassword } =
      input;
    const { frontId, backId } = idCardUpload;
    setError({
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      password: "",
      confirmPassword: "",
      frontId: "",
      backId: "",
    });
    try {
      let errorCount = 0;
      // no value error
      if (!firstName.trim() || !firstName) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          firstName: "This field cannot be empty",
        }));
      }
      if (!lastName.trim() || !lastName) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          lastName: "This field cannot be empty",
        }));
      }
      if (!email.trim() || !email) {
        errorCount += 1;
        setError((prev) => ({ ...prev, email: "This field cannot be empty" }));
      }
      if (!tel.trim() || !tel) {
        errorCount += 1;
        setError((prev) => ({ ...prev, tel: "This field cannot be empty" }));
      }
      if (!password.trim() || !password) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          password: "This field cannot be empty",
        }));
      }
      if (!confirmPassword.trim() || !confirmPassword) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          confirmPassword: "This field cannot be empty",
        }));
      }
      if (!frontId) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          frontId: "No file chosen",
        }));
      }
      if (!backId) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          backId: "No file chosen",
        }));
      }

      // is Email
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          email: "รูปแบบอีเมลล์ไม่ถูกต้อง",
        }));
      }

      // database duplicate error
      const isDuplicateEmail = database.map(
        (item) => item.email === input.email
      );
      if (isDuplicateEmail[0]) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          email: "อีเมลล์นี้ได้ถูกใช้ไปแล้ว",
        }));
      }
      const isDuplicateTel = database.map((item) => item.tel === input.tel);
      if (isDuplicateTel[0]) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          tel: "เบอร์นี้ได้ถูกใช้ไปแล้ว",
        }));
      }

      // password error
      if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{7,20}$/.test(password)) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          password:
            "กรุณาใส่ 7-20 ตัวอักษร ประกอบด้วยตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว",
        }));
      }
      if (password !== confirmPassword) {
        errorCount += 1;
        setError((prev) => ({ ...prev, confirmPassword: "รหัสผ่านไม่ตรงกัน" }));
      }

      // upload error
      if (frontId) {
        if (frontId.size > 5000000) {
          errorCount += 1;
          setError((prev) => ({
            ...prev,
            frontId: "ไฟล์ผิดประเภท หรือมีขนาดเกิน 5MB",
          }));
          setIdCardUpload((prev) => ({ ...prev, frontId: "" }));
          setFrontIdSvgHover("#8f8f8f");
        }

        if (!/(jpe?g|png)$/.test(frontId.type.split("/")[1])) {
          errorCount += 1;
          setError((prev) => ({
            ...prev,
            frontId: "ไฟล์ผิดประเภท หรือมีขนาดเกิน 5MB",
          }));
          setIdCardUpload((prev) => ({ ...prev, frontId: "" }));
          setFrontIdSvgHover("#8f8f8f");
        }
      }
      if (backId) {
        if (backId.size > 5000000) {
          errorCount += 1;
          setError((prev) => ({
            ...prev,
            backId: "ไฟล์ผิดประเภท หรือมีขนาดเกิน 5MB",
          }));
          setIdCardUpload((prev) => ({ ...prev, backId: "" }));
          setBackIdSvgHover("#8f8f8f");
        }

        if (!/(jpe?g|png)$/.test(backId.type.split("/")[1])) {
          errorCount += 1;
          setError((prev) => ({
            ...prev,
            backId: "ไฟล์ผิดประเภท หรือมีขนาดเกิน 5MB",
          }));
          setIdCardUpload((prev) => ({ ...prev, backId: "" }));
          setBackIdSvgHover("#8f8f8f");
        }
      }

      // name error
      if (firstName && !/^[\u0E00-\u0E7F]+$/.test(firstName)) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          firstName: "กรุณากรอกข้อมูลเป็นภาษาไทย",
        }));
      }
      if (lastName && !/^[\u0E00-\u0E7F]+$/.test(lastName)) {
        errorCount += 1;
        setError((prev) => ({
          ...prev,
          lastName: "กรุณากรอกข้อมูลเป็นภาษาไทย",
        }));
      }

      if (errorCount !== 0) {
        throw new Error("Error found");
      }

      setShowPage((prev) => ({ ...prev, Register: false, ToS: true }));
    } catch (error) {
      console.log(error);
    }
  };

  // ToS Page
  const [checkbox, setCheckbox] = useState(false);

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

  const handleSubmitToS = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, tel, password, confirmPassword } =
      input;
    const { frontId, backId } = idCardUpload;
    try {
      if (!checkbox) {
        throw new Error("Please Check Accept ToS");
      }

      const submitForm = new FormData();
      submitForm.append("firstName", firstName);
      submitForm.append("lastName", lastName);
      submitForm.append("email", email);
      submitForm.append("tel", tel);
      submitForm.append("password", password);
      submitForm.append("confirmPassword", confirmPassword);
      submitForm.append("frontIdCard", frontId);
      submitForm.append("backIdCard", backId);

      for (let data of submitForm.entries()) {
        console.log(data[0] + ": " + data[1]);
      }

      setShowPage((prev) => ({ ...prev, ToS: false, CompleteRegis: true }));
    } catch (error) {
      console.log(error);
    }
  };

  // CompleteRegis Page
  const handleBackToMain = (e) => {
    window.location.reload();
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <div className="header-left">
            <div className="header-left-icon">
              <h2 className="text-purple">REGISTER FORM</h2>
            </div>
          </div>
          <div className="header-right">
            <div className="header-right-text">
              <p>Create my listing</p>
            </div>
            <div className="header-right-btn-grp">
              <button className="btn btn-1">Login</button>
              <button
                className="btn btn-2"
                onClick={(e) => {
                  handleBackToMain(e);
                }}
              >
                Sing up
              </button>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="center-form">
            {showPage.Register && (
              <form>
                <div className="form-header">
                  <h1>สมัครสมาชิก</h1>
                  <p className="p-sup-head">Register form example</p>
                </div>
                <label htmlFor="firstName">
                  <p>ชื่อ</p>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={`input-text ${
                    error.firstName ? "input-error" : ""
                  }`}
                  onChange={(e) => handleInputChange(e)}
                  value={input.firstName}
                />
                {error.firstName ? (
                  <p className="p-small p-gray p-error">{error.firstName}</p>
                ) : (
                  <div className="hide-error" />
                )}
                <label htmlFor="lastName">
                  <p>นามสกุล</p>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={`input-text ${
                    error.lastName ? "input-error" : ""
                  }`}
                  onChange={(e) => handleInputChange(e)}
                  value={input.lastName}
                />
                {error.lastName ? (
                  <p className="p-small p-gray p-error">{error.lastName}</p>
                ) : (
                  <div className="hide-error" />
                )}
                <label htmlFor="email">
                  <p>อีเมลล์</p>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className={`input-text ${error.email ? "input-error" : ""}`}
                  onChange={(e) => handleInputChange(e)}
                  value={input.email}
                />
                {error.email ? (
                  <p className="p-small p-gray p-error">{error.email}</p>
                ) : (
                  <div className="hide-error" />
                )}
                <label htmlFor="tel">
                  <p>เบอร์ติดต่อ</p>
                </label>
                <input
                  type="text"
                  id="tel"
                  name="tel"
                  className={`input-text ${error.tel ? "input-error" : ""}`}
                  onChange={(e) => handleInputChange(e)}
                  value={input.tel}
                />
                {error.tel ? (
                  <p className="p-small p-gray p-error">{error.tel}</p>
                ) : (
                  <div className="hide-error" />
                )}
                <label htmlFor="password">
                  <p>รหัสผ่าน</p>
                </label>
                <div className="password-div">
                  <input
                    type={passwordIsShow ? "text" : "password"}
                    id="password"
                    name="password"
                    className={`input-text ${
                      error.password || error.confirmPassword
                        ? "input-error"
                        : ""
                    }`}
                    onChange={(e) => handleInputChange(e)}
                    value={input.password}
                  />
                  {error.password || error.confirmPassword ? (
                    <div
                      className="icon-password pass-error"
                      onClick={() => handlePasswordTypeChange()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 226 226"
                        className="svg"
                      >
                        <g
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          className="svg-g"
                        >
                          <path d="M0,226v-226h226v226z" fill="none"></path>
                          <g fill="#ff1000">
                            <path d="M113,13.73656c-4.67116,0 -9.34219,2.25991 -11.91797,6.78883l-94.72578,166.59555c-5.14851,9.05745 1.51332,20.79906 11.9268,20.79906h189.43391c10.41348,0 17.07326,-11.74749 11.9268,-20.80789l-94.72578,-166.58672c-2.57578,-4.52891 -7.24681,-6.78883 -11.91797,-6.78883zM113,22.42344c1.54158,0 3.084,0.86009 4.06094,2.57781l94.72578,166.57789h-0.00883c1.95014,3.43288 -0.27257,7.30086 -4.06094,7.30086h-189.43391c-3.78836,0 -6.01765,-3.86524 -4.06977,-7.29203l94.72578,-166.58672c0.97694,-1.71773 2.51936,-2.57781 4.06094,-2.57781zM108.47117,76.84c-2.49504,0 -4.51117,2.02496 -4.51117,4.52v63.28c0,2.49504 2.00278,4.52 4.50234,4.52h9.05766c2.49504,0 4.51117,-2.02496 4.51117,-4.52l0.00883,-63.28c0,-2.49504 -2.01161,-4.52 -4.51117,-4.52zM108.47117,162.72c-2.49504,0 -4.51117,2.02496 -4.51117,4.52v9.04c0,2.49504 2.01161,4.52 4.51117,4.52h9.05766c2.49504,0 4.51117,-2.02496 4.51117,-4.52v-9.04c0,-2.49504 -2.01161,-4.52 -4.51117,-4.52z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="icon-password pass-status"
                      onClick={() => handlePasswordTypeChange()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 226 226"
                        className="svg"
                      >
                        <g
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          className="svg-g"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#5f6871">
                            <path d="M26.56706,16.43294l-10.13411,10.13411l19.8903,19.8903c-3.86363,3.14966 -7.30856,6.50437 -10.38607,9.86816c-13.115,14.62 -18.77051,29.67448 -18.77051,29.67448c0,0 21.5,57.33333 78.83333,57.33333c8.6,0 16.40831,-1.29168 23.43164,-3.51334c5.1536,-1.57472 9.88363,-3.64211 14.17936,-6.07488l21.82194,21.82194l10.13411,-10.13411zM86,28.66667c-8.6,0 -16.40831,1.29168 -23.43164,3.51335l11.89779,11.89779c3.58333,-0.71667 7.44885,-1.0778 11.53385,-1.0778c37.84,0 56.90725,30.60167 63.14225,43c-2.365,4.73 -6.73386,12.18837 -13.25553,19.49837l10.1761,10.17611c13.115,-14.62 18.77051,-29.67448 18.77051,-29.67448c0,0 -21.5,-57.33333 -78.83333,-57.33333zM46.49935,56.63346l14.83724,14.83724c-2.57388,4.29621 -4.00326,9.23264 -4.00326,14.5293c0,0.57333 -0.00168,1.21833 0.06999,1.79167c0.86,14.405 12.40001,25.94501 26.80501,26.80501c0.57333,0.07167 1.21833,0.06999 1.79167,0.06999c5.29666,0 10.23308,-1.42938 14.5293,-4.00326l12.40169,12.40169c-4.65413,2.21796 -9.81356,3.9265 -15.39713,4.85709c-3.655,0.71667 -7.44885,1.0778 -11.53385,1.0778c-37.84,0 -56.90725,-30.60167 -63.14225,-43c2.365,-4.73 6.6622,-12.18837 13.25553,-19.49837c2.93441,-3.36383 6.45081,-6.71847 10.38607,-9.86816zM87.79167,57.40332l26.80501,26.80501c-0.86,-14.405 -12.40001,-25.94501 -26.80501,-26.80501zM72.17057,82.30469l17.52474,17.52474c-1.1403,0.35254 -2.41484,0.5039 -3.69531,0.5039c-7.88333,0 -14.33333,-6.45 -14.33333,-14.33333c0,-1.28048 0.15137,-2.55502 0.5039,-3.69531z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  )}
                </div>
                {error.password ? (
                  <p className="p-small p-gray p-error">{error.password}</p>
                ) : (
                  <p
                    className={`p-small p-gray ${
                      error.confirmPassword ? "p-error" : ""
                    }`}
                  >
                    กรุณาใส่ 7-20 ตัวอักษร ประกอบด้วยตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว
                  </p>
                )}
                <label htmlFor="confirmPassword">
                  <p>ยืนยันรหัสผ่าน</p>
                </label>
                <div className="password-div">
                  <input
                    type={confirmPasswordIsShow ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`input-text ${
                      error.password || error.confirmPassword
                        ? "input-error"
                        : ""
                    }`}
                    onChange={(e) => handleInputChange(e)}
                    value={input.confirmPassword}
                  />
                  {error.password || error.confirmPassword ? (
                    <div
                      className="icon-password pass-error"
                      onClick={() => handleConfirmPasswordTypeChange()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 226 226"
                        className="svg"
                      >
                        <g
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          className="svg-g"
                        >
                          <path d="M0,226v-226h226v226z" fill="none"></path>
                          <g fill="#ff1000">
                            <path d="M113,13.73656c-4.67116,0 -9.34219,2.25991 -11.91797,6.78883l-94.72578,166.59555c-5.14851,9.05745 1.51332,20.79906 11.9268,20.79906h189.43391c10.41348,0 17.07326,-11.74749 11.9268,-20.80789l-94.72578,-166.58672c-2.57578,-4.52891 -7.24681,-6.78883 -11.91797,-6.78883zM113,22.42344c1.54158,0 3.084,0.86009 4.06094,2.57781l94.72578,166.57789h-0.00883c1.95014,3.43288 -0.27257,7.30086 -4.06094,7.30086h-189.43391c-3.78836,0 -6.01765,-3.86524 -4.06977,-7.29203l94.72578,-166.58672c0.97694,-1.71773 2.51936,-2.57781 4.06094,-2.57781zM108.47117,76.84c-2.49504,0 -4.51117,2.02496 -4.51117,4.52v63.28c0,2.49504 2.00278,4.52 4.50234,4.52h9.05766c2.49504,0 4.51117,-2.02496 4.51117,-4.52l0.00883,-63.28c0,-2.49504 -2.01161,-4.52 -4.51117,-4.52zM108.47117,162.72c-2.49504,0 -4.51117,2.02496 -4.51117,4.52v9.04c0,2.49504 2.01161,4.52 4.51117,4.52h9.05766c2.49504,0 4.51117,-2.02496 4.51117,-4.52v-9.04c0,-2.49504 -2.01161,-4.52 -4.51117,-4.52z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="icon-password pass-status"
                      onClick={() => handleConfirmPasswordTypeChange()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 226 226"
                        className="svg"
                      >
                        <g
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          className="svg-g"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#5f6871">
                            <path d="M26.56706,16.43294l-10.13411,10.13411l19.8903,19.8903c-3.86363,3.14966 -7.30856,6.50437 -10.38607,9.86816c-13.115,14.62 -18.77051,29.67448 -18.77051,29.67448c0,0 21.5,57.33333 78.83333,57.33333c8.6,0 16.40831,-1.29168 23.43164,-3.51334c5.1536,-1.57472 9.88363,-3.64211 14.17936,-6.07488l21.82194,21.82194l10.13411,-10.13411zM86,28.66667c-8.6,0 -16.40831,1.29168 -23.43164,3.51335l11.89779,11.89779c3.58333,-0.71667 7.44885,-1.0778 11.53385,-1.0778c37.84,0 56.90725,30.60167 63.14225,43c-2.365,4.73 -6.73386,12.18837 -13.25553,19.49837l10.1761,10.17611c13.115,-14.62 18.77051,-29.67448 18.77051,-29.67448c0,0 -21.5,-57.33333 -78.83333,-57.33333zM46.49935,56.63346l14.83724,14.83724c-2.57388,4.29621 -4.00326,9.23264 -4.00326,14.5293c0,0.57333 -0.00168,1.21833 0.06999,1.79167c0.86,14.405 12.40001,25.94501 26.80501,26.80501c0.57333,0.07167 1.21833,0.06999 1.79167,0.06999c5.29666,0 10.23308,-1.42938 14.5293,-4.00326l12.40169,12.40169c-4.65413,2.21796 -9.81356,3.9265 -15.39713,4.85709c-3.655,0.71667 -7.44885,1.0778 -11.53385,1.0778c-37.84,0 -56.90725,-30.60167 -63.14225,-43c2.365,-4.73 6.6622,-12.18837 13.25553,-19.49837c2.93441,-3.36383 6.45081,-6.71847 10.38607,-9.86816zM87.79167,57.40332l26.80501,26.80501c-0.86,-14.405 -12.40001,-25.94501 -26.80501,-26.80501zM72.17057,82.30469l17.52474,17.52474c-1.1403,0.35254 -2.41484,0.5039 -3.69531,0.5039c-7.88333,0 -14.33333,-6.45 -14.33333,-14.33333c0,-1.28048 0.15137,-2.55502 0.5039,-3.69531z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  )}
                </div>
                {error.confirmPassword ? (
                  <p className="p-small p-gray p-error">
                    {error.confirmPassword}
                  </p>
                ) : (
                  <div className="hide-error" />
                )}
                <div className="upload-grp">
                  <div className="upload-file-div">
                    <input
                      type="file"
                      className="input-file-hidden"
                      name="frontId"
                      ref={frontIdUpload}
                      onChange={(e) => handleIdCardChange(e)}
                    />
                    {idCardUpload.frontId ? (
                      <div
                        className={`upload-file ${
                          error.frontId ? "file-no file-error" : "file-have"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="16"
                          height="16"
                          viewBox="0 0 226 226"
                          className="svg"
                        >
                          <g
                            fill="none"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            strokeDashoffset="0"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            className="svg-g"
                          >
                            <path d="M0,226v-226h226v226z" fill="none"></path>
                            <g fill="#ffffff">
                              <path d="M172.6075,30.36875c-8.70453,0.42375 -17.37375,4.20219 -24.15375,10.735c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.01766,0.01766 -0.12359,-0.01766 -0.14125,0c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625l-85.0325,85.45625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-7.99828,8.66922 -7.83938,22.38813 0.565,30.7925c8.61625,8.63391 23.02375,8.63391 31.64,0c0.42375,-0.42375 0.79453,-0.90047 1.13,-1.4125c0.40609,-0.30016 0.77688,-0.63563 1.13,-0.98875l63.70375,-62.85625c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20063 -5.3675,2.68375l-63.70375,62.85625c-0.26484,0.31781 -0.49438,0.63563 -0.70625,0.98875c-0.08828,0.05297 -0.19422,0.08828 -0.2825,0.14125c-0.05297,0.08828 -0.08828,0.19422 -0.14125,0.2825c-0.45906,0.2825 -0.88281,0.61797 -1.27125,0.98875c-1.71266,1.71266 -4.21984,1.73031 -5.9325,0c-1.71266,-1.71266 -1.73031,-4.20219 0,-5.9325l86.30375,-86.7275c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625c7.43328,-6.85063 17.35609,-6.79766 22.8825,-1.27125c0.38844,0.37078 0.81219,0.70625 1.27125,0.98875c0.05297,0.05297 0.08828,0.08828 0.14125,0.14125c0.26484,0.35312 0.54734,0.68859 0.8475,0.98875c5.17328,5.17328 4.30813,16.08484 -2.96625,23.73c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375l-93.5075,95.90875c-0.30016,0.21187 -0.58266,0.45906 -0.8475,0.70625c-12.12984,12.12984 -33.01719,13.59531 -44.635,1.9775c-11.38828,-11.38828 -10.20531,-31.99312 1.4125,-44.21125c0.19422,-0.17656 0.38844,-0.37078 0.565,-0.565l76.98125,-76.13375c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20062 -5.3675,2.68375l-76.5575,75.71c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-18.29187,18.96281 -20.78141,50.42625 -1.55375,69.63625c19.08641,19.08641 50.37328,17.05594 69.35375,-0.98875c0.19422,-0.14125 0.38844,-0.2825 0.565,-0.42375c0.05297,-0.05297 0.08828,-0.08828 0.14125,-0.14125c0.08828,-0.08828 0.19422,-0.19422 0.2825,-0.2825c0,-0.05297 0,-0.08828 0,-0.14125l0.565,-0.565c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625l93.36625,-95.34375c0.67094,-0.61797 1.23594,-1.32422 1.695,-2.11875c11.91797,-13.63063 14.51344,-34.35906 1.4125,-47.46c-0.22953,-0.19422 -0.45906,-0.38844 -0.70625,-0.565c-0.40609,-0.61797 -0.88281,-1.18297 -1.4125,-1.695c-6.67406,-6.67406 -15.66109,-9.62266 -24.5775,-9.18125z"></path>
                            </g>
                          </g>
                        </svg>
                        <span>บัตรประชาชน (หน้า)</span>{" "}
                        <span
                          id="frontId"
                          onClick={(e) => handleRemoveIdCard(e)}
                        >
                          x
                        </span>
                      </div>
                    ) : (
                      <div
                        className={`upload-file file-no ${
                          error.frontId ? "file-error" : ""
                        }`}
                        onClick={() => handleClickUploadFrontIdCard()}
                        onMouseEnter={() => setFrontIdSvgHover("#000000")}
                        onMouseLeave={() => setFrontIdSvgHover("#8f8f8f")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="16"
                          height="16"
                          viewBox="0 0 226 226"
                          className="svg"
                        >
                          <g
                            fill="none"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            strokeDashoffset="0"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            className="svg-g"
                          >
                            <path d="M0,226v-226h226v226z" fill="none"></path>
                            <g fill={frontIdSvgHover}>
                              <path d="M172.6075,30.36875c-8.70453,0.42375 -17.37375,4.20219 -24.15375,10.735c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.01766,0.01766 -0.12359,-0.01766 -0.14125,0c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625l-85.0325,85.45625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-7.99828,8.66922 -7.83938,22.38813 0.565,30.7925c8.61625,8.63391 23.02375,8.63391 31.64,0c0.42375,-0.42375 0.79453,-0.90047 1.13,-1.4125c0.40609,-0.30016 0.77688,-0.63563 1.13,-0.98875l63.70375,-62.85625c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20063 -5.3675,2.68375l-63.70375,62.85625c-0.26484,0.31781 -0.49438,0.63563 -0.70625,0.98875c-0.08828,0.05297 -0.19422,0.08828 -0.2825,0.14125c-0.05297,0.08828 -0.08828,0.19422 -0.14125,0.2825c-0.45906,0.2825 -0.88281,0.61797 -1.27125,0.98875c-1.71266,1.71266 -4.21984,1.73031 -5.9325,0c-1.71266,-1.71266 -1.73031,-4.20219 0,-5.9325l86.30375,-86.7275c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625c7.43328,-6.85063 17.35609,-6.79766 22.8825,-1.27125c0.38844,0.37078 0.81219,0.70625 1.27125,0.98875c0.05297,0.05297 0.08828,0.08828 0.14125,0.14125c0.26484,0.35312 0.54734,0.68859 0.8475,0.98875c5.17328,5.17328 4.30813,16.08484 -2.96625,23.73c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375l-93.5075,95.90875c-0.30016,0.21187 -0.58266,0.45906 -0.8475,0.70625c-12.12984,12.12984 -33.01719,13.59531 -44.635,1.9775c-11.38828,-11.38828 -10.20531,-31.99312 1.4125,-44.21125c0.19422,-0.17656 0.38844,-0.37078 0.565,-0.565l76.98125,-76.13375c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20062 -5.3675,2.68375l-76.5575,75.71c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-18.29187,18.96281 -20.78141,50.42625 -1.55375,69.63625c19.08641,19.08641 50.37328,17.05594 69.35375,-0.98875c0.19422,-0.14125 0.38844,-0.2825 0.565,-0.42375c0.05297,-0.05297 0.08828,-0.08828 0.14125,-0.14125c0.08828,-0.08828 0.19422,-0.19422 0.2825,-0.2825c0,-0.05297 0,-0.08828 0,-0.14125l0.565,-0.565c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625l93.36625,-95.34375c0.67094,-0.61797 1.23594,-1.32422 1.695,-2.11875c11.91797,-13.63063 14.51344,-34.35906 1.4125,-47.46c-0.22953,-0.19422 -0.45906,-0.38844 -0.70625,-0.565c-0.40609,-0.61797 -0.88281,-1.18297 -1.4125,-1.695c-6.67406,-6.67406 -15.66109,-9.62266 -24.5775,-9.18125z"></path>
                            </g>
                          </g>
                        </svg>
                        บัตรประชาชน (หน้า)
                      </div>
                    )}
                    {error.frontId ? (
                      <p className="p-small p-gray p-error">{error.frontId}</p>
                    ) : (
                      <p className="p-small p-gray">
                        {"jpg or png;file size < 5 MB"}
                      </p>
                    )}
                  </div>
                  <div className="upload-file-div">
                    {
                      <>
                        <input
                          type="file"
                          className="input-file-hidden"
                          name="backId"
                          ref={backIdUpload}
                          onChange={(e) => handleIdCardChange(e)}
                        />
                        {idCardUpload.backId ? (
                          <div
                            className={`upload-file ${
                              error.backId ? "file-no file-error" : "file-have"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="16"
                              height="16"
                              viewBox="0 0 226 226"
                              className="svg"
                            >
                              <g
                                fill="none"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                className="svg-g"
                              >
                                <path
                                  d="M0,226v-226h226v226z"
                                  fill="none"
                                ></path>
                                <g fill="#ffffff">
                                  <path d="M172.6075,30.36875c-8.70453,0.42375 -17.37375,4.20219 -24.15375,10.735c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.01766,0.01766 -0.12359,-0.01766 -0.14125,0c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625l-85.0325,85.45625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-7.99828,8.66922 -7.83938,22.38813 0.565,30.7925c8.61625,8.63391 23.02375,8.63391 31.64,0c0.42375,-0.42375 0.79453,-0.90047 1.13,-1.4125c0.40609,-0.30016 0.77688,-0.63563 1.13,-0.98875l63.70375,-62.85625c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20063 -5.3675,2.68375l-63.70375,62.85625c-0.26484,0.31781 -0.49438,0.63563 -0.70625,0.98875c-0.08828,0.05297 -0.19422,0.08828 -0.2825,0.14125c-0.05297,0.08828 -0.08828,0.19422 -0.14125,0.2825c-0.45906,0.2825 -0.88281,0.61797 -1.27125,0.98875c-1.71266,1.71266 -4.21984,1.73031 -5.9325,0c-1.71266,-1.71266 -1.73031,-4.20219 0,-5.9325l86.30375,-86.7275c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625c7.43328,-6.85063 17.35609,-6.79766 22.8825,-1.27125c0.38844,0.37078 0.81219,0.70625 1.27125,0.98875c0.05297,0.05297 0.08828,0.08828 0.14125,0.14125c0.26484,0.35312 0.54734,0.68859 0.8475,0.98875c5.17328,5.17328 4.30813,16.08484 -2.96625,23.73c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375l-93.5075,95.90875c-0.30016,0.21187 -0.58266,0.45906 -0.8475,0.70625c-12.12984,12.12984 -33.01719,13.59531 -44.635,1.9775c-11.38828,-11.38828 -10.20531,-31.99312 1.4125,-44.21125c0.19422,-0.17656 0.38844,-0.37078 0.565,-0.565l76.98125,-76.13375c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20062 -5.3675,2.68375l-76.5575,75.71c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-18.29187,18.96281 -20.78141,50.42625 -1.55375,69.63625c19.08641,19.08641 50.37328,17.05594 69.35375,-0.98875c0.19422,-0.14125 0.38844,-0.2825 0.565,-0.42375c0.05297,-0.05297 0.08828,-0.08828 0.14125,-0.14125c0.08828,-0.08828 0.19422,-0.19422 0.2825,-0.2825c0,-0.05297 0,-0.08828 0,-0.14125l0.565,-0.565c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625l93.36625,-95.34375c0.67094,-0.61797 1.23594,-1.32422 1.695,-2.11875c11.91797,-13.63063 14.51344,-34.35906 1.4125,-47.46c-0.22953,-0.19422 -0.45906,-0.38844 -0.70625,-0.565c-0.40609,-0.61797 -0.88281,-1.18297 -1.4125,-1.695c-6.67406,-6.67406 -15.66109,-9.62266 -24.5775,-9.18125z"></path>
                                </g>
                              </g>
                            </svg>
                            <span>บัตรประชาชน (หลัง)</span>{" "}
                            <span
                              id="backId"
                              onClick={(e) => handleRemoveIdCard(e)}
                            >
                              x
                            </span>
                          </div>
                        ) : (
                          <div
                            className={`upload-file file-no ${
                              error.backId ? "file-error" : ""
                            }`}
                            onClick={() => handleClickUploadBackIdCard()}
                            onMouseEnter={() => setBackIdSvgHover("#000000")}
                            onMouseLeave={() => setBackIdSvgHover("#8f8f8f")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="16"
                              height="16"
                              viewBox="0 0 226 226"
                              className="svg"
                            >
                              <g
                                fill="none"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                className="svg-g"
                              >
                                <path
                                  d="M0,226v-226h226v226z"
                                  fill="none"
                                ></path>
                                <g fill={backIdSvgHover}>
                                  <path d="M172.6075,30.36875c-8.70453,0.42375 -17.37375,4.20219 -24.15375,10.735c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.01766,0.01766 -0.12359,-0.01766 -0.14125,0c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625l-85.0325,85.45625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-7.99828,8.66922 -7.83938,22.38813 0.565,30.7925c8.61625,8.63391 23.02375,8.63391 31.64,0c0.42375,-0.42375 0.79453,-0.90047 1.13,-1.4125c0.40609,-0.30016 0.77688,-0.63563 1.13,-0.98875l63.70375,-62.85625c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20063 -5.3675,2.68375l-63.70375,62.85625c-0.26484,0.31781 -0.49438,0.63563 -0.70625,0.98875c-0.08828,0.05297 -0.19422,0.08828 -0.2825,0.14125c-0.05297,0.08828 -0.08828,0.19422 -0.14125,0.2825c-0.45906,0.2825 -0.88281,0.61797 -1.27125,0.98875c-1.71266,1.71266 -4.21984,1.73031 -5.9325,0c-1.71266,-1.71266 -1.73031,-4.20219 0,-5.9325l86.30375,-86.7275c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625c7.43328,-6.85063 17.35609,-6.79766 22.8825,-1.27125c0.38844,0.37078 0.81219,0.70625 1.27125,0.98875c0.05297,0.05297 0.08828,0.08828 0.14125,0.14125c0.26484,0.35312 0.54734,0.68859 0.8475,0.98875c5.17328,5.17328 4.30813,16.08484 -2.96625,23.73c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375l-93.5075,95.90875c-0.30016,0.21187 -0.58266,0.45906 -0.8475,0.70625c-12.12984,12.12984 -33.01719,13.59531 -44.635,1.9775c-11.38828,-11.38828 -10.20531,-31.99312 1.4125,-44.21125c0.19422,-0.17656 0.38844,-0.37078 0.565,-0.565l76.98125,-76.13375c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20062 -5.3675,2.68375l-76.5575,75.71c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-18.29187,18.96281 -20.78141,50.42625 -1.55375,69.63625c19.08641,19.08641 50.37328,17.05594 69.35375,-0.98875c0.19422,-0.14125 0.38844,-0.2825 0.565,-0.42375c0.05297,-0.05297 0.08828,-0.08828 0.14125,-0.14125c0.08828,-0.08828 0.19422,-0.19422 0.2825,-0.2825c0,-0.05297 0,-0.08828 0,-0.14125l0.565,-0.565c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625l93.36625,-95.34375c0.67094,-0.61797 1.23594,-1.32422 1.695,-2.11875c11.91797,-13.63063 14.51344,-34.35906 1.4125,-47.46c-0.22953,-0.19422 -0.45906,-0.38844 -0.70625,-0.565c-0.40609,-0.61797 -0.88281,-1.18297 -1.4125,-1.695c-6.67406,-6.67406 -15.66109,-9.62266 -24.5775,-9.18125z"></path>
                                </g>
                              </g>
                            </svg>
                            บัตรประชาชน (หลัง)
                          </div>
                        )}
                        {error.backId ? (
                          <p className="p-small p-gray p-error">
                            {error.backId}
                          </p>
                        ) : (
                          <div className="hide-error" />
                        )}
                      </>
                    }
                  </div>
                </div>
                <div className="form-footer">
                  <button
                    className="btn btn-1 btn-width-50"
                    onClick={(e) => submitRegisterForm(e)}
                  >
                    ดำเนินการต่อ
                  </button>
                </div>
              </form>
            )}
            {showPage.ToS && (
              <form>
                <div className="tos-box">
                  <h1>Terms of Service</h1>
                  <br />
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero fuga odio, suscipit debitis tempore veritatis!
                  </h4>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime architecto quibusdam voluptates sequi qui blanditiis
                    autem temporibus debitis est obcaecati facere enim nihil
                    eveniet cupiditate illo rem tempore accusantium
                    necessitatibus voluptatem reiciendis consectetur porro, non
                    ratione. Asperiores similique ab error porro enim
                    praesentium iusto quo corporis in dolorum dolores
                    dignissimos, impedit nam voluptates vitae numquam deleniti
                    nemo laboriosam accusantium optio, culpa deserunt
                    necessitatibus inventore! Laborum quia possimus, ab ex quas
                    voluptate nisi veniam. Fugiat cum minus commodi placeat,
                    quibusdam veniam praesentium magni ab ullam repudiandae
                    iusto magnam voluptatum, eum rem provident modi molestias
                    vitae animi fugit sint dolorem cupiditate exercitationem
                    aspernatur. Nam ducimus fuga vero harum. Rem cumque
                    accusamus libero exercitationem velit doloribus veritatis
                    eos molestias, corporis repellendus unde maiores quae,
                    impedit labore ipsa neque quidem voluptatibus vel vero
                    nulla. Eligendi consequatur facere voluptate vel dolore sint
                    cumque, necessitatibus illum assumenda iste modi doloribus
                    iure ipsam omnis aut harum. Temporibus odit porro est
                    ratione obcaecati minima fugiat eius, dolorum ad atque
                    repudiandae, assumenda, ullam nesciunt! Et delectus harum
                    illum libero incidunt accusantium, saepe est animi amet
                    culpa nostrum laudantium architecto eius rem dignissimos,
                    facere nobis, provident recusandae illo laborum? Maxime
                    magnam suscipit perspiciatis praesentium sunt accusantium
                    minus minima ab ut iusto numquam aperiam, at nobis.
                    Laudantium dolorum soluta veniam necessitatibus amet in
                    totam eius suscipit magni illo unde, voluptatum, esse magnam
                    eligendi blanditiis assumenda molestias enim inventore
                    ipsum? Harum error, et dolorem quibusdam molestiae ea
                    deserunt quas similique corrupti velit quam ad recusandae
                    architecto iure, esse magni, nihil consequuntur. Nesciunt
                    maiores optio deleniti laborum suscipit, odio nisi
                    consectetur delectus sed labore ut sequi ipsam, quidem
                    obcaecati id voluptatem reiciendis accusamus iure, enim vel
                    quisquam. Aliquid, deleniti porro error deserunt quo libero
                    esse nihil animi incidunt quisquam magnam, architecto
                    recusandae ipsam sed eos ipsum assumenda fugiat suscipit, in
                    autem! Necessitatibus nemo natus, itaque nostrum enim
                    blanditiis numquam fuga officiis amet laborum dolorum rerum
                    temporibus non alias deleniti laboriosam? Eos commodi ut
                    animi eligendi maxime dicta autem voluptates iste ducimus,
                    neque nihil nam exercitationem iure esse natus pariatur
                    porro! Veniam hic officiis recusandae, facilis saepe
                    voluptas animi doloribus sequi eveniet beatae, voluptatibus
                    corporis molestiae alias commodi assumenda placeat sed
                    consequatur tenetur harum doloremque labore porro
                    consectetur. Dolor quo voluptate atque non earum odit et
                    ducimus, fugiat facere, eveniet praesentium vero est omnis
                    sit officia? Minus voluptatibus vitae provident fuga ad
                    molestiae et hic maiores maxime laboriosam! Maxime iste sit
                    porro nostrum. Odit omnis repellat magnam consequuntur eum
                    mollitia placeat cumque et commodi fugit, explicabo
                    similique vero tenetur recusandae ab possimus facere,
                    consequatur, voluptate id dignissimos vel aspernatur
                    voluptatum aperiam inventore. Saepe dolores vero veniam,
                    laudantium omnis est laborum placeat hic recusandae vitae
                    sunt expedita illo provident animi porro, fugiat consectetur
                    temporibus facilis reprehenderit mollitia quam dolor!
                    Deleniti iure quibusdam nemo obcaecati debitis fugiat,
                    numquam magnam vitae inventore excepturi? Ducimus quibusdam
                    magni voluptatibus quaerat adipisci dignissimos vero
                    laudantium excepturi, earum possimus, commodi voluptate
                    atque vitae officiis perspiciatis ea? Eligendi ratione
                    similique quae quisquam animi, nemo ipsum, assumenda
                    perspiciatis, nam delectus exercitationem voluptates
                    commodi!
                  </p>
                </div>
                <div className="agree-tos">
                  <label className="checkbox-container">
                    <p className="p-sup-head">ยอมรับเงื่อนไขการใช้งาน</p>
                    <input
                      type="checkbox"
                      className="default-checkbox-hide"
                      checked={checkbox}
                      onChange={(e) => handleCheckboxChange(e)}
                    />
                    <span className="custom-checkbox"></span>
                  </label>
                </div>
                <div className="footer-tos">
                  <button
                    className={`btn btn-width-80 ${
                      checkbox ? "btn-2" : "btn-disable"
                    }`}
                    onClick={(e) => handleSubmitToS(e)}
                  >
                    สมัครสมาชิก
                  </button>
                </div>
              </form>
            )}
            {showPage.CompleteRegis && (
              <form>
                <div className="complete-header">
                  <div className="complete-circle">
                    <div className="complete-circle-check"></div>
                  </div>
                </div>
                <div className="form-header">
                  <h1>ดีใจด้วย</h1>
                  <h1>คุณสมัครเรียบร้อย</h1>
                  <br />
                  <p className="p-sup-head">ขอบคุณที่สมัครสมาชิกกับเรา</p>
                  <p className="p-sup-head">
                    เราจะตรวจสอบใบสมัครของคุณและติดต่อกลับไปโดยเร็วที่สุด
                  </p>
                </div>
                <div className="footer-complete">
                  <button
                    className="btn btn-1 btn-width-80"
                    onClick={(e) => handleBackToMain(e)}
                  >
                    กลับไปยังหน้าหลัก
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="center-colossal">
            <CarouselComponent />
          </div>
        </div>
      </div>

      <style>
        {`
          * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
          }

          .header {
            display: flex;
            padding: 1.25rem;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0px -20px 20px 8px black;
          }
          
          .header-right {
            display: flex;
            align-items: center;
            column-gap: 2rem;
          }

          .header-right-btn-grp {
            display: flex;
            align-items: center;
            column-gap: 2rem;
          }

          .center {
            display: flex;
            width: 100%;
          }
          .center-form {
            width: 40%;
            display: flex;
            justify-content: center;
            padding: 2rem;
          }
          .center-form > form {
            width: 80%;
          }
          .center-colossal {
            background: linear-gradient(
              45deg,
              #9d24a5, #a026a854);
            height: auto;
            width: 60%;
          }

          /* !!!!! REGISTER PART CSS !!!!! */
          /* ===== BUTTON CSS ===== */
          .btn {
            padding: 0.75rem 2rem;
            border-radius: 12px;  
            outline: none;
          }
          .btn-1 {
            color: black;
            background: #fafafb;
            border: solid 1px #ebebeb;
          }
          .btn-2 {
            color: #ffffff;
            background: #a026a8;
            border: none;
          }
          .btn-width-50 {
            width: 50%;
            min-width: max-content;
          }

          /* ===== TEXT CSS ===== */
          .text-purple {
            color: #a026a8;
          }
          .p-small {
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
          }
          .p-sup-head {
            color: #6e6e6e;
          }
          .p-gray {
            color: #a7a8a7;
          }
          .p-error {
            color: red;
          }
          .hide-error {
            height: 16px;
            margin-bottom: 0.5rem;
          }

          /* ===== FORM ===== */
          .form-header {
            margin: 1.5rem 0;
            text-align: center;
          }
          .form-footer {
            text-align: center;
          }

          /* ===== INPUT CSS ===== */
          .input-text {
            padding: 0.5rem;
            border: 1px solid #d3d3d3;
            border-radius: 5px; 
            width: 100%;
          }
          .input-text:focus {
            outline: none !important;
            border: 1px solid #a026a8;
            box-shadow: 0 0 3px #a026a8;
          }
          .input-error {
            border: 1px solid red;
          }
          
          /* ===== SHOW/HIDE PASSWORD ===== */
          .password-div {
            position: relative;
          }
          .icon-password {
            position: absolute;
          }
          .pass-status {
            top: 7px;
            right: 6px;
          }
          .pass-error {
            color: red;
            top: 4px;
            right: 6px;
          }

          /* ===== UPLOAD ===== */
          .upload-grp {
            display: flex;
            column-gap: 15px;
            justify-content: center;
            margin: 1.5rem 0;
            flex-direction: row;
          }

          .upload-file-div {
            width: 50%;
          }

          .input-file-hidden {
            display: none;
          }

          .upload-file {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 0.5rem;
            padding: 0.75rem;
            border-radius: 5px;
            text-align: center;
            min-width: 200px;
          }
          .file-no {
            border: 1px solid #d3d3d3;
            color: #8f8f8f;
          }
          .file-no:hover {
            background: #fafafb;
            color: black;
          }
          .file-have {
            color: white;
            border: 1px solid #a026a8;
            background: #a026a8;
          }
          .file-error {
            border-color: red;
          }

          /* ===== ICON CSS ===== */
          .svg {
            fill:#000000;
          }
          .svg-g {
            mix-blend-mode: normal;
          }
          
          @media only screen and (max-width: 1400px) {
            .upload-grp {
              flex-direction: column;
            }

            .upload-file-div {
              width: 100%;
            }
          }

          /* !!!!! TOS PART CSS !!!!! */
          .tos-box {
            height: 50%;
            border: 1px solid #d3d3d3;
            border-radius: 10px;
            padding: 1rem 1.5rem;
            overflow: auto;
          }

          .agree-tos {
            margin-top: 1rem;
          }

          .footer-tos {
            margin-top: 3rem;
            display: flex;
            justify-content: center;
          }

          .btn-width-80 {
            width: 80%;
          }
          
          .btn-disable {
            outline: none;
            border: none;
            color: #cccccc;
            background: #ebebeb;
          }

          /* ===== CHECK BOX ===== */
          .checkbox-container {
            display: block;
            position: relative;
            padding-left: 3rem;
            cursor: pointer;
          }

          .default-checkbox-hide {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          .custom-checkbox {
            position: absolute;
            top: 2px;
            left: 0;
            height: 1.25rem;
            width: 1.25rem;
            background-color: #ffffff;
            border: 1px solid #d3d3d3;
            border-radius: 5px;
          }
          .custom-checkbox:after {
            content: "";
            position: absolute;
            display: none;
          }

          .checkbox-container .default-checkbox-hide:checked ~ .custom-checkbox {
            background-color: #a026a8;
            border-color: #a026a8;
          }.checkbox-container .default-checkbox-hide:checked ~ .custom-checkbox:after {
            display: block;
          }

          .checkbox-container .custom-checkbox:after {
            left: 0.325rem;
            top: 0.125rem;
            width: 25%;
            height: 50%;
            border: solid white;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(
              45deg
            );
            -ms-transform: rotate(45deg);
            transform: rotate(
              45deg
            );
          }

          /* !!!!! COMPLETE-REGIS PART CSS !!!!! */
          .complete-header {
            margin-top: 6rem;
            display: flex;
            justify-content: center;
          }

          .complete-circle {
            height: 150px;
            width: 150px;
            background: #a026a8;
            border-radius: 100%;
            position: relative;
          }
          .complete-circle-check {
            position: absolute;
            width: 20px;
            height: 50px;
            border-bottom: 4px solid white;
            border-right: 4px solid white;
            transform: rotate(
              45deg
            );
            top: 45px;
            left: 65px;
          }

          .footer-complete { 
            margin-top: 3rem;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}

export default RegisterPage;
