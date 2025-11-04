import * as styles from "./GameSelect.css";

export function GameSelect() {
  const LEVEL = { 1: "Level1", 2: "Level2", 3: "Level3" };

  return (
    <select className={styles.select}>
      {Object.keys(LEVEL).map((KEY) => (
        <option key={KEY} value={KEY}>
          {LEVEL[KEY]}
        </option>
      ))}
    </select>
  );
}
