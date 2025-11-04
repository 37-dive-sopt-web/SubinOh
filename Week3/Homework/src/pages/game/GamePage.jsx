import { GameTitle } from "../../components/game/gameTitle/GameTitle";
import { GameBoard } from "../../components/game/gameBoard/GameBoard";
import { GameProgress } from "../../components/game/gameProgress/GameProgress";
import { useGameState } from "../../hooks/useGameState";

import * as styles from "./GamePage.css";
import { Modal } from "../../components/modal/Modal";
import { TIME_LIMIT } from "../../constants/game";
import { useGameModal } from "../../hooks/useGameModal";
import { useCallback } from "react";

function GamePage() {
  const {
    deckInfo,
    gameId,
    gameState,
    time,
    successDeck,
    gameHistory,
    handleGenerateDeck,
    handleCardClick,
  } = useGameState(1);

  const onResetGame = useCallback(() => {
    handleGenerateDeck(deckInfo.level);
  }, [handleGenerateDeck, deckInfo.level]);

  const { isOpen, countdown } = useGameModal(gameState, onResetGame);
  const resultTime = TIME_LIMIT[deckInfo.level] * 1000 - time; // (게임 클리어 시) 남은 게임 시간

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
          <GameProgress
            onLevelChange={handleGenerateDeck}
            deckInfo={deckInfo}
            gameState={gameState}
            time={time}
            successDeck={successDeck}
            history={gameHistory}
          />
        </div>
      </div>
      {isOpen && (
        <Modal
          gameState={gameState}
          level={deckInfo.level}
          resultTime={resultTime}
          modalCountdown={countdown}
        />
      )}
    </main>
  );
}

export default GamePage;
