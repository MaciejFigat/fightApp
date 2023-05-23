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

export const registeredBetOne = {
  user: {
    _id: '64638e8bbe484d3fe50ede6e',
    name: 'BossOne'
  },
  id: '6d92cf5d-cca5-40b4-94cb-ebe770d749b4',
  name: 'Polyana Viana',
  fightName: 'Emily Ducote vs Polyana Viana',
  method: WinMethod.KO_TKO,
  FightId: 3718,
  EventId: 303,
  activated: false,
  dateTime: '2023-05-20T16:00:00',
  moneyline: 0,
  Fighters: [BobTheToaster, BobTheTester],
  projectedWinner: 1,
  amountBet: 232,
  expectedPayout: 223,
  isAccepted: true,
  isResolved: true,
  acceptDateTime: new Date(),
  acceptedBy: '646be467a0504bacbee8cb9c'
}
export const registeredBetFour = {
  ...registeredBetOne,
  dateTime: '2024-05-20T16:00:00',
  isAccepted: false,
  isResolved: false
}

export const registeredBetTwo = {
  user: {
    _id: '64638e8bbe484d3fe50ede6e',
    name: 'BossOne'
  },
  id: '6d92cf5d-cca5-40b4-94cb-ebe760d749b4',
  name: 'Emily Ducotea',
  fightName: 'Emily Ducote vs Polyana Viana',
  method: WinMethod.SUBMISSION,
  FightId: 3718,
  EventId: 303,
  activated: false,
  dateTime: '2023-05-20T16:00:00',
  moneyline: 0,
  Fighters: [BobTheToaster, BobTheTester],
  projectedWinner: 1,
  amountBet: 24,
  expectedPayout: 22,
  isAccepted: true,
  isResolved: true,
  acceptDateTime: new Date(),
  acceptedBy: '646be467a0504bacbee8cb9c'
}
export const registeredBetFive = {
  ...registeredBetTwo,
  dateTime: '2024-05-20T16:00:00',
  isAccepted: false,
  isResolved: false
}
export const registeredBetThree = {
  user: {
    _id: '64638e8bbe484d3fe50ede6e',
    name: 'BossOne'
  },
  id: '6d92cf5d-cca5-40b4-94cb-ebe760d749b4',
  name: 'Emily Ducotea',
  fightName: 'Emily Ducote vs Polyana Viana',
  method: WinMethod.TBD,
  FightId: 3718,
  EventId: 303,
  activated: false,
  dateTime: '2023-05-20T16:00:00',
  moneyline: 0,
  Fighters: [BobTheToaster, BobTheTester],
  projectedWinner: 1,
  amountBet: 22,
  expectedPayout: 123,
  isAccepted: true,
  isResolved: true,
  acceptDateTime: new Date(),
  acceptedBy: '646be467a0504bacbee8cb9c'
}
export const registeredBetSix = {
  ...registeredBetThree,
  dateTime: '2024-05-20T16:00:00',
  isAccepted: false,
  isResolved: false
}
export const fightOne = {
  Active: true,
  CardSegment: 'string',
  FightId: 123,
  Fighters: [BobTheToaster, BobTheTester],
  Order: 123,
  Referee: 'Mike Tyson II',
  ResultClock: 11,
  ResultRound: 2,
  ResultType: 'string',
  Rounds: 5,
  Status: 'active',
  WeightClass: 'featherweight',
  WinnerId: null
}
export const fightTwo = {
  Active: true,
  CardSegment: 'string',
  FightId: 123,
  Fighters: [BobTheToaster, BobTheTester],
  Order: 123,
  Referee: 'Mike Tyson II',
  ResultClock: 11,
  ResultRound: 2,
  ResultType: 'string',
  Rounds: 5,
  Status: 'active',
  WeightClass: 'featherweight',
  WinnerId: null
}
export const fightThree = {
  Active: true,
  CardSegment: 'string',
  FightId: 123,
  Fighters: [BobTheToaster, BobTheTester],
  Order: 123,
  Referee: 'Mike Tyson II',
  ResultClock: 11,
  ResultRound: 2,
  ResultType: 'string',
  Rounds: 5,
  Status: 'active',
  WeightClass: 'featherweight',
  WinnerId: null
}
export const fightFour = {
  Active: true,
  CardSegment: 'string',
  FightId: 123,
  Fighters: [BobTheToaster, BobTheTester],
  Order: 123,
  Referee: 'Mike Tyson II',
  ResultClock: 11,
  ResultRound: 2,
  ResultType: 'string',
  Rounds: 5,
  Status: 'active',
  WeightClass: 'featherweight',
  WinnerId: null
}
