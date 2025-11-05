import { RankTable } from "../../components/rank/rankTable/RankTable";
import { RankTitle } from "../../components/rank/rankTitle/RankTitle";
import { getGameLogs, LOCAL_STORAGE_KEY } from "../../utils/gameStorage";
import * as styles from "./RankPage.css";

export function RankPage() {
  const gameLogs = getGameLogs();
  return (
    <div className={styles.wrapper}>
      <RankTitle />
      <RankTable gameLogs={gameLogs} />
    </div>
  );
}
