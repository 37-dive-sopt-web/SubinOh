import { createPortal } from "react-dom";
import * as styles from "./Modal.css";
import { Button } from "../../../../../components/button/Button";

export function Modal({
  isClose,
  withdraw,
}: {
  isClose: () => void;
  withdraw: () => void;
}) {
  const modalRoot = document.querySelector("#modal");

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <div className={styles.title}>정말 탈퇴하시겠어요?</div>
          <div className={styles.content}>탈퇴 후에는 모든 정보가 삭제돼요</div>
        </div>
        <div className={styles.buttons}>
          <Button type="button" variant="default" onClick={isClose}>
            취소
          </Button>
          <Button type="button" variant="warn" onClick={withdraw}>
            회원탈퇴
          </Button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
