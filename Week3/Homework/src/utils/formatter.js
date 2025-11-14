const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  timeZone: "Asia/Seoul",
};
export const dateFormatter = new Intl.DateTimeFormat("ko-KR", options);
export const secFormatter = (sec) => (Math.max(0, sec) / 1000).toFixed(2);
