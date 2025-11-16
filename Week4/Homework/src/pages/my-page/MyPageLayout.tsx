import { Outlet, useNavigate } from "react-router";
import * as styles from "./MyPageLayout.css";
import { Modal } from "./members/components/modal/Modal";
import { useState } from "react";

export function MyPageLayout() {
  const name = "이름";
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.TitleBox}>
          <h1 className={styles.Title}>마이페이지</h1>
          <span>안녕하세요. {name}님</span>
        </div>
        <div className={styles.TabBox}>
          <button className={styles.tab} onClick={() => navigate("/mypage")}>
            내 정보
          </button>
          <button
            className={styles.tab}
            onClick={() => navigate("/mypage/members")}
          >
            회원 조회
          </button>
          <button className={styles.tab} onClick={handleLogout}>
            로그아웃
          </button>
          <button className={styles.tab} onClick={() => setIsOpen(true)}>
            회원 탈퇴
          </button>
        </div>
      </header>
      <Outlet />
      {isOpen && <Modal isClose={() => setIsOpen(false)} />}
    </div>
  );
}
