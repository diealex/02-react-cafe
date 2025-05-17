import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  const handleClick = (type: VoteType) => () => onVote(type);
  return (
    <div className={css.container}>
      <button
        className={css.button}
        type="button"
        onClick={handleClick("good")}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={handleClick("neutral")}
      >
        Neutral
      </button>
      <button className={css.button} type="button" onClick={handleClick("bad")}>
        Bad
      </button>
      {canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          type="button"
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}
