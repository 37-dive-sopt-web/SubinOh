import * as styles from "./RankTable.css";

export function RankTable() {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.headRow}>순위</th>
          <th className={styles.headRow}>레벨</th>
          <th className={styles.headRow}>클리어 시간(초)</th>
          <th className={styles.headRow}>기록 시작</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
