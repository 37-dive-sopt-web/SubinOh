import { Outlet, useNavigate } from "react-router";
import * as styles from "./MyPageLayout.css";
import { Modal } from "./members/components/modal/Modal";
import { useState } from "react";
import { deleteUserId, getUserId } from "../../utils/auth-storage";
import { useMutation, useQuery } from "@tanstack/react-query";
import { withdrawMutationOptions } from "../../apis/mutations/withdraw";
import { userQueryOptions } from "../../apis/queries/user";

export function MyPageLayout() {
  const { data } = useQuery(userQueryOptions.getUser(getUserId()));
  const { mutate: withdrawMutate } = useMutation(
    withdrawMutationOptions.withdraw
  );
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    deleteUserId();
    navigate("/");
  };

  const handleWithdraw = () => {
    withdrawMutate(getUserId(), {
      onSuccess: () => {
        alert("회원탈퇴가 완료되었습니다");
        deleteUserId();
        navigate("/", { replace: true });
      },
      onError: () => {
        alert("회원탈퇴에 실패했습니다");
      },
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.TitleBox}>
          <h1 className={styles.Title}>마이페이지</h1>
          <span>안녕하세요. {data?.name}님</span>
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
      {isOpen && (
        <Modal isClose={() => setIsOpen(false)} withdraw={handleWithdraw} />
      )}
    </div>
  );
}
