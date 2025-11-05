import { useCallback, useRef, useState } from "react";

export function useGameTimer(onTimeout) {
  const [time, setTime] = useState(0); // 게임 시간(카운트다운)

  const animationFrameId = useRef(null); // requestAnimationFrame ref
  const deadline = useRef(null); // 게임 데드라인 (절대시간)

  // requestAnimationFrame 핸들러 함수
  const handleTimer = useCallback(() => {
    const left_time = deadline.current - performance.now();
    if (left_time <= 0) {
      setTime(0);
      onTimeout();
      cancelAnimationFrame(animationFrameId.current);
    } else {
      setTime(left_time);
      animationFrameId.current = requestAnimationFrame(handleTimer);
    }
  }, [onTimeout]);

  // 타이머 시작 (카드 첫번째 클릭 시)
  const startTimer = useCallback(
    (totalTime) => {
      deadline.current = performance.now() + totalTime;
      setTime(totalTime);
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(handleTimer);
    },
    [handleTimer]
  );

  // 타이머 중지 (게임 클리어 시)
  const stopTimer = useCallback(() => {
    cancelAnimationFrame(animationFrameId.current);
  }, []);

  // 타이머 초기화 (게임리셋, 레별 변경 시)
  const resetTimer = useCallback((totalTime) => {
    cancelAnimationFrame(animationFrameId.current);
    setTime(totalTime);
  }, []);

  return { time, startTimer, stopTimer, resetTimer };
}
