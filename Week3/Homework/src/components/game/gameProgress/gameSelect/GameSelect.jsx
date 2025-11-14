import { GAME_LEVEL } from "../../../../constants/game";
import * as styles from "./GameSelect.css";

export function GameSelect({ level, onLevelChange }) {
  return (
    <select
      className={styles.select}
      value={level}
      onChange={(e) => onLevelChange(e.target.value)}
    >
      {Object.keys(GAME_LEVEL).map((KEY) => (
        <option key={KEY} value={KEY}>
          {GAME_LEVEL[KEY]}
        </option>
      ))}
    </select>
  );
}
