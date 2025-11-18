import { Outlet, useNavigate } from "react-router";
import * as styles from "./MyPageLayout.css";
import icX from "../../assets/ic-x.svg";
import icHamburger from "../../assets/ic-hamburger.svg";
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
  const [isOpen, setIsOpen] = useState(false); // 모달 오픈
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 사이드바 오픈

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
    setIsMenuOpen(false);
  };

  const handleNavigation = (path?: string, action?: () => void) => {
    if (path) navigate(path);
    if (action) action();
    setIsMenuOpen(false);
  };

  const MENU_ITEMS = [
    { label: "내 정보", path: "/mypage" },
    { label: "회원 조회", path: "/mypage/members" },
    { label: "로그아웃", action: handleLogout },
    { label: "회원 탈퇴", action: () => setIsOpen(true) },
  ];

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.TitleBox}>
            <h1 className={styles.Title}>마이페이지</h1>
            <span>
              안녕하세요. {data?.data !== null ? data?.data.name : "정보없음."}
              님
            </span>
          </div>
          {/** 데스크탑 화면 메뉴탭 */}
          <div className={styles.TabBox}>
            {MENU_ITEMS.map((item) => (
              <button
                key={item.label}
                className={styles.tab}
                onClick={() => handleNavigation(item.path, item.action)}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/** 모바일 화면 메뉴탭 */}
          <button
            className={styles.hamburgerButton}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <img src={icX} alt="메뉴바 닫기 아이콘" />
            ) : (
              <img src={icHamburger} alt="메뉴바 열기 아이콘" />
            )}
          </button>
          <div className={styles.mobileMenu({ isOpen: isMenuOpen })}>
            {MENU_ITEMS.map((item) => (
              <button
                key={item.label}
                className={styles.mobileMenuItem}
                onClick={() => handleNavigation(item.path, item.action)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </header>
        {/** 회원탈퇴 모달 */}
        {isOpen && (
          <Modal isClose={() => setIsOpen(false)} withdraw={handleWithdraw} />
        )}
      </div>
      <Outlet />
    </>
  );
}
