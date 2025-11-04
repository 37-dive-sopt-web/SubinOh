import { GAME_DECK } from "../../../constants/game";
import * as styles from "./GameState.css";

export function GameState({ time, deckInfo, successDeck }) {
  const [row, column] = GAME_DECK[deckInfo.level];
  const totalDeck = row * column;
  const formattedTime = (Math.max(0, time) / 1000).toFixed(2);
  return (
    <div className={styles.stateGroup}>
      <div className={styles.state}>
        <div className={styles.stateTitle}>남은 시간</div>
        <div className={styles.stateContent}>{formattedTime}</div>
      </div>
      <div className={styles.state}>
        <div className={styles.stateTitle}>성공한 덱</div>
        <div className={styles.stateContent}>
          {successDeck} / {totalDeck / 2}
        </div>
      </div>
      <div className={styles.state}>
        <div className={styles.stateTitle}>남은 덱</div>
        <div className={styles.stateContent}>{totalDeck / 2 - successDeck}</div>
      </div>
    </div>
  );
}
