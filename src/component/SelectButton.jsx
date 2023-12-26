//css
import "../Style/SelectButton.css";
//폰트 및 아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
//라이브러리
import React, { useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
//유틸
const { Options } = require("./SelectData");

function SelectButton({
  setRandomFace,
  setRandomColor,
  setRandomEyes,
  setRandomMouth,
  setRandomAcc,
  setRandomPattern,
  setRandombackground,
  randomface,
  randomcolor,
  randomeyes,
  randommouth,
  randomacc,
  randompattern,
  randombackground,
  setSectionFlash1,
}) {
  const [lockaudio, setLockAudio] = useState(false);
  const [audio, setAudio] = useState(false);
  const [flash, setFlash] = useState(false);
  const [download, setDownload] = useState(false);
  const [pngname, setPngName] = useState("");
  const [facelock, setFaceLock] = useState(true);
  const [colorlock, setColorLock] = useState(true);
  const [eyeslock, setEyesLock] = useState(true);
  const [mouthlock, setMouthLock] = useState(true);
  const [acclock, setAccLock] = useState(true);
  const [patternlock, setPatternLock] = useState(true);
  const [backgroundlock, setBackgroundLock] = useState(true);

  const randomCategory = [
    "얼굴랜덤",
    "컬러랜덤",
    "눈랜덤",
    "입랜덤",
    "악세랜덤",
    "무늬랜덤",
    "배경랜덤",
  ];
  const selectArr = [
    randomface,
    randomcolor,
    randomeyes,
    randommouth,
    randomacc,
    randompattern,
    randombackground,
  ];
  /**
   * 올 랜덤버튼을 클릭 시 , 잠김여부, 업데이트함수 , 카테고리 , 파츠 수 를 담은 배열
   */
  const allRandomCategory = [
    [facelock, setRandomFace, "fece", 8],
    [colorlock, setRandomColor, "color", 17],
    [eyeslock, setRandomEyes, "eyes", 13],
    [mouthlock, setRandomMouth, "mouth", 11],
    [acclock, setRandomAcc, "acc", 30],
    [patternlock, setRandomPattern, "parrern", 6],
    [backgroundlock, setRandombackground, "background", 18],
  ];
  /**
   * 전체 요소의 랜덤한 값을 할당해주는 함수.
   * 잠금상태인지 아닌지 조건문으로 판별하여 값을 할당
   */
  const allrandomBtn = () => {
    allRandomCategory.forEach((category) => {
      if (category[0]) {
        return category[1](Math.round(Math.random() * category[3]));
      }
    });

    setAudio(!audio);
    setSectionFlash1(true);
    setTimeout(() => {
      setSectionFlash1(false);
    }, 500);
    setTimeout(() => {
      setAudio(false);
    }, 300);
  };
  /**
   * 개별 요소의 랜덤한 값을 할당해주는 함수.
   * 레어요소인지 아닌지를 판별하여 값을 할당할지 early return할지 정한다.
   * @param {string} category
   */
  const randomBtn = (category) => {
    let randomValue;
    switch (category) {
      case "얼굴랜덤":
        randomValue = Math.floor(Math.random() * 8);
        setRandomFace(randomValue);
        break;
      case "컬러랜덤":
        if (
          randomcolor > 15 &&
          !window.confirm("✨레어컬러✨입니다. 바꾸시겠습니까?")
        ) {
          return;
        }
        randomValue = Math.round(Math.random() * 17);
        setRandomColor(randomValue);
        break;
      case "눈랜덤":
        if (
          randomeyes > 11 &&
          !window.confirm("✨레어 눈✨입니다. 바꾸시겠습니까?")
        ) {
          return;
        }
        randomValue = Math.round(Math.random() * 13);
        setRandomEyes(randomValue);
        break;
      case "입랜덤":
        if (
          randommouth > 10 &&
          !window.confirm("✨레어 입✨입니다. 바꾸시겠습니까?")
        ) {
          return;
        }
        randomValue = Math.round(Math.random() * 11);
        setRandomMouth(randomValue);
        break;
      case "악세랜덤":
        randomValue = Math.round(Math.random() * 30);
        setRandomAcc(randomValue);
        break;
      case "무늬랜덤":
        randomValue = Math.round(Math.random() * 6);
        setRandomPattern(randomValue);
        break;
      case "배경랜덤":
        if (
          randombackground > 12 &&
          !window.confirm("✨레어 배경✨입니다. 바꾸시겠습니까?")
        ) {
          return;
        }
        randomValue = Math.round(Math.random() * 18);
        setRandombackground(randomValue);
        break;
      default:
        // 다른 경우에 대한 처리
        break;
    }

    setAudio(!audio);
    setTimeout(() => {
      setAudio(false);
    }, 500);
  };

  /**
   * 선택한 파츠 요소의 값을 사용자가 선택한 값으로 변경해주는 함수.
   * @param {number}value
   * @param {string}setSelect
   */
  const SelectBtn = (value, setSelect) => {
    switch (setSelect) {
      case "faceselect":
        setRandomFace(Number(value));
        break;
      case "colorselect":
        setRandomColor(Number(value));
        break;
      case "eyesselect":
        setRandomEyes(Number(value));
        break;
      case "mouthselect":
        setRandomMouth(Number(value));
        break;
      case "accselect":
        setRandomAcc(Number(value));
        break;
      case "patternselect":
        setRandomPattern(Number(value));
        break;
      case "backgroundselect":
        setRandombackground(Number(value));
        break;
      default:
        // 다른 경우에 대한 처리
        break;
    }
  };
  /**
   * 현재 view 섹션에 만들어 진 프로필 이미지를 사용자의 디바이스로 출력하는 함수.
   * png파일의 이름, view섹션의 이미지를 사용자 디바이스로 출력 후 플래시효과를 보여주고 파일제목란을 비워준다.
   */
  const onDownloadBtn = () => {
    setDownload(!download);
    let filename = pngname ? pngname : "프로필";
    domtoimage
      .toBlob(document.querySelector(".capture-box-max"))
      .then((blob) => {
        saveAs(blob, `${filename}.png`);
      });
    setFlash(true);
    setTimeout(() => {
      setDownload(false);
      setFlash(false);
    }, 1000);
    setPngName("");
  };
  /**
   * 원하는 요소가 나올 시 해당요소를 잠금하는 함수
   * 랜덤 또는 올랜덤 버튼을 눌러도 잠긴요소는 값이 바뀌지않는다.
   * @param {string}locktype
   */
  const randomLockBtn = (locktype) => {
    setLockAudio(!lockaudio);
    switch (locktype) {
      case "face":
        setFaceLock(!facelock);
        break;
      case "color":
        setColorLock(!colorlock);
        break;
      case "eyes":
        setEyesLock(!eyeslock);
        break;
      case "mouth":
        setMouthLock(!mouthlock);
        break;
      case "acc":
        setAccLock(!acclock);
        break;
      case "pattern":
        setPatternLock(!patternlock);
        break;
      case "background":
        setBackgroundLock(!backgroundlock);
        break;
      default:
        break;
    }
    setTimeout(() => {
      setLockAudio(false);
    }, 150);
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
        <ul className="randomBtn_box">
          {randomCategory.map((category) => {
            return (
              <li>
                <button
                  type="button"
                  value="button"
                  className="randomBtn_Design"
                  onClick={() => randomBtn(`${category}`)}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
        {/*선택버튼 리스트 */}
        <ul className="selectBtn_box">
          {Options.map((select) => {
            let selectParts = Number(Options.indexOf(select));
            return (
              <li>
                <select
                  className="selectBtn_Design"
                  onChange={(event) =>
                    SelectBtn(event.target.value, Object.keys(select)[0])
                  }
                  value={selectArr[selectParts]}
                >
                  {Object.keys(select[Object.keys(select)])
                    .map((el) => +el)
                    .includes(selectArr[selectParts]) ? (
                    select[Object.keys(select)].map((item) => {
                      return (
                        <option key={item.key} value={item.key}>
                          {Object.keys(select[Object.keys(select)])
                            .map((el) => +el)
                            .includes(selectArr[selectParts])
                            ? item.value
                            : "🎉레어 요소🎉"}
                        </option>
                      );
                    })
                  ) : (
                    <option value={"🎉레어 요소🎉"}>{"🎉레어 요소🎉"}</option>
                  )}
                </select>
              </li>
            );
          })}
        </ul>

        {lockaudio ? (
          <audio
            src="https://anischool.s3.ap-northeast-2.amazonaws.com/audio/lock.mp3"
            autoPlay={lockaudio}
          ></audio>
        ) : null}

        <ul className="lockBtn_box">
          {allRandomCategory.map((category) => {
            return (
              <li>
                <button
                  type="button"
                  value="button"
                  className="lockBtn_Design"
                  onClick={() => randomLockBtn(category[1])}
                >
                  {category[0] ? (
                    <FontAwesomeIcon icon={faUnlock} />
                  ) : (
                    <FontAwesomeIcon icon={faLock} />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
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
            onClick={allrandomBtn}
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
