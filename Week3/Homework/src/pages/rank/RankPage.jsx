import { RankTable } from "../../components/rank/rankTable/RankTable";
import { RankTitle } from "../../components/rank/rankTitle/RankTitle";
import * as styles from "./RankPage.css";

export function RankPage() {
  return (
    <div className={styles.wrapper}>
      <RankTitle />
      <RankTable />
    </div>
  );
}
