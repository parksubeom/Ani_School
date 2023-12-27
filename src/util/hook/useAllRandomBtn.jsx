export function useAllRandomBtn(
  allRandomCategory,
  audio,
  setAudio,
  setSectionFlash1
) {
  /**
   * 전체 요소의 랜덤한 값을 할당해주는 함수.
   * 잠금상태인지 아닌지 조건문으로 판별하여 값을 할당
   */
  const allrandomBtn = () => {
    allRandomCategory.forEach((category) => {
      if (category[0]) {
        return category[1](Math.round(Math.random() * category[3]));
      }
    });

    setAudio(!audio);
    setSectionFlash1(true);
    setTimeout(() => {
      setSectionFlash1(false);
    }, 500);
    setTimeout(() => {
      setAudio(false);
    }, 300);
  };
  return allrandomBtn;
}
