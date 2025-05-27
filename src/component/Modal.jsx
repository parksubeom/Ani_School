import React, { useEffect, useRef } from 'react';
import "../Style/Modal.css"; // 모달 스타일 시트

function Modal({ handleModal }) {
  const modalContentRef = useRef(null); // 모달 컨텐츠 div에 대한 ref
  const prevFocusedElement = useRef(null); // 모달이 열리기 전 포커스된 요소 저장

  // 모달이 마운트될 때 (화면에 나타날 때) 실행
  useEffect(() => {
    // 1. 모달이 열리기 전 포커스된 요소 저장
    //    이 요소는 모달이 닫힌 후 다시 포커스될 예정
    prevFocusedElement.current = document.activeElement;

    // 2. 모달 컨텐츠로 포커스 이동
    if (modalContentRef.current) {
      modalContentRef.current.focus();
    }

    // 3. Esc 키 누르면 모달 닫기
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleModal(); // 모달 닫기 함수 호출
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // 4. 클린업 함수: 컴포넌트 언마운트 시 (모달 닫힐 때) 실행
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // 5. 모달을 닫은 후, 모달을 열기 전 포커스되었던 요소로 포커스 복원
      if (prevFocusedElement.current) {
        prevFocusedElement.current.focus();
      }
    };
  }, [handleModal]); // handleModal이 변경될 경우에만 재실행 (안정성)

  // 모달 내부의 키보드 트랩 (탭 순서 제어)
  // 이 부분은 좀 더 복잡한 로직이 필요하며, 아래는 기본적인 예시입니다.
  // 실제 구현에서는 focusable 요소를 모두 찾아서 관리하는 로직이 추가될 수 있습니다.
  const trapFocus = (event) => {
    if (event.key === 'Tab') {
      const focusableElements = modalContentRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) { // Shift + Tab (역방향)
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else { // Tab (정방향)
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  };


  return (
    // role="dialog": 대화 상자임을 스크린 리더에 알림
    // aria-modal="true": 모달 바깥의 콘텐츠를 비활성화 (스크린 리더가 모달 안에만 집중)
    // aria-labelledby: 모달의 제목과 연결 (modalTitle ID)
    <div className="modal_section" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      {/* modal_contents가 실제 모달 컨텐츠 영역이며, 여기에 포커스를 보냄 */}
      <div className="modal_contents" tabIndex="-1" ref={modalContentRef} onKeyDown={trapFocus}>
        {/* 장식적인 패턴 이미지들은 스크린 리더가 읽지 않도록 aria-hidden="true" 설정 */}
        <ul aria-hidden="true">
          <li className="modalPattern mtop-left"></li>
          <li className="modalPattern mtop-right"></li>
          <li className="modalPattern mbottom-left"></li>
          <li className="modalPattern mbottom-right"></li>
        </ul>

        {/* 모달 상단 아이콘 (장식적이라면 aria-hidden="true") */}
        <div className="modal_icon" aria-hidden="true"></div>

        {/* 닫기 버튼: aria-label로 명확한 기능 설명 */}
        <button className="exit_button" onClick={handleModal} aria-label="모달 닫기">
          ×
        </button>

        <div className="modal_totalview">
          {/* 모달 탑뷰 */}
          <div className="modal_topview">
            {/* 로고 이미지: alt 텍스트 구체화 */}
            <img
              className="logo_img"
              alt="ANISCHOOL 로고"
              src="https://i.imgur.com/iLtMaIJ.png"
            />
            <p className="modal_text">
              자신의 개성을 보여 줄 나만의 친구들을 가지고 싶지 않나요?
              ANISCHOOL은 다양하고 귀여운 나만의 애니콘을 자신만의 개성으로 직접
              커스터마이징 가능한 프로필 아이콘을 제공합니다.
              <br />
              <br />
              1. 원하는 동물 친구를 만든다.
              <br />
              2. 캐릭터를 프로필 생성 버튼을 통해 디바이스에 저장한다.
              <br />
              (브라우저마다 소요시간이 다를 수 있습니다. 약 1~3초)
              <br />
              3. 개성 넘치는 나의 동물 친구를 프로필 사진으로 등록한다.
              <br />
              <br />
              {/* 모달 제목: aria-labelledby에 연결될 ID 부여 */}
              <h3 id="modalTitle">맘에 드셨다면 정성스런 리뷰 부탁드립니다!</h3>
            </p>
          </div>
          <div className="modal_bottomview">
            {/* 모달 바텀뷰 */}
            {/* 이미지: alt 텍스트 구체화 (이미지의 내용 설명) */}
            <img
              className="logo_img2"
              alt="얼굴랜덤,컬러랜덤,눈랜덤,입랜덤,악세랜덤,무늬랜덤,배경랜덤 버튼이 있다"
              src="https://i.imgur.com/c74otaA.png"
            />
            <p className="textcolor modal_text">
              랜덤 버튼에는 셀렉 버튼에는 없는 ✨레어✨
              <br />
              요소들도 있으니, 한 번쯤 사용해보세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;