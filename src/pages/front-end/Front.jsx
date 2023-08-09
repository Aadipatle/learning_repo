import React from "react";
import "../front-end/Front.css";
import html from "../../assets/svg/html.png";
import css from "../../assets/svg/css.png";
import react from "../../assets/svg/react-logo-vector.svg";
import js from "../../assets/svg/js.png";
import Footer from "../../Components/footer/Footer";

function Front() {
  return (
    <>
      <div className="fheader">
        <div className="ficon">
          <a href="/landing">
            <h1>
              T<span>E</span>CHGICUS
            </h1>
          </a>
        </div>
        <div className="fitme">
          <h1>About</h1>
        </div>
      </div>
      <div className="fslider"></div>
      <br />

      <div className="front_end">
        <div className="front">
          <div className="f_container">
            <div className="container_text">
              <div className="container_heading">
                <h5>HTML</h5>
              </div>
              <br />
              <div className="container_p">
                <p>HTML stand for Hypertext Markup Language</p>
                <p>
                  The first essential skill for front-end developers is not
                  javascript as you may think, it's HTML. with HTML you can
                  create the structure of the UI.
                </p>
              </div>
            </div>
            <div className="container_img">
              <img src={html} alt="" />
            </div>
          </div>
        </div>

        <div className="front">
          <div className="f_container css">
            <div className="container_text">
              <div className="container_heading">
                <h5>CSS</h5>
              </div>
              <br />
              <div className="container_p">
                <p>CSS stand for Cascading Style Sheets</p>
                <p>
                  The next step in the process, and also the fundamental one is
                  to learn CSS. its the language which allows you to make HTML
                  pretty and add it a litte bit of style, but not make it alive.
                </p>
              </div>
            </div>
            <div className="container_img">
              <img src={css} alt="" />
            </div>
          </div>
        </div>

        <div className="front">
          <div className="f_container">
            <div className="container_text">
              <div className="container_heading">
                <h5>JAVASCRIPT</h5>
              </div>
              <br />
              <div className="container_p">
                <p>
                  Jacascript is a Interpreted Scripting Programming Language.
                </p>
                <p>
                  The third step is to learn javascript, the main language which
                  front-end developer needs to know. this will allow you to make
                  HTML & CS alive, you can start building actions, give elements
                  of your website behavior, create functions, methods, objects.
                </p>
              </div>
            </div>
            <div className="container_img">
              <img src={js} alt="" />
            </div>
          </div>
        </div>
        <div className="frame">
          <h1>Front-End Framework</h1>
        </div>
        <div className="front">
          <div className="f_container css">
            <div className="container_text">
              <div className="container_heading">
                <h5>REACT.Js</h5>
              </div>
              <br />
              <div className="container_p">
                <p>
                  React.Js is a Open-Source JavaScript Framework and Library
                </p>
                <p>
                  Maintaned by Facebook.The community is constantly evolving.
                  Virtual DOM high performance.Suitable for application with
                  high trafic often updated
                </p>
              </div>
            </div>
            <div className="container_img">
              <img src={react} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Front;
