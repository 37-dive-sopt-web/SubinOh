import * as styles from "./GameCard.css";

export function GameCard({ card, onCardClick }) {
  return (
    <div
      className={styles.wrapper({
        isFlipped: card.isClicked,
        isMatched: card.isMatched,
      })}
      onClick={() => onCardClick(card)}
    >
      <div className={styles.cardFront}>?</div>
      <div className={styles.cardBack({ isMatched: card.isMatched })}>
        {card.value}
      </div>
    </div>
  );
}
