import { useState } from "react";
import { RankTable } from "../../components/rank/rankTable/RankTable";
import { RankTitle } from "../../components/rank/rankTitle/RankTitle";
import { getGameLogs, setGameLogs } from "../../utils/gameStorage";
import * as styles from "./RankPage.css";

export function RankPage() {
  const [logs, setLogs] = useState(getGameLogs());
  const resetGameLogs = () => {
    setGameLogs([]);
    setLogs([]);
  };

  return (
    <div className={styles.wrapper}>
      <RankTitle onReset={resetGameLogs} />
      <RankTable gameLogs={logs} />
    </div>
  );
}
