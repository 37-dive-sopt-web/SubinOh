import { useEffect, useState } from "react";
import { GAME_STATE } from "../constants/game";

const MODAL_COUNTDOWN_SEC = 3;

export function useGameModal(level, gameState, onResetGame) {
  const [isOpen, setIsOpen] = useState(false); // 모달 오픈 여부
  const [countdown, setCountdown] = useState(MODAL_COUNTDOWN_SEC); // 모달 카운트 다운 (3초)

  /**
   * @description
   * - 게임이 클리어되거나 타임아웃이 되었을 때. 모달 오픈
   * - 3초 카운트다운 후, 새로운 게임 생성
   */
  useEffect(() => {
    if (gameState === GAME_STATE.WIN || gameState === GAME_STATE.TIMEOUT) {
      setIsOpen(true);
      setCountdown(MODAL_COUNTDOWN_SEC);
      const handleCountDown = setInterval(() => {
        setCountdown((prev) => {
          if (prev < 1) {
            clearInterval(handleCountDown);
            setIsOpen(false);
            onResetGame(level);
            return 0;
          } else {
            return prev - 1;
          }
        });
      }, 1000);

      return () => clearInterval(handleCountDown);
    }
  }, [level, gameState, onResetGame]);
  return { isOpen, countdown };
}
