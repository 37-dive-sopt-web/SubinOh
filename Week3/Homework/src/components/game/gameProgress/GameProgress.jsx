import { GameSelect } from "./gameSelect/GameSelect";
import { GameState } from "./gameState/GameState";
import { GameMessage } from "./gameMessage/GameMessage";
import { GameHistory } from "./gameHistory/GameHistory";
import * as styles from "./GameProgress.css";

export function GameProgress({
  onLevelChange,
  deckInfo,
  time,
  gameState,
  successDeck,
  history,
}) {
  return (
    <div className={styles.layout}>
      <GameSelect level={deckInfo.level} onLevelChange={onLevelChange} />
      <GameState time={time} deckInfo={deckInfo} successDeck={successDeck} />
      <GameMessage gameState={gameState} />
      <GameHistory history={history} />
    </div>
  );
}
