import css from './App.module.css'
import CafeInfo  from '../CafeInfo/CafeInfo.tsx'
import VoteOptions from '../VoteOptions/VoteOptions.tsx'
import VoteStats from '../VoteStats/VoteStats.tsx'
import Notification from '../Notification/Notification.tsx'
import { useState } from 'react';
import type { VoteType } from '../../types/votes.ts';

export default function App() {

  const [votes, setVotes] = useState({good:0, neutral: 0, bad:0});

  function handleVote(type: VoteType) {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }

  function resetVotes() {
    setVotes({good:0, neutral: 0, bad:0});
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
  ? Math.round((votes.good / totalVotes) * 100)
  : 0


  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
        {totalVotes ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> : <Notification  />}
      </div>
    </>
  )
}