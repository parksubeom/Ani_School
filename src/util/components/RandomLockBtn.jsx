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

export const RandomLockBtn = ({ setLockAudio, lockaudio }) => {
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
    setLockAudio(!lockaudio);
    switch (locktype) {
      case "face":
        setFaceLock(!faceLock);
        break;
      case "color":
        setColorLock(!colorLock);
        break;
      case "eyes":
        setEyesLock(!eyesLock);
        break;
      case "mouth":
        setMouthLock(!mouthLock);
        break;
      case "acc":
        setAccLock(!accLock);
        break;
      case "pattern":
        setPatternLock(!patternLock);
        break;
      case "background":
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
              onClick={() => randomLockBtn("face")}
            >
              {faceLock ? (
                <FontAwesomeIcon icon={faUnlock} />
              ) : (
                <FontAwesomeIcon icon={faLock} />
              )}
            </button>
  );
};
