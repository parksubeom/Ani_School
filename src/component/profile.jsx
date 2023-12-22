import "../Style/Profile.css";
import SelectButton from "./SelectButton.jsx";
function Profile({
  setRandomFace,
  setRandomColor,
  setRandomEyes,
  setRandomMouth,
  setRandomAcc,
  setRandomPattern,
  setRandombackground,
  randomface,
  randomcolor,
  randomeyes,
  randommouth,
  randomacc,
  randompattern,
  randombackground,
  setSectionFlash1,
}) {
  return (
    <>
      <section className="all-group">
        <aside className="clip-group">
          <div className="clip-bottom">
            <p>학생 프로필 작성</p>
          </div>
          <div className="clip-top"></div>
        </aside>
        <ul>
          <li className="Screw top-left">×</li>
          <li className="Screw top-right">×</li>
          <li className="Screw bottom-left">×</li>
          <li className="Screw bottom-right">×</li>
        </ul>
        <div className="profilePaper-group">
          <SelectButton
            setRandomFace={setRandomFace}
            setRandomColor={setRandomColor}
            setRandomEyes={setRandomEyes}
            setRandomMouth={setRandomMouth}
            setRandomAcc={setRandomAcc}
            setRandomPattern={setRandomPattern}
            setRandombackground={setRandombackground}
            randomface={randomface}
            randomcolor={randomcolor}
            randomeyes={randomeyes}
            randommouth={randommouth}
            randomacc={randomacc}
            randompattern={randompattern}
            randombackground={randombackground}
            setSectionFlash1={setSectionFlash1}
          />
        </div>
      </section>
    </>
  );
}

export default Profile;
