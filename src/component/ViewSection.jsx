import React, { lazy, Suspense } from "react";
import "../Style/ViewSection.css";
import Title from "../component/Title.jsx";
import { useRecoilState } from "recoil";
import {
  randomFace,
  randomColor,
  randomEyes,
  randomMouth,
  randomAcc,
  randomPattern,
  randomBackground,
  sectionFlash,
} from "../recoil/Atoms.ts";

const LazyImage = lazy(() => import("./LazyImage"));
function ViewSection() {
  const [randomface] = useRecoilState(randomFace);
  const [randomcolor] = useRecoilState(randomColor);
  const [randomeyes] = useRecoilState(randomEyes);
  const [randommouth] = useRecoilState(randomMouth);
  const [randomacc] = useRecoilState(randomAcc);
  const [randompattern] = useRecoilState(randomPattern);
  const [randombackground] = useRecoilState(randomBackground);
  const [sectionflash] = useRecoilState(sectionFlash);
  let backgroundurl = `https://parksubeom.github.io/Ani_School/img//background/background${randombackground}.webp`
  let faceurl = `https://parksubeom.github.io/Ani_School/img/face/face${randomface}/color${randomcolor}.webp`
  let eyesurl = `https://parksubeom.github.io/Ani_School/img/eye/eye${randomeyes}.webp`
  let mouthurl = `https://parksubeom.github.io/Ani_School/img/mouth/mouth${randommouth}.webp`
  let accurl = `https://parksubeom.github.io/Ani_School/img/acc/acc${randomacc}.webp`
  let patternurl = `https://parksubeom.github.io/Ani_School/img/pattern/pattern${randompattern}.webp`
  const srcArr = [
    [backgroundurl, "배경 이미지"],
    [faceurl, "얼굴 이미지"],
    [eyesurl, "눈 이미지"],
    [mouthurl, "입 이미지"],
    [accurl, "악세서리 이미지"],
    [patternurl, "무늬 이미지"],
  ];

  return (
    <div>
      <aside className="ViewSection">
        <div className="viewImg_box anicon ">
          <div className="capture-box">
            {sectionflash ? <div className="flash1"></div> : null}
            {srcArr.map((partsSrc, idx) => {
              return (
                <div className="animal_Img" key={idx}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyImage
                      width="250"
                      height="250"
                      alt={partsSrc[1]}
                      src={partsSrc[0]}
                    />
                  </Suspense>
                </div>
              );
            })}
          </div>
        </div>
        <Title />
      </aside>
    </div>
  );
}
export default ViewSection;
