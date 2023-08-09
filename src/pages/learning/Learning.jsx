import React from "react";
import S from "../../assets/svg/shoping.png";
import "../learning/Learning.css";
import line from "../../assets/svg/hr.png"
import line2 from "../../assets/svg/hr2.png"
function Learning() {
  return (
    <div>
      <div className="page_header2">
        <h3>
          T<span>E</span>CHGICUS
        </h3>
        <ul>
          <h4>My learning</h4>
        </ul> 
        <div className="svg">
          <a href="">
            <img src={S} alt="" />
          </a>
        </div>
      </div>


      <div className="learning_content">
        <div className="learning_container">
          <div className="learning_content1">
            <h4>full stack development</h4>
          </div>
          <div className="learning_content1">
            <h4>aws</h4>
          </div>
        </div>
        <div className="learning_container2">
          <div className="learning_content2">
            <h5>full stack development</h5>
            <h5><span>101 </span>lessesons</h5>
            <p>valid for 3 years</p>
            <img src={line} alt="" />
            <p>10% complete</p>
            <a href="#"><button>lesssons</button></a>
          </div>
          <div className="learning_content2">
            <h5>full stack development</h5>
            <h5><span>101 </span>lessesons</h5>
            <p>valid for 3 years</p>
            <img src={line2} alt="" />
            <p>55% complete</p>
            <a href="#"><button>lesssons</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
