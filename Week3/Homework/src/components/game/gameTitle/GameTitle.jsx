import * as styles from "./GameTitle.css";

export function GameTitle({ onReset }) {
  return (
    <div className={styles.titleWrapper}>
      <h2>게임 보드</h2>
      <button className={styles.resetButton} onClick={onReset}>
        게임리셋
      </button>
    </div>
  );
}
