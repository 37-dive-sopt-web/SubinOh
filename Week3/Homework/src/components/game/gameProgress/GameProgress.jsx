import { GameSelect } from "../gameSelect/GameSelect";
import { GameState } from "../gameState/GameState";
import { GameMessage } from "../gameMessage/gameMessage";
import { GameHistory } from "../gameHistory/GameHistory";
import * as styles from "./GameProgress.css";

export function GameProgress({
  deckInfo,
  time,
  gameState,
  successDeck,
  history,
}) {
  return (
    <div className={styles.layout}>
      <GameSelect />
      <GameState time={time} deckInfo={deckInfo} successDeck={successDeck} />
      <GameMessage gameState={gameState} />
      <GameHistory history={history} />
    </div>
  );
}
