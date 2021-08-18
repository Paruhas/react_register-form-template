import { useRef, useState } from "react";
import RegisterComponent from "../component/RegisterComponent";

const database = [
  {
    email: "bayulgang@hotmail.com",
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

  const [tosPage, setTosPage] = useState(false);

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

  const SubmitForm = (e) => {
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

      alert("pass");
      setTosPage(true);
    } catch (error) {
      console.log(error);
    }
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
              <button className="btn btn-2">Sing up</button>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="center-form">
            <form>
              <div className="form-header">
                <h1>สมัครสมาชิก</h1>
                <p className="p-sup-head">Register form example</p>
              </div>
              {!tosPage ? (
                <RegisterComponent
                  error={error}
                  handleInputChange={handleInputChange}
                  input={input}
                  passwordIsShow={passwordIsShow}
                  handlePasswordTypeChange={handlePasswordTypeChange}
                  confirmPasswordIsShow={confirmPasswordIsShow}
                  handleConfirmPasswordTypeChange={
                    handleConfirmPasswordTypeChange
                  }
                  frontIdUpload={frontIdUpload}
                  handleIdCardChange={handleIdCardChange}
                  idCardUpload={idCardUpload}
                  handleRemoveIdCard={handleRemoveIdCard}
                  handleClickUploadFrontIdCard={handleClickUploadFrontIdCard}
                  setFrontIdSvgHover={setFrontIdSvgHover}
                  frontIdSvgHover={frontIdSvgHover}
                  backIdUpload={backIdUpload}
                  handleClickUploadBackIdCard={handleClickUploadBackIdCard}
                  setBackIdSvgHover={setBackIdSvgHover}
                  backIdSvgHover={backIdSvgHover}
                  SubmitForm={SubmitForm}
                />
              ) : (
                <>
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
                      Maxime architecto quibusdam voluptates sequi qui
                      blanditiis autem temporibus debitis est obcaecati facere
                      enim nihil eveniet cupiditate illo rem tempore accusantium
                      necessitatibus voluptatem reiciendis consectetur porro,
                      non ratione. Asperiores similique ab error porro enim
                      praesentium iusto quo corporis in dolorum dolores
                      dignissimos, impedit nam voluptates vitae numquam deleniti
                      nemo laboriosam accusantium optio, culpa deserunt
                      necessitatibus inventore! Laborum quia possimus, ab ex
                      quas voluptate nisi veniam. Fugiat cum minus commodi
                      placeat, quibusdam veniam praesentium magni ab ullam
                      repudiandae iusto magnam voluptatum, eum rem provident
                      modi molestias vitae animi fugit sint dolorem cupiditate
                      exercitationem aspernatur. Nam ducimus fuga vero harum.
                      Rem cumque accusamus libero exercitationem velit doloribus
                      veritatis eos molestias, corporis repellendus unde maiores
                      quae, impedit labore ipsa neque quidem voluptatibus vel
                      vero nulla. Eligendi consequatur facere voluptate vel
                      dolore sint cumque, necessitatibus illum assumenda iste
                      modi doloribus iure ipsam omnis aut harum. Temporibus odit
                      porro est ratione obcaecati minima fugiat eius, dolorum ad
                      atque repudiandae, assumenda, ullam nesciunt! Et delectus
                      harum illum libero incidunt accusantium, saepe est animi
                      amet culpa nostrum laudantium architecto eius rem
                      dignissimos, facere nobis, provident recusandae illo
                      laborum? Maxime magnam suscipit perspiciatis praesentium
                      sunt accusantium minus minima ab ut iusto numquam aperiam,
                      at nobis. Laudantium dolorum soluta veniam necessitatibus
                      amet in totam eius suscipit magni illo unde, voluptatum,
                      esse magnam eligendi blanditiis assumenda molestias enim
                      inventore ipsum? Harum error, et dolorem quibusdam
                      molestiae ea deserunt quas similique corrupti velit quam
                      ad recusandae architecto iure, esse magni, nihil
                      consequuntur. Nesciunt maiores optio deleniti laborum
                      suscipit, odio nisi consectetur delectus sed labore ut
                      sequi ipsam, quidem obcaecati id voluptatem reiciendis
                      accusamus iure, enim vel quisquam. Aliquid, deleniti porro
                      error deserunt quo libero esse nihil animi incidunt
                      quisquam magnam, architecto recusandae ipsam sed eos ipsum
                      assumenda fugiat suscipit, in autem! Necessitatibus nemo
                      natus, itaque nostrum enim blanditiis numquam fuga
                      officiis amet laborum dolorum rerum temporibus non alias
                      deleniti laboriosam? Eos commodi ut animi eligendi maxime
                      dicta autem voluptates iste ducimus, neque nihil nam
                      exercitationem iure esse natus pariatur porro! Veniam hic
                      officiis recusandae, facilis saepe voluptas animi
                      doloribus sequi eveniet beatae, voluptatibus corporis
                      molestiae alias commodi assumenda placeat sed consequatur
                      tenetur harum doloremque labore porro consectetur. Dolor
                      quo voluptate atque non earum odit et ducimus, fugiat
                      facere, eveniet praesentium vero est omnis sit officia?
                      Minus voluptatibus vitae provident fuga ad molestiae et
                      hic maiores maxime laboriosam! Maxime iste sit porro
                      nostrum. Odit omnis repellat magnam consequuntur eum
                      mollitia placeat cumque et commodi fugit, explicabo
                      similique vero tenetur recusandae ab possimus facere,
                      consequatur, voluptate id dignissimos vel aspernatur
                      voluptatum aperiam inventore. Saepe dolores vero veniam,
                      laudantium omnis est laborum placeat hic recusandae vitae
                      sunt expedita illo provident animi porro, fugiat
                      consectetur temporibus facilis reprehenderit mollitia quam
                      dolor! Deleniti iure quibusdam nemo obcaecati debitis
                      fugiat, numquam magnam vitae inventore excepturi? Ducimus
                      quibusdam magni voluptatibus quaerat adipisci dignissimos
                      vero laudantium excepturi, earum possimus, commodi
                      voluptate atque vitae officiis perspiciatis ea? Eligendi
                      ratione similique quae quisquam animi, nemo ipsum,
                      assumenda perspiciatis, nam delectus exercitationem
                      voluptates commodi!
                    </p>
                  </div>
                  <div className="agree-tos">
                    <label className="checkbox-container">
                      <p className="p-sup-head">ยอมรับเงื่อนไขการใช้งาน</p>
                      <input
                        type="checkbox"
                        className="default-checkbox-hide"
                        // checked={item.isChecked}
                        // onChange={(e) => handleChangChecked(e, item)}
                      />
                      <span className="custom-checkbox"></span>
                    </label>
                  </div>
                  <div className="footer-tos">
                    <button className="btn btn-2 btn-width-80">
                      สมัครสมาชิก
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
          <div className="center-colossal"></div>
        </div>
      </div>

      <style>
        {`
          * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
          }

          .App {
            height: 100vh;
            width: 100vw;
          }

          .header {
            display: flex;
            padding: 1.25rem;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0px -20px 20px 8px black;
            height: 10%;
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
            height: 90%;
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
        `}
      </style>
    </>
  );
}

export default RegisterPage;
