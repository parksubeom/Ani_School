import React from "react";
import "../Style/ViewSection.css";
import Title from "../component/Title.jsx";

function ViewSection({
  randomface,
  randomcolor,
  randomeyes,
  randommouth,
  randomacc,
  randompattern,
  randombackground,
  sectionflash,
}) {
  let backgroundurl = `https://anischool.s3.ap-northeast-2.amazonaws.com/img/background/background${randombackground}.png`;
  let faceurl = `https://anischool.s3.ap-northeast-2.amazonaws.com/img/face/face${randomface}/color${randomcolor}.png`;
  let eyesurl = `https://anischool.s3.ap-northeast-2.amazonaws.com/img/eye/eye${randomeyes}.png`;
  let mouthurl = `https://anischool.s3.ap-northeast-2.amazonaws.com/img/mouth/mouth${randommouth}.png`;
  let accurl = `https://anischool.s3.ap-northeast-2.amazonaws.com/img/acc/acc${randomacc}.png`;
  let patternurl = `https://anischool.s3.ap-northeast-2.amazonaws.com/img/pattern/pattern${randompattern}.png`;

  return (
    <div>
      <aside className="ViewSection">
        <div className="viewImg_box anicon ">
          <div className="capture-box">
            {sectionflash ? <div className="flash1"></div> : null}
            <div className="animal_Img">
              <img alt="background_" src={backgroundurl} />
            </div>
            <div className="animal_Img">
              <img alt="face_" src={faceurl} />
            </div>
            <div className="animal_Img">
              <img alt="pattern_" src={patternurl} />
            </div>
            <div className="animal_Img">
              <img alt="eyes_" src={eyesurl} />
            </div>
            <div className="animal_Img">
              <img alt="mouth_" src={mouthurl} />
            </div>
            <div className="animal_Img">
              <img alt="acc_" src={accurl} />
            </div>
          </div>

          <div className="capture-box-max">
            <div className="animal_Img">
              <img alt="background_" src={backgroundurl} />
            </div>
            <div className="animal_Img">
              <img alt="face_" src={faceurl} />
            </div>
            <div className="animal_Img">
              <img alt="pattern_" src={patternurl} />
            </div>
            <div className="animal_Img">
              <img alt="eyes_" src={eyesurl} />
            </div>
            <div className="animal_Img">
              <img alt="mouth_" src={mouthurl} />
            </div>
            <div className="animal_Img">
              <img alt="acc_" src={accurl} />
            </div>
          </div>
        </div>
        <Title />
      </aside>
    </div>
  );
}
export default ViewSection;
