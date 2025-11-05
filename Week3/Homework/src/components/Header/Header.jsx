import * as styles from "./Header.css";

export function Header({ tab, setTab }) {
  // 게임 탭 변경
  const handleChangeTab = (type) => {
    if (type !== "game" && type !== "rank") return;
    setTab(type);
  };

  return (
    <header className={styles.wrapper}>
      <h1 className={styles.title}>숫자 카드 짝 맞추기</h1>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.button({ selected: tab === "game" })}
          onClick={() => handleChangeTab("game")}
        >
          게임
        </button>
        <button
          className={styles.button({ selected: tab === "rank" })}
          onClick={() => handleChangeTab("rank")}
        >
          랭킹
        </button>
      </div>
    </header>
  );
}
