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
    [faceLock, "face"],
    [colorLock, "color"],
    [eyesLock, "eyes"],
    [mouthLock, "mouth"],
    [accLock, "acc"],
    [patternLock, "parrern"],
    [backgroundLock, "background"],
  ];
  /**
   *
   * 원하는 요소가 나올 시 해당요소를 잠금하는 함수
   * 랜덤 또는 올랜덤 버튼을 눌러도 잠긴요소는 값이 바뀌지않는다.
   * @param {string}locktype
   */
  const randomLockBtn = (locktype) => {
    console.log(locktype)
    setLockAudio(!lockaudio);
    switch (locktype) {
      case 0:
        setFaceLock(!faceLock);
        break;
      case 1:
        setColorLock(!colorLock);
        break;
      case 2:
        setEyesLock(!eyesLock);
        break;
      case 3:
        setMouthLock(!mouthLock);
        break;
      case 4:
        setAccLock(!accLock);
        break;
      case 5:
        setPatternLock(!patternLock);
        break;
      case 6:
        setBackgroundLock(!backgroundLock);
        break;
      default:
        break;
    }
    setTimeout(() => {
      setLockAudio(false);
    }, 150);
  };
  return (
            <button
              aria-label="잠금"
              type="button"
              value="button"
              className="lockBtn_Design"
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
