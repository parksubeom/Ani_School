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
          src="https://parksubeom.github.io/Ani_School/audio/manual1.mp3"
          autoPlay={manualsound}
        ></audio>
      ) : null}
      {modal ? <Modal handleModal={handleModal} /> : null}
      {bell ? (
        <audio
          src="https://parksubeom.github.io/Ani_School/audio/bell.mp3"
          autoPlay={bell}
        ></audio>
      ) : null}
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
      <button
        aria-label="오디오"
        className="sideBtn_size"
        onClick={handleOnClickAudio}
        title={audio ? "배경음악 켜짐":"배경음악 꺼짐"}
      >
        <div className="sideBtn_Design">
          <div
            className={audio ? "iconON sideBtn_text" : "iconOFF sideBtn_text"}
          >
            <FontAwesomeIcon aria-label="오디오" icon={faMusic} />
          </div>
        </div>
      </button>
      {audio ? (
        <audio
          src="https://parksubeom.github.io/Ani_School/audio/lemon.mp3"
          autoPlay={audio}
          loop="loop"
        ></audio>
      ) : null}
    </div>
  );
}
export default Manual;
