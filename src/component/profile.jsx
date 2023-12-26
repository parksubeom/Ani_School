import "../Style/Profile.css";
import SelectButton from "./SelectButton.jsx";
function Profile() {
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
          <SelectButton />
        </div>
      </section>
    </>
  );
}

export default Profile;
