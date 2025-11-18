import { InputBox } from "../../../components/input-box/InputBox";
import * as styles from "./Members.css";
import { Button } from "../../../components/button/Button";
import { Result } from "./components/result-member/Result";
import { useSearch } from "./hooks/useSearch";

export function Members() {
  const { userId, handleUserId, handleSearch, userInfo, isError, error } =
    useSearch();
  return (
    <div className={styles.container}>
      <h2>내 정보</h2>
      <div className={styles.form}>
        <InputBox
          label="회원ID"
          type="number"
          id="id"
          name="id"
          placeholder="회원ID를 입력하세요"
          value={userId?.toString() || ""}
          onChange={(e) => handleUserId(Number(e.target.value))}
        />
        <Button variant="primary" onClick={handleSearch}>
          확인
        </Button>
      </div>
      {userInfo ? (
        <Result userInfo={userInfo} />
      ) : (
        isError && <span className={styles.error}>{error}</span>
      )}
    </div>
  );
}
