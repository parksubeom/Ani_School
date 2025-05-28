import { useRecoilState } from "recoil";
import { useState } from "react";
import {
  randomFace,
  randomColor,
  randomEyes,
  randomMouth,
  randomAcc,
  randomPattern,
  randomBackground,
} from "../../recoil/Atoms.ts";
import { RandomLockBtn } from "util/components/RandomLockBtn";
import { Options } from "data/SelectData";
export const SelectBtn = () => {
  const [lockaudio, setLockAudio] = useState(false);
  const [randomface, setRandomFace] = useRecoilState(randomFace);
  const [randomcolor, setRandomColor] = useRecoilState(randomColor);
  const [randomeyes, setRandomEyes] = useRecoilState(randomEyes);
  const [randommouth, setRandomMouth] = useRecoilState(randomMouth);
  const [randomacc, setRandomAcc] = useRecoilState(randomAcc);
  const [randompattern, setRandomPattern] = useRecoilState(randomPattern);
  const [randombackground, setRandombackground] =
    useRecoilState(randomBackground);
  const selectArr = [
    randomface,
    randomcolor,
    randomeyes,
    randommouth,
    randomacc,
    randompattern,
    randombackground,
  ];
  const selectCategory = [
    ["얼굴 선택"],
    ["컬러 선택"],
    ["눈 선택"],
    ["입 선택"],
    ["악세서리 선택"],
    ["무늬 선택"],
    ["배경 선택"]
  ];
  /**
   * 선택한 파츠 요소의 값을 사용자가 선택한 값으로 변경해주는 함수.
   * @param {number}value
   * @param {string}setSelect
   */
  const selectBtn = (value, setSelect) => {
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
  return (
    <ul className="selectBtn_box">
      {Options.map((select, idx) => {
        let selectParts = Number(Options.indexOf(select));
        return (
          <li key={idx}>
            <select
              aria-label={selectCategory[idx]}
              className="selectBtn_Design"
              onChange={(event) =>
                selectBtn(event.target.value, Object.keys(select)[0])
              }
              value={selectArr[selectParts]}
            >
              {Object.keys(select[Object.keys(select)])
                .map((el) => +el)
                .includes(selectArr[selectParts]) ? (
                select[Object.keys(select)].map((item) => {
                  return (
                    <option key={item.key ?? "unique-key"} value={item.key}>
                      {Object.keys(select[Object.keys(select)])
                        .map((el) => +el)
                        .includes(selectArr[selectParts])
                        ? item.value
                        : "🎉레어 요소🎉"}
                    </option>
                  );
                })
              ) : (
                <option key={"unique-key"} value={"🎉레어 요소🎉"}>
                  {"🎉레어 요소🎉"}
                </option>
              )}
            </select>
            {lockaudio ? (
          <audio
            src="https://parksubeom.github.io/Ani_School/audio/lock.mp3"
            autoPlay={lockaudio}
          ></audio>
        ) : null}
            {/*잠금버튼 리스트 */}
            <RandomLockBtn setLockAudio={setLockAudio} lockaudio={lockaudio} lockIndex={idx}/>
          </li>
        );
      })}
    </ul>
  );
};
