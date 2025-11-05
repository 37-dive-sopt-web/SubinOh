import { dateFormatter, secFormatter } from "../../../utils/formatter";
import * as styles from "./RankTable.css";

export function RankTable({ gameLogs }) {
  if (gameLogs.length === 0) {
    return <div className={styles.message}>게임 기록이 없습니다</div>;
  }

  return (
    <table>
      <thead className={styles.head}>
        <tr>
          <th className={styles.headRow}>순위</th>
          <th className={styles.headRow}>레벨</th>
          <th className={styles.headRow}>클리어 시간(초)</th>
          <th className={styles.headRow}>기록 시작</th>
        </tr>
      </thead>
      <tbody>
        {gameLogs.map((log, idx) => (
          <tr key={log.id}>
            <td className={styles.bodyRow}>{idx + 1}</td>
            <td className={styles.bodyRow}>Level {log.level}</td>
            <td className={styles.bodyRow}>{secFormatter(log.clearTime)}</td>
            <td className={styles.bodyRow}>
              {dateFormatter.format(new Date(log.startTime))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
