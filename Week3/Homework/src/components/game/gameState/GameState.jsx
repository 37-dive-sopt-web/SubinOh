import { GAME_DECK } from "../../../constants/game";
import { secFormatter } from "../../../utils/formatter";
import * as styles from "./GameState.css";

export function GameState({ time, deckInfo, successDeck }) {
  const [row, column] = GAME_DECK[deckInfo.level];
  const totalDeck = row * column;

  return (
    <div className={styles.stateGroup}>
      <div className={styles.state}>
        <div className={styles.stateTitle}>남은 시간</div>
        <div className={styles.stateContent}>{secFormatter(time)}</div>
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
