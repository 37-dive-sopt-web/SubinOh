import { GAME_LEVEL } from "../../../constants/game";
import * as styles from "./GameSelect.css";

export function GameSelect() {
  return (
    <select className={styles.select}>
      {Object.keys(GAME_LEVEL).map((KEY) => (
        <option key={KEY} value={KEY}>
          {GAME_LEVEL[KEY]}
        </option>
      ))}
    </select>
  );
}
