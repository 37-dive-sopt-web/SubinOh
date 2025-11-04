import { GameTitle } from "../../components/game/gameTitle/GameTitle";
import { GameBoard } from "../../components/game/gameBoard/GameBoard";
import { GameProgress } from "../../components/game/gameProgress/GameProgress";
import { useGameState } from "../../hooks/useGameState";

import * as styles from "./GamePage.css";

function GamePage() {
  const { deckInfo, gameId, handleGenerateDeck, handleCardClick } =
    useGameState(1);

  return (
    <main className={styles.wrapper}>
      <div className={styles.layout}>
        <div className={styles.board}>
          {/** 게임 보드 헤더(타이트) */}
          <GameTitle onReset={() => handleGenerateDeck(deckInfo.level)} />
          {/** 게임 보드판 */}
          {deckInfo.data !== null && (
            <GameBoard
              key={gameId}
              deckInfo={deckInfo}
              onCardClick={handleCardClick}
            />
          )}
        </div>
        <div className={styles.progress}>
          <GameProgress />
        </div>
      </div>
    </main>
  );
}

export default GamePage;
