import * as styles from "./Result.css";
export function Result({
  userInfo,
}: {
  userInfo: {
    id: number;
    username: string;
    name: string;
    email: string;
    age: number;
    status: string;
  };
}) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p>이메일</p>
        <p className={styles.text}>{userInfo.email}</p>
      </div>
      <div className={styles.row}>
        <p>아이디</p>
        <p className={styles.text}>{userInfo.id}</p>
      </div>
      <div className={styles.row}>
        <p>이름</p>
        <p className={styles.text}>{userInfo.name}</p>
      </div>
      <div className={styles.row}>
        <p>나이</p>
        <p className={styles.text}>{userInfo.age}</p>
      </div>
    </div>
  );
}
