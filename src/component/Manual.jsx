import '../Style/Manual.css';
import React, { useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMusic, faBell, faListCheck} from "@fortawesome/free-solid-svg-icons"


function Manual() {

  const [modal, setModal] = useState(false)
  const [audio, setAudio] = useState(false)
  const [bell, setBell] = useState(false)
  const [manualsound,setManualSound] = useState(false)

  const handleOnClick = () => {
    setModal(!modal);
  }

  const handleOnClick2 = () => {
    setManualSound(!manualsound)
    setTimeout(() => { setManualSound(false) }, 800)
  }

  const handleOnClickBell = () => {
    setModal(!modal);
    setBell(!bell);
    setTimeout(() => {
      setBell(false);
    }, 1500);
  }

  const handleonclickAudio = () => {
    setAudio(!audio)
  }


  return (
    <div className='sidebutton_Group'>
      {manualsound ? <audio src='https://parksubeom.github.io/Project_RetroAnimal_Generator//audio/manual1.mp3' autoPlay={manualsound}></audio> : null}
      {modal ? <Modal handleOnClick={handleOnClick} /> : null}
      {bell ? <audio src='https://parksubeom.github.io/Project_RetroAnimal_Generator/audio/bell.mp3' autoPlay={bell}></audio> : null}
      <div>
        <button className='sideBtn_size' onClick={handleOnClickBell} >
          <div className='sideBtn_Design'>
            <div className='shake sideBtn_text'><FontAwesomeIcon icon={faBell} /></div>
          </div>
        </button>
      </div>
      <button className='sideBtn_size' onClick={handleOnClick2}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdR1gs9skIt6DNRYE5GI9blt5J6vgImK8sld5rVblJP1wjjQg/viewform?vc=0&c=0&w=1&flr=0" target="_blank">
          <div className='sideBtn_Design'>
            <div className='sideBtn_text'><FontAwesomeIcon icon={faListCheck} /></div>
          </div>
        </a>
      </button>
      <button className='sideBtn_size' onClick={handleonclickAudio}>
        <div className='sideBtn_Design'>
          <div className={ audio ? 'iconON sideBtn_text' : 'iconOFF sideBtn_text'}><FontAwesomeIcon icon={faMusic} /></div>
        </div>
      </button>
      {audio ? <audio src='https://parksubeom.github.io/Project_RetroAnimal_Generator//audio/lemon.mp3' autoPlay={audio} loop="loop"></audio> : null}
    </div>
  )
}
export default Manual;
