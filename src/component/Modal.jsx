import React from "react";
import "../Style/Modal.css";

function Modal({ handleModal }) {
  return (
    <div className="modal_section">
      {/*모달 백그라운드*/}
      <div className="modal_contents">
        {/*모달 컨텐츠*/}
        <ul>
          <li className="modalPattern mtop-left"></li>
          <li className="modalPattern mtop-right"></li>
          <li className="modalPattern mbottom-left"></li>
          <li className="modalPattern mbottom-right"></li>
        </ul>
        <div className="modal_icon"></div> {/*모달 상단 범 아이콘*/}
        <button className="exit_button" onClick={handleModal}>
          ×
        </button>
        {/*모달 닫기버튼*/}
        <div className="modal_totalview">
          {/*모달 탑뷰*/}
          <div className="modal_topview">
            <img
              className="logo_img"
              alt="로고"
              src="https://i.imgur.com/iLtMaIJ.png"
            />
            <p className="modal_text">
              자신의 개성을 보여 줄 나만의 친구들을 가지고싶지 않나요?
              ANISCHOOL은 다양하고 귀여운 나만의 애니콘을 자신만의 개성으로 직접
              커스터마이징 가능한 프로필아이콘을 제공합니다.
              <br />
              <br />
              1.원하는 동물친구를 만든다.
              <br />
              2.캐릭터를 프로필생성 버튼을 통해 디바이스에 저장한다.
              <br />
              (브라우저마다 소요시간이 다를 수 있습니다. 약 1~3초)
              <br />
              3.개성넘치는 나의동물친구를 프로필사진으로 등록한다.
              <br />
              <br />
              <h3>맘에 드셨다면 정성스런 리뷰 부탁드립니다!</h3>
            </p>
          </div>
          <div className="modal_bottomview">
            {/*모달 바텀뷰*/}
            <img
              className="logo_img2"
              alt="버튼 종류"
              src="https://i.imgur.com/c74otaA.png"
            />
            <p className="textcolor modal_text">
              랜덤버튼에는 셀렉버튼에는 없는 ✨레어✨
              <br />
              요소들도 있으니,한번쯤 사용해보세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
