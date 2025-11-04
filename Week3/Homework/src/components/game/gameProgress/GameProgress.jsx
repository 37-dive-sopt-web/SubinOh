import { GameSelect } from "../gameSelect/GameSelect";
import * as styles from "./GameProgress.css";

export function GameProgress() {
  return (
    <div className={styles.layout}>
      <GameSelect />
      <div>타임 란</div>
      <div>안내메시지 란</div>
      <div>로그 란</div>
    </div>
  );
}
