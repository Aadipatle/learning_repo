import React from "react";
import S from "../../assets/svg/shoping.png";
import "../course/Course.css";

function Course() {
  return (
    <div className="s">
      <div className="page_header2">
        <h3>
          T<span>E</span>CHGICUS
        </h3>
        <ul>
          <h4>Courses</h4>
        </ul>
      </div>
      <div className="div">
      <div className="contants">
        <div className="box">
          <h5>front end development </h5>
          <div className="price">
            <div className="price1">
              <span>&#8377; 499</span>
            </div>
            <div className="price2">
              <a href="#">
                <button>explore</button>
              </a>
            </div>
          </div>
        </div> 
        <div className="box">
          <h5>back-end development</h5>
          <div className="price">
            <div className="price1">
              <span>&#8377; 499</span>
            </div>
            <div className="price2">
              <a href="#">
                <button>explore</button>
              </a>
            </div>
          </div>
        </div>
        <div className="box">
          <h5>full stack development</h5>
          <div className="price">
            <div className="price1">
              <span>&#8377; 499</span>
            </div>
            <div className="price2">
              <a href="#">
                <button>explore</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contents2">
        <div className="box">
          <h5>ui&ux</h5>
          <div className="price">
            <div className="price1">
              <span>&#8377; 499</span>
            </div>
            <div className="price2">
              <a href="#">
                <button>explore</button>
              </a>
            </div>
          </div>
        </div>
        <div className="box">
          <h5>c,c++</h5>
          <div className="price">
            <div className="price1">
              <span>&#8377; 499</span>
            </div>
            <div className="price2"> 
              <a href="#">
                <button>explore</button>
              </a>
            </div>
          </div>
        </div>
        <div className="box">
          <h5>python</h5>
          <div className="price">
            <div className="price1">
              <span>&#8377; 499</span>
            </div>
            <div className="price2">
              <a href="#">
                <button>explore</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Course;
