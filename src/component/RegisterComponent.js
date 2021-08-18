import React from "react";

function RegisterComponent(props) {
  const {
    error,
    handleInputChange,
    input,
    passwordIsShow,
    handlePasswordTypeChange,
    confirmPasswordIsShow,
    handleConfirmPasswordTypeChange,
    frontIdUpload,
    handleIdCardChange,
    idCardUpload,
    handleRemoveIdCard,
    handleClickUploadFrontIdCard,
    setFrontIdSvgHover,
    frontIdSvgHover,
    backIdUpload,
    handleClickUploadBackIdCard,
    setBackIdSvgHover,
    backIdSvgHover,
    SubmitForm,
  } = props;
  return (
    <>
      <label htmlFor="firstName">
        <p>ชื่อ</p>
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        className={`input-text ${error.firstName ? "input-error" : ""}`}
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
        className={`input-text ${error.lastName ? "input-error" : ""}`}
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
            error.password || error.confirmPassword ? "input-error" : ""
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
          className={`p-small p-gray ${error.confirmPassword ? "p-error" : ""}`}
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
            error.password || error.confirmPassword ? "input-error" : ""
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
        <p className="p-small p-gray p-error">{error.confirmPassword}</p>
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
              <span id="frontId" onClick={(e) => handleRemoveIdCard(e)}>
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
            <p className="p-small p-gray">{"jpg or png;file size < 5 MB"}</p>
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
                      <path d="M0,226v-226h226v226z" fill="none"></path>
                      <g fill="#ffffff">
                        <path d="M172.6075,30.36875c-8.70453,0.42375 -17.37375,4.20219 -24.15375,10.735c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.01766,0.01766 -0.12359,-0.01766 -0.14125,0c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625l-85.0325,85.45625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-7.99828,8.66922 -7.83938,22.38813 0.565,30.7925c8.61625,8.63391 23.02375,8.63391 31.64,0c0.42375,-0.42375 0.79453,-0.90047 1.13,-1.4125c0.40609,-0.30016 0.77688,-0.63563 1.13,-0.98875l63.70375,-62.85625c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20063 -5.3675,2.68375l-63.70375,62.85625c-0.26484,0.31781 -0.49438,0.63563 -0.70625,0.98875c-0.08828,0.05297 -0.19422,0.08828 -0.2825,0.14125c-0.05297,0.08828 -0.08828,0.19422 -0.14125,0.2825c-0.45906,0.2825 -0.88281,0.61797 -1.27125,0.98875c-1.71266,1.71266 -4.21984,1.73031 -5.9325,0c-1.71266,-1.71266 -1.73031,-4.20219 0,-5.9325l86.30375,-86.7275c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625c7.43328,-6.85063 17.35609,-6.79766 22.8825,-1.27125c0.38844,0.37078 0.81219,0.70625 1.27125,0.98875c0.05297,0.05297 0.08828,0.08828 0.14125,0.14125c0.26484,0.35312 0.54734,0.68859 0.8475,0.98875c5.17328,5.17328 4.30813,16.08484 -2.96625,23.73c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375l-93.5075,95.90875c-0.30016,0.21187 -0.58266,0.45906 -0.8475,0.70625c-12.12984,12.12984 -33.01719,13.59531 -44.635,1.9775c-11.38828,-11.38828 -10.20531,-31.99312 1.4125,-44.21125c0.19422,-0.17656 0.38844,-0.37078 0.565,-0.565l76.98125,-76.13375c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20062 -5.3675,2.68375l-76.5575,75.71c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-18.29187,18.96281 -20.78141,50.42625 -1.55375,69.63625c19.08641,19.08641 50.37328,17.05594 69.35375,-0.98875c0.19422,-0.14125 0.38844,-0.2825 0.565,-0.42375c0.05297,-0.05297 0.08828,-0.08828 0.14125,-0.14125c0.08828,-0.08828 0.19422,-0.19422 0.2825,-0.2825c0,-0.05297 0,-0.08828 0,-0.14125l0.565,-0.565c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625l93.36625,-95.34375c0.67094,-0.61797 1.23594,-1.32422 1.695,-2.11875c11.91797,-13.63063 14.51344,-34.35906 1.4125,-47.46c-0.22953,-0.19422 -0.45906,-0.38844 -0.70625,-0.565c-0.40609,-0.61797 -0.88281,-1.18297 -1.4125,-1.695c-6.67406,-6.67406 -15.66109,-9.62266 -24.5775,-9.18125z"></path>
                      </g>
                    </g>
                  </svg>
                  <span>บัตรประชาชน (หลัง)</span>{" "}
                  <span id="backId" onClick={(e) => handleRemoveIdCard(e)}>
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
                      <path d="M0,226v-226h226v226z" fill="none"></path>
                      <g fill={backIdSvgHover}>
                        <path d="M172.6075,30.36875c-8.70453,0.42375 -17.37375,4.20219 -24.15375,10.735c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.01766,0.01766 -0.12359,-0.01766 -0.14125,0c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625l-85.0325,85.45625c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-7.99828,8.66922 -7.83938,22.38813 0.565,30.7925c8.61625,8.63391 23.02375,8.63391 31.64,0c0.42375,-0.42375 0.79453,-0.90047 1.13,-1.4125c0.40609,-0.30016 0.77688,-0.63563 1.13,-0.98875l63.70375,-62.85625c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20063 -5.3675,2.68375l-63.70375,62.85625c-0.26484,0.31781 -0.49438,0.63563 -0.70625,0.98875c-0.08828,0.05297 -0.19422,0.08828 -0.2825,0.14125c-0.05297,0.08828 -0.08828,0.19422 -0.14125,0.2825c-0.45906,0.2825 -0.88281,0.61797 -1.27125,0.98875c-1.71266,1.71266 -4.21984,1.73031 -5.9325,0c-1.71266,-1.71266 -1.73031,-4.20219 0,-5.9325l86.30375,-86.7275c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625c7.43328,-6.85063 17.35609,-6.79766 22.8825,-1.27125c0.38844,0.37078 0.81219,0.70625 1.27125,0.98875c0.05297,0.05297 0.08828,0.08828 0.14125,0.14125c0.26484,0.35312 0.54734,0.68859 0.8475,0.98875c5.17328,5.17328 4.30813,16.08484 -2.96625,23.73c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375l-93.5075,95.90875c-0.30016,0.21187 -0.58266,0.45906 -0.8475,0.70625c-12.12984,12.12984 -33.01719,13.59531 -44.635,1.9775c-11.38828,-11.38828 -10.20531,-31.99312 1.4125,-44.21125c0.19422,-0.17656 0.38844,-0.37078 0.565,-0.565l76.98125,-76.13375c2.84266,-2.68375 3.63719,-6.90359 1.95984,-10.43484c-1.67734,-3.53125 -5.42047,-5.59703 -9.30484,-5.10266c-2.04812,0.26484 -3.93734,1.20062 -5.3675,2.68375l-76.5575,75.71c-0.14125,0.14125 -0.2825,0.2825 -0.42375,0.42375c-0.19422,0.22953 -0.38844,0.45906 -0.565,0.70625c-18.29187,18.96281 -20.78141,50.42625 -1.55375,69.63625c19.08641,19.08641 50.37328,17.05594 69.35375,-0.98875c0.19422,-0.14125 0.38844,-0.2825 0.565,-0.42375c0.05297,-0.05297 0.08828,-0.08828 0.14125,-0.14125c0.08828,-0.08828 0.19422,-0.19422 0.2825,-0.2825c0,-0.05297 0,-0.08828 0,-0.14125l0.565,-0.565c0.19422,-0.22953 0.38844,-0.45906 0.565,-0.70625l93.36625,-95.34375c0.67094,-0.61797 1.23594,-1.32422 1.695,-2.11875c11.91797,-13.63063 14.51344,-34.35906 1.4125,-47.46c-0.22953,-0.19422 -0.45906,-0.38844 -0.70625,-0.565c-0.40609,-0.61797 -0.88281,-1.18297 -1.4125,-1.695c-6.67406,-6.67406 -15.66109,-9.62266 -24.5775,-9.18125z"></path>
                      </g>
                    </g>
                  </svg>
                  บัตรประชาชน (หลัง)
                </div>
              )}
              {error.backId ? (
                <p className="p-small p-gray p-error">{error.backId}</p>
              ) : (
                <div className="hide-error" />
              )}
            </>
          }
        </div>
      </div>
      <div className="form-footer">
        <button className="btn btn-1" onClick={(e) => SubmitForm(e)}>
          ดำเนินการต่อ
        </button>
      </div>
    </>
  );
}

export default RegisterComponent;
