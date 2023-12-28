import { useRecoilState, useSetRecoilState } from "recoil";
import {
  randomFace,
  randomColor,
  randomEyes,
  randomMouth,
  randomAcc,
  randomPattern,
  randomBackground,
} from "/Users/user/Ani_School-1/src/recoil/Atoms.ts";

export const RandomBtn = ({ setAudio, audio }) => {
  const randomCategory = [
    "얼굴랜덤",
    "컬러랜덤",
    "눈랜덤",
    "입랜덤",
    "악세랜덤",
    "무늬랜덤",
    "배경랜덤",
  ];
  let randomValue,
    setRandomFace = useSetRecoilState(randomFace),
    [randomcolor, setRandomColor] = useRecoilState(randomColor),
    [randomeyes, setRandomEyes] = useRecoilState(randomEyes),
    [randommouth, setRandomMouth] = useRecoilState(randomMouth),
    setRandomAcc = useSetRecoilState(randomAcc),
    setRandomPattern = useSetRecoilState(randomPattern),
    [randombackground, setRandombackground] = useRecoilState(randomBackground);
  /**
   * 개별 요소의 랜덤한 값을 할당해주는 함수.
   * 레어요소인지 아닌지를 판별하여 값을 할당할지 early return할지 정한다.
   * @param {string} category
   */
  const randomBtn = (category, setAudio, audio) => {
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
    }, 300);
  };
  return (
    <ul className="randomBtn_box">
      {randomCategory.map((category, idx) => {
        return (
          <li key={idx}>
            <button
              aria-label="랜덤버튼"
              type="button"
              value="button"
              className="randomBtn_Design"
              onClick={() => randomBtn(`${category}`, setAudio, audio)}
            >
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
