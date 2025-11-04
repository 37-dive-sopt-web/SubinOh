import { GameCard } from "../gameCard/GameCard";

import * as styles from "./GameBoard.css";

export function GameBoard({ deckInfo, onCardClick }) {
  return (
    <div className={styles.wrapper({ level: deckInfo.level })}>
      {deckInfo.data.map((card) => (
        <GameCard
          key={card.id}
          level={deckInfo.level}
          card={card}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}
