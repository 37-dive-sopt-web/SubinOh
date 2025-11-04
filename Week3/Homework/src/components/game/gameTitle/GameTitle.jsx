import * as styles from "./GameTitle.css";

export function GameTitle() {
  return (
    <div className={styles.titleWrapper}>
      <h2>게임 보드</h2>
      <button className={styles.resetButton}>게임리셋</button>
    </div>
  );
}
