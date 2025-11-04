import { useEffect, useState } from "react";
import { GAME_STATE } from "../constants/game";

const MODAL_COUNTDOWN_SEC = 3;

export function useGameModal(gameState, onResetGame) {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState(MODAL_COUNTDOWN_SEC);

  useEffect(() => {
    if (gameState === GAME_STATE.WIN || gameState === GAME_STATE.TIMEOUT) {
      setIsOpen(true);
      setCountdown(MODAL_COUNTDOWN_SEC);

      const handleCountDown = setInterval(() => {
        setCountdown((prev) => {
          if (prev < 1) {
            clearInterval(handleCountDown);
            setIsOpen(false);
            onResetGame();
            return 0;
          } else {
            return prev - 1;
          }
        });
      }, 1000);

      return () => clearInterval(handleCountDown);
    }
  }, [gameState, onResetGame]);
  return { isOpen, countdown };
}
