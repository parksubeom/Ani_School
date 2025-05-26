//css
import "../Style/SelectButton.css";

//라이브러리
import { useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
//유틸
import { useAllRandomBtn } from "../util/hook/useAllRandomBtn";
import { RandomBtn } from "../util/components/RandomBtn";
import { SelectBtn } from "util/components/SelectBtn";
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
  facelock,
  colorlock,
  eyeslock,
  mouthlock,
  acclock,
  patternlock,
  backgroundlock,
} from "../recoil/Atoms.ts";

function SelectButton() {
  const setRandomFace = useSetRecoilState(randomFace);
  const setRandomColor = useSetRecoilState(randomColor);
  const setRandomEyes = useSetRecoilState(randomEyes);
  const setRandomMouth = useSetRecoilState(randomMouth);
  const setRandomAcc = useSetRecoilState(randomAcc);
  const setRandomPattern = useSetRecoilState(randomPattern);
  const setRandombackground = useSetRecoilState(randomBackground);
  const setSectionFlash = useSetRecoilState(sectionFlash);
  const [audio, setAudio] = useState(false);
  const [flash, setFlash] = useState(false);
  const [download, setDownload] = useState(false);
  const [pngname, setPngName] = useState("");
  const [faceLock] = useRecoilState(facelock);
  const [colorLock] = useRecoilState(colorlock);
  const [eyesLock] = useRecoilState(eyeslock);
  const [mouthLock] = useRecoilState(mouthlock);
  const [accLock] = useRecoilState(acclock);
  const [patternLock] = useRecoilState(patternlock);
  const [backgroundLock] = useRecoilState(backgroundlock);
  /**
   * 올 랜덤버튼을 클릭 시 , 잠김여부, 업데이트함수 , 카테고리 , 파츠 수 를 담은 배열
   */
  const allRandomCategory = [
    [faceLock, setRandomFace, "fece", 8],
    [colorLock, setRandomColor, "color", 17],
    [eyesLock, setRandomEyes, "eyes", 13],
    [mouthLock, setRandomMouth, "mouth", 11],
    [accLock, setRandomAcc, "acc", 30],
    [patternLock, setRandomPattern, "parrern", 6],
    [backgroundLock, setRandombackground, "background", 18],
  ];

  /**
   * 현재 view 섹션에 만들어 진 프로필 이미지를 사용자의 디바이스로 출력하는 함수.
   * png파일의 이름, view섹션의 이미지를 사용자 디바이스로 출력 후 플래시효과를 보여주고 파일제목란을 비워준다.
   */
  const onDownloadBtn = () => {
    setDownload(!download);
    let filename = pngname ? pngname : "프로필";
    domtoimage.toBlob(document.querySelector(".capture-box")).then((blob) => {
      saveAs(blob, `${filename}.png`);
    });
    setFlash(true);
    setTimeout(() => {
      setDownload(false);
      setFlash(false);
    }, 1000);
    setPngName("");
  };

  return (
    <div className="btn_allBox">
      <div>
        {audio ? (
          <audio
            src="https://anischool.s3.ap-northeast-2.amazonaws.com/audio/click_1.mp3"
            autoPlay={audio}
          ></audio>
        ) : null}
        {/*랜덤버튼 리스트 */}
        <RandomBtn setAudio={setAudio} audio={audio} />
        {/*선택버튼 리스트 */}
        <SelectBtn />   
      </div>

      <input
        id="pngname"
        className="png_Name"
        placeholder="저장 할 이름 작성"
        value={pngname}
        onChange={(e) => setPngName(e.target.value)}
      ></input>
      {download ? (
        <audio
          src="https://anischool.s3.ap-northeast-2.amazonaws.com/audio/camera2.wav"
          autoPlay={download}
        ></audio>
      ) : null}
      <ul className="lastBtn_Box">
        <li>
          <button
            type="button"
            value="button"
            className="AllRandomBtn_Design"
            onClick={useAllRandomBtn(
              allRandomCategory,
              audio,
              setAudio,
              setSectionFlash
            )}
          >
            올 랜덤
          </button>
        </li>
        <li>
          <button
            type="button"
            value="button"
            className="CreateProfile_Design"
            onClick={onDownloadBtn}
          >
            프로필생성
          </button>
        </li>
        {flash ? <div className="flash"></div> : null}
      </ul>
    </div>
  );
}

export default SelectButton;
