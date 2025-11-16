import { Button } from "../../../components/button/Button";
import { InputBox } from "../../../components/input-box/InputBox";
import * as styles from "./MyPageInfo.css";
import { useInfo } from "./hooks/useInfo";

export function MyPageInfo() {
  const { userData, handleChangeUserData, handleSubmit } = useInfo();

  return (
    <div className={styles.container}>
      <h2>내 정보</h2>
      <div className={styles.idContainer}>
        <span className={styles.caption}>아이디</span>
        <span className={styles.id}>{userData.id}</span>
      </div>
      <div className={styles.form}>
        <InputBox
          label="이름"
          type="text"
          id="name"
          name="name"
          value={userData.name}
          placeholder=""
          onChange={(e) => handleChangeUserData(e)}
        />
        <InputBox
          label="이메일"
          type="email"
          id="email"
          name="email"
          value={userData.email}
          placeholder=""
          onChange={(e) => handleChangeUserData(e)}
        />
        <InputBox
          label="나이"
          type="number"
          id="age"
          name="age"
          value={userData.age}
          placeholder=""
          onChange={(e) => handleChangeUserData(e)}
        />
        <Button variant="primary" onClick={handleSubmit}>
          저장
        </Button>
      </div>
    </div>
  );
}
