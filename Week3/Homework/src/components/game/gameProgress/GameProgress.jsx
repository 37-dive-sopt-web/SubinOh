import { GameHistory } from "../gameHistory/GameHistory";
import { GameMessage } from "../gameMessage/gameMessage";
import { GameSelect } from "../gameSelect/GameSelect";
import * as styles from "./GameProgress.css";

export function GameProgress({ gameState, history }) {
  return (
    <div className={styles.layout}>
      <GameSelect />
      <div>타임 란</div>
      <GameMessage gameState={gameState} />
      <GameHistory history={history} />
    </div>
  );
}
