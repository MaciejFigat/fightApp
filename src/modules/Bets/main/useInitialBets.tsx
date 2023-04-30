import { useState, useEffect } from 'react'
import { v4 } from 'uuid'
import { WinnerProjection, WinMethod } from '../../../consts'
import { BetData, FightAllData } from '../../../interfaces'

export const useInitialFighterBets = (
  currentFight: FightAllData | null,
  betsUnconfirmed: BetData[],
  expandedFight: null | number,
  DateTime: string | undefined
) => {
  const [state, setState] = useState([[], betsUnconfirmed])

  useEffect(() => {
    const fighter1 = currentFight?.Fighters?.[0]
    const fighter2 = currentFight?.Fighters?.[1]
    const name1 = fighter1?.FirstName ?? 'No data :-('
    const name2 = fighter2?.FirstName ?? 'No data :-('
    const lastName1 = fighter1?.LastName ?? ''
    const lastName2 = fighter2?.LastName ?? ''
    const fightName = `${name1} ${lastName1} vs ${name2} ${lastName2}`

    setState([
      [
        {
          id: v4(),
          FightId: currentFight?.FightId ?? 0,
          name: `${name1} ${lastName1}`,
          fightName: fightName,
          method: WinMethod.TBD,
          projectedWinner: WinnerProjection.FIGHTER1,
          moneyline: currentFight?.Fighters[0]?.Moneyline ?? 0,
          dateTime: DateTime ?? '',
          activated: false
        },
        {
          id: v4(),
          FightId: currentFight?.FightId ?? 0,
          name: `${name2} ${lastName2}`,
          fightName: fightName,
          moneyline: currentFight?.Fighters[1]?.Moneyline ?? 0,
          method: WinMethod.TBD,
          projectedWinner: WinnerProjection.FIGHTER2,
          dateTime: DateTime ?? '',
          activated: false
        },
        {
          id: v4(),
          name: 'KO/TKO',
          fightName: fightName,
          method: WinMethod.KO_TKO,
          projectedWinner: WinnerProjection.ANY,
          FightId: currentFight?.FightId ?? 0,
          dateTime: DateTime ?? '',
          Fighters: currentFight?.Fighters ?? [],
          activated: false
        },
        {
          id: v4(),
          name: 'Decision',
          fightName: fightName,
          method: WinMethod.DECISION,
          projectedWinner: WinnerProjection.ANY,
          FightId: currentFight?.FightId ?? 0,
          dateTime: DateTime ?? '',
          Fighters: currentFight?.Fighters ?? [],
          activated: false
        },
        {
          id: v4(),
          name: 'Submission',
          fightName: fightName,
          method: WinMethod.SUBMISSION,
          projectedWinner: WinnerProjection.ANY,
          FightId: currentFight?.FightId ?? 0,
          dateTime: DateTime ?? '',
          Fighters: currentFight?.Fighters ?? [],
          activated: false
        },
        {
          id: v4(),
          name: 'Draw',
          fightName: fightName,
          method: WinMethod.DRAW,
          projectedWinner: WinnerProjection.ANY,
          FightId: currentFight?.FightId ?? 0,
          dateTime: DateTime ?? '',
          Fighters: currentFight?.Fighters ?? [],
          activated: false
        },
        {
          id: v4(),
          name: 'No Contest',
          fightName: fightName,
          method: WinMethod.DQ,
          projectedWinner: WinnerProjection.ANY,
          FightId: currentFight?.FightId ?? 0,
          dateTime: DateTime ?? '',
          Fighters: currentFight?.Fighters ?? [],
          activated: false
        }
      ],
      betsUnconfirmed
    ])
  }, [currentFight, DateTime, betsUnconfirmed, expandedFight])

  return [state, setState] as const
}
