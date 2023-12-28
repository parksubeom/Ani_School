import "../Style/Manual.css";
import { useState } from "react";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faBell,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

function Manual() {
  const [modal, setModal] = useState(false);
  const [audio, setAudio] = useState(false);
  const [bell, setBell] = useState(false);
  const [manualsound, setManualSound] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const routeForm = () => {
    setManualSound(!manualsound);
    setTimeout(() => {
      setManualSound(false);
    }, 500);
  };

  const handleOnClickBell = () => {
    setModal(!modal);
    setBell(!bell);
    setTimeout(() => {
      setBell(false);
    }, 1500);
  };

  const handleOnClickAudio = () => {
    setAudio(!audio);
  };

  return (
    <div className="sidebutton_Group">
      {manualsound ? (
        <audio
          src="https://anischool.s3.ap-northeast-2.amazonaws.com/audio/manual1.mp3"
          autoPlay={manualsound}
        ></audio>
      ) : null}
      {modal ? <Modal handleModal={handleModal} /> : null}
      {bell ? (
        <audio
          src="https://anischool.s3.ap-northeast-2.amazonaws.com/audio/bell.mp3"
          autoPlay={bell}
        ></audio>
      ) : null}
      <div>
        <button
          aria-label="가이드 창 열기"
          className="sideBtn_size"
          onClick={handleOnClickBell}
        >
          <div className="sideBtn_Design">
            <div className="shake sideBtn_text">
              <FontAwesomeIcon icon={faBell} />
            </div>
          </div>
        </button>
      </div>
      <button
        aria-label="외부페이지 이동"
        className="sideBtn_size"
        onClick={routeForm}
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdR1gs9skIt6DNRYE5GI9blt5J6vgImK8sld5rVblJP1wjjQg/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
          rel="noreferrer"
        >
          <div className="sideBtn_Design">
            <div className="sideBtn_text">
              <FontAwesomeIcon icon={faListCheck} />
            </div>
          </div>
        </a>
      </button>
      <button
        aria-label="오디오"
        className="sideBtn_size"
        onClick={handleOnClickAudio}
      >
        <div className="sideBtn_Design">
          <div
            className={audio ? "iconON sideBtn_text" : "iconOFF sideBtn_text"}
          >
            <FontAwesomeIcon icon={faMusic} />
          </div>
        </div>
      </button>
      {audio ? (
        <audio
          src="https://anischool.s3.ap-northeast-2.amazonaws.com/audio/lemon.mp3"
          autoPlay={audio}
          loop="loop"
        ></audio>
      ) : null}
    </div>
  );
}
export default Manual;
