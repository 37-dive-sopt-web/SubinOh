import { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { globalLayout } from "./styles/base/global.css.ts";

function App() {
  const [tab, setTab] = useState("game");

  return (
    <div className={globalLayout}>
      {/** 헤더 영역 */}
      <Header tab={tab} setTab={setTab} />

      {/** 컨텐츠 영역 (게임, 랭킹) */}
      <main></main>
    </div>
  );
}

export default App;
