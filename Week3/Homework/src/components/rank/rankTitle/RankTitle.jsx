import * as styles from "./RankTitle.css";
export function RankTitle() {
  return (
    <div className={styles.titleWrapper}>
      <h2>랭킹 보드</h2>
      <button className={styles.button}>기록 초기화</button>
    </div>
  );
}
