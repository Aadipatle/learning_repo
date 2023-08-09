import React from "react";
import "../LandingPage/landing.css";
import Vi from "../../assets/svg/particles.mp4";
import aadi from "../../assets/svg/a.jpg";
import i from "../../assets/svg/link.svg";
import insta from "../../assets/svg/insta.svg";
import gmail from "../../assets/svg/gmail.svg";
import youtub from "../../assets/svg/toutub.svg";
import fecbook from "../../assets/svg/facebook.svg";
import google from "../../assets/svg/google.svg";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Background from "../../Components/background/background";

function landing() {
  return (
    <div className="full_page">
      <Header />
      
        <div className="content">
          <div className="heading">
            <h1>Hello</h1>
          
         
          <div className="para">
            <p>learn how to enable technology for your </p>
            <span>business</span>
          </div>
          <div className="btn">
            <button>learn</button>
          </div>
          </div>
        </div>
      

      <div className="online_content">
        <div className="vcontent">
          <div className="video">
            <h3>CONTINUE WATCHING</h3>
            <video
              src={Vi}
              width="600"
              height="300"
              controls="controls"
              autoplay="true"
            ></video>
            <video
              src={Vi}
              width="600"
              height="300"
              controls="controls"
              autoplay="true"
            ></video>
            <video
              src={Vi}
              width="600"
              height="300"
              controls="controls"
              autoplay="true"
            ></video>
          </div>
        </div>
      </div>
      
        <h6>Courses</h6>
       
      <div className="courses">
        <div className="bitem">
          <div className="item1">
            <h4>front-end development</h4>
            <a href="/front-end">explore</a>
          </div>
          <div className="item1">
            <h4>full stack development</h4>
            <a href="#">explore</a>
          </div>
          <div className="item1">
            <h4>ui&ux</h4>
            <a href="#">explore</a>
          </div>
        </div>
        <div className="fitem">
          <div className="item2">
            <h4>back-end development</h4>
            <a href="#">explore</a>
          </div>
          <div className="item2">
            <h4>c,c++</h4>
            <a href="#">explore</a>
          </div>
          <div className="item2">
            <h4>python</h4>
            <a href="#">explore</a>
          </div>
        </div>
      </div>
      <div className="about_heading">
        <h1>About us</h1>
      </div>

      <div className="about">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={aadi} alt="Avatar" />
            </div>
            <div class="flip-card-back">
              <h1>Abhisekh (CEO)</h1>
              <p>woking with flutter</p>
              <p>App developer</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={aadi} alt="Avatar" />
            </div>
            <div class="flip-card-back">
              <h1>Aditya Patle</h1>
              <p>Front End Develover </p>
              <p>I am working with React js</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={aadi} alt="Avatar" />
            </div>
            <div class="flip-card-back">
              <h1>Aditya Patle</h1>
              <p>Front End Develover </p>
              <p>I am working with React js</p>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="discription_content">
          <p>
            {" "}
            <span>"</span>learn how to enable technology for your business
          </p>
          <p>learn how to enable technology for your business</p>
          <p>learn how to enable technology for your business</p>
        </div>
      </div>
      <div className="landing_footer">
        <div className="landing_icon">
          <a href="https://www.google.com/">
            {" "}
            <img src={google} alt="" />
          </a>
          <a href="https://www.fecbook.com/">
            {" "}
            <img src={fecbook} alt="" />
          </a>
          <a href="https://www.linkdin.com/">
            <img src={i} alt="" />
          </a>
          <a href="https://www.gmail.com/">
            <img src={gmail} alt="" />
          </a>
          <a href="https://www.youtub.com/">
            <img src={youtub} alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
      <Footer/>
      </div>
    
  );
}

export default landing;
