export default interface Votes {
    value: number;
    onUpdate: () => void;
}

export type VoteType = "good" | "neutral" | "bad";