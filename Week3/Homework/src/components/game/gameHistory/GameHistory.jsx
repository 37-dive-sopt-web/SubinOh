import * as styles from "./GameHistory.css";

export function GameHistory({ history }) {
  return (
    <div className={styles.history}>
      <div className={styles.title}>최근 히스토리</div>
      <div className={styles.historyList}>
        {history.map((log) => (
          <div key={log.id} className={styles.historyLog}>
            <div>
              {log.cards[0]}, {log.cards[1]}
            </div>
            <div
              className={styles.logState({ success: log.type === "success" })}
            >
              {log.type == "success" ? "성공" : "실패"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
