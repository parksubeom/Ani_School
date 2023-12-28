import React from "react";
import "../Style/ViewSection.css";
import Title from "../component/Title.jsx";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  randomFace,
  randomColor,
  randomEyes,
  randomMouth,
  randomAcc,
  randomPattern,
  randomBackground,
  sectionFlash,
} from "/Users/user/Ani_School-1/src/recoil/Atoms.ts";

function ViewSection() {
  const [randomface] = useRecoilState(randomFace);
  const [randomcolor] = useRecoilState(randomColor);
  const [randomeyes] = useRecoilState(randomEyes);
  const [randommouth] = useRecoilState(randomMouth);
  const [randomacc] = useRecoilState(randomAcc);
  const [randompattern] = useRecoilState(randomPattern);
  const [randombackground] = useRecoilState(randomBackground);
  const [sectionflash] = useRecoilState(sectionFlash);
  let backgroundurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img/background/background${randombackground}.png`;
  let faceurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img/face/face${randomface}/color${randomcolor}.png`;
  let eyesurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img/eye/eye${randomeyes}.png`;
  let mouthurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img/mouth/mouth${randommouth}.png`;
  let accurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img/acc/acc${randomacc}.png`;
  let patternurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img/pattern/pattern${randompattern}.png`;

  return (
    <div>
      <aside className="ViewSection">
        <div className="viewImg_box anicon ">
          <div className="capture-box">
            {sectionflash ? <div className="flash1"></div> : null}
            <div className="animal_Img">
              <img alt="배경 이미지" src={backgroundurl} />
            </div>
            <div className="animal_Img">
              <img alt="얼굴 이미지" src={faceurl} />
            </div>
            <div className="animal_Img">
              <img alt="무늬 이미지" src={patternurl} />
            </div>
            <div className="animal_Img">
              <img alt="눈 이미지" src={eyesurl} />
            </div>
            <div className="animal_Img">
              <img alt="입 이미지" src={mouthurl} />
            </div>
            <div className="animal_Img">
              <img alt="악세서리 이미지" src={accurl} />
            </div>
          </div>
        </div>
        <Title />
      </aside>
    </div>
  );
}
export default ViewSection;
