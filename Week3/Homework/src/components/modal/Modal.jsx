import { createPortal } from "react-dom";
import * as styles from "./Modal.css";
import { GAME_STATE } from "../../constants/game";
import { secFormatter } from "../../utils/formatter";

export function Modal({ gameState, level, resultTime, modalCountdown }) {
  const modalRoot = document.querySelector("#modal");

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.title}>
          {gameState === GAME_STATE.WIN ? "성공" : "실패"}
        </div>
        <div className={styles.content}>
          {gameState === GAME_STATE.WIN
            ? `Level ${level} 을 ${secFormatter(
                resultTime
              )}초 만에 클리어했어요🤩`
            : `Level ${level} 도전에 실패했어요😥`}
        </div>
        <div
          className={styles.information({
            status: gameState === GAME_STATE.WIN,
          })}
        >
          {modalCountdown}초 후 자동으로 새 게임을 시작해요
        </div>
      </div>
    </div>,
    modalRoot
  );
}
