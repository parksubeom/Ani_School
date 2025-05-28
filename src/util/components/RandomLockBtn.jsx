//폰트 및 아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import {
  facelock,
  colorlock,
  eyeslock,
  mouthlock,
  acclock,
  patternlock,
  backgroundlock,
} from "../../recoil/Atoms.ts";

export const RandomLockBtn = ({ setLockAudio, lockaudio,lockIndex }) => {
  const [faceLock, setFaceLock] = useRecoilState(facelock);
  const [colorLock, setColorLock] = useRecoilState(colorlock);
  const [eyesLock, setEyesLock] = useRecoilState(eyeslock);
  const [mouthLock, setMouthLock] = useRecoilState(mouthlock);
  const [accLock, setAccLock] = useRecoilState(acclock);
  const [patternLock, setPatternLock] = useRecoilState(patternlock);
  const [backgroundLock, setBackgroundLock] = useRecoilState(backgroundlock);
  const allRandomCategory = [
    [faceLock,setFaceLock, "얼굴"],
    [colorLock,setColorLock, "컬러"],
    [eyesLock,setEyesLock, "눈"],
    [mouthLock,setMouthLock, "입"],
    [accLock,setAccLock, "악세서리"],
    [patternLock,setPatternLock, "무늬"],
    [backgroundLock,setBackgroundLock, "배경"],
  ];
  /**
   *
   * 원하는 요소가 나올 시 해당요소를 잠금하는 함수
   * 랜덤 또는 올랜덤 버튼을 눌러도 잠긴요소는 값이 바뀌지않는다.
   * @param {number}locktype
   */
     const randomLockBtn = (locktype) => {
      setLockAudio(!lockaudio); // 오디오 토글
      // 해당 locktype에 맞는 Recoil setter 함수를 찾아 상태 토글
      const currentItem = allRandomCategory[locktype][0];
      allRandomCategory[locktype][1](!currentItem)
  
      setTimeout(() => {
        setLockAudio(false); // 오디오 재생 후 150ms 뒤 끄기
      }, 150);
    };
  return (
            <button
              aria-label={allRandomCategory[lockIndex][2]+"잠금"}
              type="button"
              value="button"
              className={`lockBtn_Design lockBtn_${lockIndex}`}
              onClick={() => randomLockBtn(lockIndex)}
            >
              {allRandomCategory[lockIndex][0] ? (
                <FontAwesomeIcon icon={faUnlock} />
              ) : (
                <FontAwesomeIcon icon={faLock} />
              )}
            </button>
  );
};
