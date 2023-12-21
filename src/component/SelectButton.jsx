import "../Style/SelectButton.css";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
const { Options } = require("./selectData");
//셀렉트 버튼을 누르면  온클릭이벤트가 실행되고 해당버튼에 고유한 값을 앱컴포넌트로 올려줘야한다.
//랜덤버튼을 누르면 온클릭이벤트가 실행되고, Matr.round(Matr.rendom)*10 메서드를 실행해서 나온 정수값을 state값에 넣어준다.
//여기서 나온 정수값은 Viewsection에서 이미지를 랜덤으로 불러오기위해 필요하기에 Viewsection으로 값을 보내줘야한다.
//셀렉트버튼 컴포넌트는 뷰 컴포넌트의 자식컴포넌트로 들어가지 않으니까 state & props로 값을 주고받기 힘들다. => App.jsx로 값을 올려보낸다.

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

  const faceOptions = Options[0];
  const colorOptions = Options[1];
  const eyesOptions = Options[2];
  const mouthOptions = Options[3];
  const accOptions = Options[4];
  const patternOptions = Options[5];
  const backgroundOptions = Options[6];

  const allrandomBtn = () => {
    /*if (randomcolor > 15 || randomeyes > 12 || randommouth > 10 || randombackground > 12) {
      if (!window.confirm("✨레어✨요소가 포함되어 있습니다. 바꾸시겠습니까?")) {
        return
      }
    }*/

    if (facelock) {
      setRandomFace(Math.round(Math.random() * 8));
    }
    if (colorlock) {
      setRandomColor(Math.round(Math.random() * 17));
    }
    if (eyeslock) {
      setRandomEyes(Math.round(Math.random() * 13));
    }
    if (mouthlock) {
      setRandomMouth(Math.round(Math.random() * 11));
    }
    if (acclock) {
      setRandomAcc(Math.round(Math.random() * (30 - 1)) + 1);
    }
    if (patternlock) {
      setRandomPattern(Math.round(Math.random() * (6 - 1)) + 1);
    }
    if (backgroundlock) {
      setRandombackground(Math.round(Math.random() * (19 - 1)) + 1);
    }
    setAudio(!audio);
    setSectionFlash1(true);
    setTimeout(() => {
      setSectionFlash1(false);
    }, 500);
    setTimeout(() => {
      setAudio(false);
    }, 300);
  };
  //==========================랜덤버튼함수==========================//
  const randomBtn = (setRandom) => {
    if (setRandom === setRandomFace) {
      setRandomFace(Math.floor(Math.random() * 8));
    } else if (setRandom === setRandomColor) {
      if (randomcolor > 15) {
        if (!window.confirm("✨레어컬러✨입니다. 바꾸시겠습니까?")) {
          return;
        }
      }
      setRandomColor(Math.round(Math.random() * 17));
    } else if (setRandom === setRandomEyes) {
      if (randomeyes > 12) {
        if (!window.confirm("✨레어 눈✨입니다. 바꾸시겠습니까?")) {
          return;
        }
      }
      setRandomEyes(Math.round(Math.random() * 13));
    } else if (setRandom === setRandomMouth) {
      if (randommouth > 10) {
        if (!window.confirm("✨레어 입✨입니다. 바꾸시겠습니까?")) {
          return;
        }
      }
      setRandomMouth(Math.round(Math.random() * 11));
    } else if (setRandom === setRandomAcc) {
      setRandomAcc(Math.round(Math.random() * (30 - 1)) + 1);
    } else if (setRandom === setRandomPattern) {
      setRandomPattern(Math.round(Math.random() * (6 - 1)) + 1);
    } else if (setRandom === setRandombackground) {
      if (randombackground > 12) {
        if (!window.confirm("✨레어 배경✨입니다. 바꾸시겠습니까?")) {
          return;
        }
      }
      setRandombackground(Math.round(Math.random() * (19 - 1)) + 1);
    }
    setAudio(!audio);
    setTimeout(() => {
      setAudio(false);
    }, 500);
  };
  //==========================셀렉버튼함수==========================//
  const SelectBtn = (e, setSelect) => {
    if (setSelect === "face") {
      setRandomFace(e.target.value);
    } else if (setSelect === "color") {
      setRandomColor(e.target.value);
    } else if (setSelect === "eyes") {
      setRandomEyes(e.target.value);
    } else if (setSelect === "mouth") {
      setRandomMouth(e.target.value);
    } else if (setSelect === "acc") {
      setRandomAcc(e.target.value);
    } else if (setSelect === "pattern") {
      setRandomPattern(e.target.value);
    } else if (setSelect === "background") {
      setRandombackground(e.target.value);
    }
  };
  //==========================png파일명 생성 함수==========================//
  const pngnameHandler = (e) => {
    setPngName(e.target.value);
  };
  //==========================캐릭터내려받기 함수 및 플래쉬==========================//
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
  //==========================올랜덤 잠금버튼 함수==========================//
  const randomLockBtn = (e, locktype) => {
    setLockAudio(!lockaudio);
    if (locktype === "face") {
      setFaceLock(!facelock);
    } else if (locktype === "color") {
      setColorLock(!colorlock);
    } else if (locktype === "eyes") {
      setEyesLock(!eyeslock);
    } else if (locktype === "mouth") {
      setMouthLock(!mouthlock);
    } else if (locktype === "acc") {
      setAccLock(!acclock);
    } else if (locktype === "pattern") {
      setPatternLock(!patternlock);
    } else if (locktype === "background") {
      setBackgroundLock(!backgroundlock);
    }
    setTimeout(() => {
      setLockAudio(false);
    }, 200);
  };

  return (
    <div className="btn_allBox">
      <div>
        {audio ? (
          <audio
            src="https://parksubeom.github.io/Project_RetroAnimal_Generator//audio/click_1.mp3"
            autoPlay={audio}
          ></audio>
        ) : null}
        <ul className="randomBtn_box">
          <li>
            <button
              type="button"
              value="button"
              className="randomBtn_Design"
              onClick={() => randomBtn(setRandomFace)}
            >
              얼굴랜덤
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="randomBtn_Design"
              onClick={() => randomBtn(setRandomColor)}
            >
              컬러랜덤
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="randomBtn_Design"
              onClick={() => randomBtn(setRandomEyes)}
            >
              눈랜덤
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="randomBtn_Design"
              onClick={() => randomBtn(setRandomMouth)}
            >
              입랜덤
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="randomBtn_Design"
              onClick={() => randomBtn(setRandomAcc)}
            >
              악세랜덤
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="randomBtn_Design"
              onClick={() => randomBtn(setRandomPattern)}
            >
              무늬랜덤
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="randomBtn_Design"
              onClick={() => randomBtn(setRandombackground)}
            >
              배경 랜덤
            </button>
          </li>
        </ul>

        <ul className="selectBtn_box">
          <li>
            <select
              className="selectBtn_Design"
              onChange={(event) => SelectBtn(event, "face")}
              value={randomface}
            >
              {faceOptions.faceselect.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
          </li>

          <li>
            <select
              className="selectBtn_Design"
              onChange={(event) => SelectBtn(event, "color")}
              value={randomcolor}
            >
              {randomcolor > 15 ? <option>🎉레어 컬러🎉</option> : null}
              {colorOptions.colorselect.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
          </li>

          <li>
            <select
              className="selectBtn_Design"
              onChange={(event) => SelectBtn(event, "eyes")}
              value={randomeyes}
            >
              {randomeyes > 12 ? <option>🎉레어 눈🎉</option> : null}
              {eyesOptions.eyesselect.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
          </li>

          <li>
            <select
              className="selectBtn_Design"
              onChange={(event) => SelectBtn(event, "mouth")}
              value={randommouth}
            >
              {randommouth > 10 ? <option>🎉레어 입🎉</option> : null}
              {mouthOptions.mouthselect.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
          </li>

          <li>
            {
              <select
                className="selectBtn_Design"
                onChange={(event) => SelectBtn(event, "acc")}
                value={randomacc}
              >
                {accOptions.accselect.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                ))}
              </select>
            }
          </li>

          <li>
            <select
              className="selectBtn_Design"
              onChange={(event) => SelectBtn(event, "pattern")}
              value={randompattern}
            >
              {patternOptions.patternselect.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
          </li>

          <li>
            <select
              className="selectBtn_Design"
              onChange={(event) => SelectBtn(event, "background")}
              value={randombackground}
            >
              {randombackground > 12 ? <option>🎉레어 배경🎉</option> : null}
              {backgroundOptions.backgroundselect.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
          </li>
        </ul>
        {lockaudio ? (
          <audio
            src="https://parksubeom.github.io/Project_RetroAnimal_Generator//audio/lock.mp3"
            autoPlay={lockaudio}
          ></audio>
        ) : null}
        <ul className="lockBtn_box">
          <li>
            <button
              type="button"
              value="button"
              className="lockBtn_Design"
              onClick={(e) => randomLockBtn(e, "face")}
            >
              {facelock ? (
                <FontAwesomeIcon icon={faUnlock} />
              ) : (
                <FontAwesomeIcon icon={faLock} />
              )}
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="lockBtn_Design"
              onClick={(e) => randomLockBtn(e, "color")}
            >
              {colorlock ? (
                <FontAwesomeIcon icon={faUnlock} />
              ) : (
                <FontAwesomeIcon icon={faLock} />
              )}
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="lockBtn_Design"
              onClick={(e) => randomLockBtn(e, "eyes")}
            >
              {eyeslock ? (
                <FontAwesomeIcon icon={faUnlock} />
              ) : (
                <FontAwesomeIcon icon={faLock} />
              )}
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="lockBtn_Design"
              onClick={(e) => randomLockBtn(e, "mouth")}
            >
              {mouthlock ? (
                <FontAwesomeIcon icon={faUnlock} />
              ) : (
                <FontAwesomeIcon icon={faLock} />
              )}
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="lockBtn_Design"
              onClick={(e) => randomLockBtn(e, "acc")}
            >
              {acclock ? (
                <FontAwesomeIcon icon={faUnlock} />
              ) : (
                <FontAwesomeIcon icon={faLock} />
              )}
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="lockBtn_Design"
              onClick={(e) => randomLockBtn(e, "pattern")}
            >
              {patternlock ? (
                <FontAwesomeIcon icon={faUnlock} />
              ) : (
                <FontAwesomeIcon icon={faLock} />
              )}
            </button>
          </li>
          <li>
            <button
              type="button"
              value="button"
              className="lockBtn_Design"
              onClick={(e) => randomLockBtn(e, "background")}
            >
              {backgroundlock ? (
                <FontAwesomeIcon icon={faUnlock} />
              ) : (
                <FontAwesomeIcon icon={faLock} />
              )}
            </button>
          </li>
        </ul>
      </div>
      <input
        id="pngname"
        className="png_Name"
        placeholder="저장 할 이름 작성"
        value={pngname}
        onChange={(e) => pngnameHandler(e)}
      ></input>
      {download ? (
        <audio
          src="https://parksubeom.github.io/Project_RetroAnimal_Generator//audio/camera2.wav"
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
