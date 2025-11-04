import { GUIDE_MESSAGES } from "../../../constants/game";
import * as styles from "./GameMessage.css";

export function GameMessage() {
  return (
    <div className={styles.message}>
      <div className={styles.title}>안내 메시지</div>
      <div className={styles.content}>{GUIDE_MESSAGES["ready"]}</div>
    </div>
  );
}
