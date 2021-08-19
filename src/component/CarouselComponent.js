import React from "react";
import { Carousel } from "antd";
import "antd/lib/carousel/style/index.css";

import img1 from "../image/adolfo-felix-Yi9-QIObQ1o-unsplash.jpg";
import img2 from "../image/brett-jordan--AWU0f2yH_k-unsplash.jpg";
import img3 from "../image/nick-fewings-2ykkF3oQb_c-unsplash.jpg";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: "max-content",
  width: "50%",
  margin: "auto",
  marginTop: "5rem",
  // lineHeight: "160px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const CarouselComponent = () => {
  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <div style={contentStyle}>
            {/* <div className="div-img"> */}
            <img src={img1} alt="img1" className="img1" />
            {/* </div> */}
            <h1 className="color-white">Example header 1</h1>
            <p className="color-white ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ut
              animi placeat ratione tempore quasi amet sed impedit, recusandae
              nemo est labore repellendus illo dolor?
            </p>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            {/* <div className="div-img"> */}
            <img src={img2} alt="img2" className="img2" />
            {/* </div> */}
            <h1 className="color-white">Example header 2</h1>
            <p className="color-white ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ut
              animi placeat ratione tempore quasi amet sed impedit, recusandae
              nemo est labore repellendus illo dolor?
            </p>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            {/* <div className="div-img"> */}
            <img src={img3} alt="img3" className="img3" />
            {/* </div> */}
            <h1 className="color-white">Example header 3</h1>
            <p className="color-white ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ut
              animi placeat ratione tempore quasi amet sed impedit, recusandae
              nemo est labore repellendus illo dolor?
            </p>
          </div>
        </div>
      </Carousel>

      <style>
        {`
          .p-small {
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
          }

          .color-white {
            color: #fff;
          }

          .div-item {
            text-align: center;
            margin: auto;
            width: 50%;
          }

          .div-img {
            width: 300px;
            height: 300px;
            overflow: hidden;
            object-fit: cover;
            object-position: 50% 50%;
          }

          .img1 , .img2 , .img3 {
            border: none;
            border-radius: 25px;
            margin-bottom: 3rem;
            align-self: center;
            height: 300px;
            overflow: hidden;
            object-fit: cover;
            object-position: 50% 50%;
            box-shadow: 6px 6px 20px 0px #0000005c;
          }

          .ant-carousel .slick-dots li.slick-active {
            width: auto;
          }

          .ant-carousel .slick-dots li {
            width: max-content;
          }

          .ant-carousel .slick-dots li button  {
            width: 10px;
            height: 10px;
            border-radius: 100%;
          }

          .ant-carousel .slick-dots-bottom {
            bottom: -2rem;
          }        
        `}
      </style>
    </>
  );
};

export default CarouselComponent;
