import { useCallback, useEffect, useState } from "react";
import { buildDeck } from "../utils/buildDeck";
import { GAME_DECK, GAME_STATE, TIME_LIMIT } from "../constants/game";
import { useGameTimer } from "./useGameTimer";
import { getGameLogs, setGameLogs } from "../utils/gameStorage";

export function useGameState(initialLevel = 1) {
  const [deckInfo, setDeckInfo] = useState({
    status: "idle",
    data: null,
    level: initialLevel,
  }); // 생성한 카드 덱 정보 (준비상태, 카드데이터, 레벨)
  const [currentClickCard, setCurrentClickCard] = useState([]); // (최근) 클릭된 카드 리스트
  const [isChecking, setIsChecking] = useState(false); // 매칭하고 있는 상태인지 체크
  const [gameState, setGameState] = useState(GAME_STATE.READY); // 게임 상태
  const [gameId, setGameId] = useState(1); // 게임 리셋 감지 키

  const [successDeck, setSuccessDeck] = useState(new Set()); // 매칭 성공 덱 Set
  const [gameHistory, setGameHistory] = useState([]); // 게임 히스토리

  const [startTime, setStartTime] = useState(null); // 게임 시작 시간

  const { time, startTimer, stopTimer, resetTimer } = useGameTimer(
    useCallback(() => {
      setGameState(GAME_STATE.TIMEOUT);
    }, [])
  );

  /**
   * @description
   * - 새로운 카드덱을 생성하는 함수
   * - 게임 관련 상태를 모두 초기화합니다. 타이머는 현재 레벨 값에 맞춰 시간을 리셋합니다.
   * @params {number} level
   * - 현재 level 값(1,2,3)에 따라 카드 덱 생성
   */
  const handleGenerateDeck = useCallback(
    (level) => {
      const data = buildDeck(level);
      setDeckInfo({ status: "ready", data, level });

      setCurrentClickCard([]);
      setIsChecking(false);
      setGameState(GAME_STATE.READY);
      setGameId((id) => id + 1);
      setSuccessDeck(new Set());
      setGameHistory([]);

      resetTimer(TIME_LIMIT[level] * 1000);
    },
    [resetTimer]
  );

  /**
   * @decription
   * - 레벨이 변경되거나 게임이 리셋되면, handleGenerateDeck() 실행 (새로운 카드덱 생성)
   */
  useEffect(() => {
    handleGenerateDeck(deckInfo.level);
  }, [deckInfo.level, handleGenerateDeck]);

  /**
   * @description
   * - 카드 클릭 시, 카드 상태(isClicked)를 변경하는 함수.
   * - 게임 첫 번째로 카드가 클릭된 경우, 타이머를 시작합니다.
   * @param {card} clickedCard
   * @returns
   */
  const handleCardClick = (clickedCard) => {
    if (
      isChecking ||
      clickedCard.isClicked ||
      clickedCard.isMatched ||
      deckInfo.status !== "ready"
    )
      return;

    // 타이머 시작
    const fullTime = TIME_LIMIT[deckInfo.level] * 1000;
    if (time === fullTime) {
      setStartTime(new Date());
      startTimer(fullTime);
    }

    // 클릭된 카드 상태 변경
    setDeckInfo((prev) => ({
      ...prev,
      data: prev.data.map((card) =>
        card.id === clickedCard.id ? { ...card, isClicked: true } : card
      ),
    }));

    // 선택된 카드가 현재 1개일 경우, GAME_STATE >> INCOMPLETE 로 변경
    setCurrentClickCard((prev) => {
      const newClicks = [...prev, clickedCard];
      if (newClicks.length === 1) {
        setGameState(GAME_STATE.INCOMPLETE);
      }
      return newClicks;
    });
  };

  /**
   * @description
   * - 카드 매칭로직에서의 공통로직을 처리하는 함수
   * - 전달받은 action 함수를 실행한 후, 공통로직 실행
   * @param {Function} action
   */
  const runActions = (action) => {
    setTimeout(() => {
      action();
      setCurrentClickCard([]);
      setIsChecking(false);
    }, 300);
  };

  /**
   * @description
   * - 카드 2개의 값(value)이 일치하는지 여부를 체크하는 로직
   * - 매칭 성공/실패와 상관없이 매칭 로그(gameHistory) 업데이트
   * 1-1. 성공 : GAME_STATE > SUCCESS 변경, 카드 상태(isMatched) 변경
   * 1-2. 성공(게임 클리어) : GAME_STATE > WIN 변경, ..., 타이머 중지
   * 2-1. 실패 : GAME_STATE > FAIL 변경, 카드 상태(isClicked) 변경
   */
  useEffect(() => {
    if (currentClickCard.length !== 2) return;

    setIsChecking(true);
    const [card1, card2] = currentClickCard;
    const isMatch = card1.value === card2.value;

    const newLog = {
      id: new Date().toISOString() + Math.random(),
      type: isMatch ? GAME_STATE.SUCCESS : GAME_STATE.FAIL,
      cards: [card1.value, card2.value],
    };
    setGameHistory((prev) => [...prev, newLog]);

    if (isMatch) {
      // ------ 매칭 성공 로직
      setGameState(GAME_STATE.SUCCESS);

      const successAction = () => {
        setDeckInfo((prev) => ({
          ...prev,
          data: prev.data.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, isMatched: true }
              : card
          ),
        }));

        setSuccessDeck((prev) => {
          const newSet = new Set(prev);
          newSet.add(card1.value);
          return newSet;
        });

        const successCount = successDeck.size + 1;
        // 매칭이 모두 성공하여 게임을 클리어한 경우
        if (
          successCount ===
          (GAME_DECK[deckInfo.level][0] * GAME_DECK[deckInfo.level][1]) / 2
        ) {
          setGameState(GAME_STATE.WIN);
          stopTimer();
        }
      };
      runActions(successAction);
    } else {
      // ------ 매칭 실패 로직
      setGameState(GAME_STATE.FAIL);

      const failAction = () => {
        setDeckInfo((prev) => ({
          ...prev,
          data: prev.data.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, isClicked: false }
              : card
          ),
        }));
      };
      runActions(failAction);
    }
  }, [currentClickCard, deckInfo.level, successDeck.size, stopTimer]);

  /**
   * @description
   * - 게임이 클리어되었을 때, 로컬스토리지에 성공 로그를 저장하는 로직
   */
  useEffect(() => {
    if (gameState !== GAME_STATE.WIN) return;
    const oldLogs = getGameLogs();
    const newLog = {
      id: oldLogs.length,
      level: deckInfo.level,
      clearTime: TIME_LIMIT[deckInfo.level] * 1000 - time,
      startTime: startTime,
    };
    setGameLogs([...oldLogs, newLog]);
  }, [gameState, deckInfo.level, time, startTime]);

  return {
    deckInfo,
    gameId,
    gameState,
    time,
    successDeck,
    gameHistory,
    handleGenerateDeck,
    handleCardClick,
  };
}
