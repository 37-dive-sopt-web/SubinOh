import { Button } from "../../../../../components/button/Button";
import { InputBox } from "../../../../../components/input-box/InputBox";

import * as styles from "./Step.css";

export function Step1({
  id,
  handleNextStep,
  handleChangeFormData,
}: {
  id: string;
  handleNextStep: () => void;
  handleChangeFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const isError = id.length >= 50;

  return (
    <div className={styles.container}>
      <InputBox
        label="아이디"
        type="text"
        id="id"
        name="id"
        placeholder="아이디를 입력해주세요(50자 이하)"
        value={id}
        onChange={(e) => handleChangeFormData(e)}
      />
      {isError && (
        <span className={styles.message}>
          아이디를 50자 이하로 입력해주세요
        </span>
      )}
      <Button
        variant="primary"
        disabled={isError || id.trim().length == 0}
        onClick={handleNextStep}
      >
        다음
      </Button>
    </div>
  );
}
