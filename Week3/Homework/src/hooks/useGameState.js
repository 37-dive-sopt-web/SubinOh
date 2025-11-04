import { useCallback, useEffect, useState } from "react";
import { buildDeck } from "../utils/buildDeck";
import { GAME_STATE } from "../constants/game";

export function useGameState(initialLevel = 1) {
  const [deckInfo, setDeckInfo] = useState({
    status: "idle",
    data: null,
    level: initialLevel,
  }); // 생성한 카드 덱 정보 (준비상태, 카드데이터, 레벨)
  const [currentClickCard, setCurrentClickCard] = useState([]); // (최근) 클릭된 카드 리스트
  const [isChecking, setIsChecking] = useState(false); // 매칭되는 상태인지 체크
  const [gameState, setGameState] = useState(GAME_STATE.READY); // 게임 상태
  const [gameId, setGameId] = useState(1); // 게임 리셋 감지 키

  const [gameHistory, setGameHistory] = useState([]); // 게임 히스토리

  // 카드 덱 생성 함수
  const handleGenerateDeck = useCallback((level) => {
    const data = buildDeck(level);
    setDeckInfo({ status: "ready", data, level });

    setCurrentClickCard([]);
    setIsChecking(false);
    setGameState(GAME_STATE.READY);
    setGameId((id) => id + 1);
    setGameHistory([]);
  }, []);

  // 카드 덱 초기화
  useEffect(() => {
    handleGenerateDeck(deckInfo.level);
  }, [deckInfo.level, handleGenerateDeck]);

  // 카드 클릭 이벤트 함수
  const handleCardClick = (clickedCard) => {
    if (isChecking || clickedCard.isClicked || clickedCard.isMatched) return;

    setDeckInfo((prev) => ({
      ...prev,
      data: prev.data.map((card) =>
        card.id === clickedCard.id ? { ...card, isClicked: true } : card
      ),
    }));
    setCurrentClickCard((prev) => {
      const newClicks = [...prev, clickedCard];
      if (newClicks.length === 1) {
        setGameState(GAME_STATE.INCOMPLETE);
      }
      return newClicks;
    });
  };

  // 카드 값 동일 여부 체크 함수
  useEffect(() => {
    if (currentClickCard.length !== 2) return;

    setIsChecking(true);
    const [card1, card2] = currentClickCard;

    if (card1.value === card2.value) {
      const newLog = {
        id: new Date(),
        type: GAME_STATE.SUCCESS,
        cards: [card1.value, card2.value],
      };
      setGameState(GAME_STATE.SUCCESS);
      setGameHistory((prev) => [...prev, newLog]);

      setTimeout(() => {
        setDeckInfo((prev) => ({
          ...prev,
          data: prev.data.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, isMatched: true }
              : card
          ),
        }));

        setCurrentClickCard([]);
        setIsChecking(false);
      }, 300);
    } else {
      const newLog = {
        id: new Date(),
        type: GAME_STATE.FAIL,
        cards: [card1.value, card2.value],
      };
      setGameState(GAME_STATE.FAIL);
      setGameHistory((prev) => [...prev, newLog]);

      setTimeout(() => {
        setDeckInfo((prev) => ({
          ...prev,
          data: prev.data.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, isClicked: false }
              : card
          ),
        }));

        setCurrentClickCard([]);
        setIsChecking(false);
      }, 300);
    }
  }, [currentClickCard, deckInfo.data]);

  return {
    deckInfo,
    gameId,
    gameState,
    gameHistory,
    handleGenerateDeck,
    handleCardClick,
  };
}
