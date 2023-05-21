import { WinMethod } from '../consts'

export const BobTheToaster = {
  Active: true,
  FighterId: 123,
  FirstName: 'Bob',
  LastName: 'Toester',
  Moneyline: 250,
  PreFightDraws: 1,
  PreFightLosses: 2,
  PreFightNoContests: 0,
  PreFightWins: 10,
  Winner: false
}
export const BobTheTester = {
  Active: true,
  FighterId: 456,
  FirstName: 'Tester',
  LastName: 'Bob',
  Moneyline: -150,
  PreFightDraws: 2,
  PreFightLosses: 3,
  PreFightNoContests: 1,
  PreFightWins: 8,
  Winner: false
}
export const newConfirmedBet = {
  user: '6447e0a06d41697e759fc34b',
  id: '1231245151515ewdsfsfsfs',
  name: 'BobTheToaster',
  fightName: 'BobTheToaster vs. BobTheTester',
  method: WinMethod.DECISION,
  FightId: 1234,
  EventId: 123545,
  activated: true,
  dateTime: '2025-05-01T23:00:00.000Z',
  moneyline: 100,
  Fighters: [BobTheToaster, BobTheTester],
  projectedWinner: 0,
  amountBet: 1,
  expectedPayout: 1
}

export const unconfirmedBetOne = {
  user: '6447e0a06d41697e759fc34b',
  id: '33331245151515ewdsfsfsfs',
  name: 'Jack the Test',
  fightName: 'JackToaster vs. BobTheTester',
  method: WinMethod.KO_TKO,
  FightId: 123214,
  EventId: 122345,
  activated: true,
  dateTime: '2025-05-02T23:00:00.000Z',
  moneyline: 330,
  // Fighters: [BobTheToaster, BobTheTester],
  projectedWinner: 1
  // amountBet: 1,
  // expectedPayout: 1
}
