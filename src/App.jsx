import { lazy, Suspense } from "react";
import "./App.css";
import Manual from "./component/Manual.jsx";
import Profile from "component/Profile";
const ViewSection = lazy(() => import("component/ViewSection"));
//yeongchan1228.tistory.com/128 [Dev-Logs:티스토리]
function App() {
  //App컴포넌트는 각 컴포넌트로 부터 값을 받아와서 다시 뿌려주는 허브역할을 해야한다.

  return (
    <section className="App">
      <article className="viewGroup__">
        <div className="Top_ber"></div>
        <ul>
          <li className="Pattern ptop-left"></li>
          <li className="Pattern ptop-right"></li>
          <li className="Pattern pbottom-left"></li>
          <li className="Pattern pbottom-right"></li>
        </ul>
        <ViewSection className="viewSection" />
        <footer>
          <p>
            본 프로젝트는 수범,주비의 공동작품입니다.
            <br />
            페이지내에 사용된 모든 이미지들의
            <br />
            무단 배포 및 도용을 금지합니다.
          </p>
        </footer>
      </article>
      <article className="btnAllGroup__">
        <Manual />
        <div className="profileGroup__">
          <Profile />
        </div>
      </article>
    </section>
  );
}

export default App;
