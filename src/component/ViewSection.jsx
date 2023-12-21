import React, { useState } from 'react';
import '../Style/ViewSection.css';
import Title from '../component/Title.jsx';

function ViewSection({ randomface, randomcolor, randomeyes, randommouth, randomacc, randompattern, randombackground, sectionflash }) {

  let backgroundurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img//background/background${randombackground}.png`
  let faceurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img//face/face${randomface}/color${randomcolor}.png`
  let eyesurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img//eye/eye${randomeyes}.png`
  let mouthurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img//mouth/mouth${randommouth}.png`
  let accurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img/acc/acc${randomacc}.png`
  let patternurl = `https://parksubeom.github.io/Project_RetroAnimal_Generator/img/pattern/pattern${randompattern}.png`



  return (

    <div>
      <aside className="ViewSection">
        <div className='viewImg_box anicon '>
          <div className='capture-box'>
            {sectionflash ? <div className='flash1'></div> : null}
            <div className="animal_Img"><img alt="background_" src={backgroundurl} /></div>
            <div className="animal_Img"><img alt="face_" src={faceurl} /></div>
            <div className="animal_Img"><img alt="pattern_" src={patternurl} /></div>
            <div className="animal_Img"><img alt="eyes_" src={eyesurl} /></div>
            <div className="animal_Img"><img alt="mouth_" src={mouthurl} /></div>
            <div className="animal_Img"><img alt="acc_" src={accurl} /></div>
          </div>

          <div className='capture-box-max'>
            <div className="animal_Img"><img alt="background_" src={backgroundurl} /></div>
            <div className="animal_Img"><img alt="face_" src={faceurl} /></div>
            <div className="animal_Img"><img alt="pattern_" src={patternurl} /></div>
            <div className="animal_Img"><img alt="eyes_" src={eyesurl} /></div>
            <div className="animal_Img"><img alt="mouth_" src={mouthurl} /></div>
            <div className="animal_Img"><img alt="acc_" src={accurl} /></div>
          </div>
        </div>
        <Title />
      </aside>
    </div>

  );
}
export default ViewSection;
