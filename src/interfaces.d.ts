import { Discipline, WinMethod, WinnerProjection } from './consts'

interface SportChosen {
  name: Discipline
  rules: string
  organization: string
}

interface SportEventData {
  name: string
  date: string
  location: string
  discipline: Discipline
  organization: string
  fights: FightData[]
}
// those are the events that are returned from the API `https://api.sportsdata.io/v3/mma/scores/json/Schedule/${league}/${season}?key=${MMA_API_KEY}`
interface AvailableEventSimpleData {
  Active: boolean
  DateTime: string
  Day: string
  EventId: number
  LeagueId: number
  Name: string
  Season: number
  ShortName: string
  Status: string
}

interface ApiRetrivalHttpError {
  HttpStatusCode: number
  Code: number
  Description: string
  Help: string
}

interface FighterProfile {
  Active: boolean
  FighterId: number
  FirstName: string
  LastName: string
  Moneyline: number
  PreFightDraws: number
  PreFightLosses: number
  PreFightNoContests: number
  PreFightWins: number
  Winner: boolean
}
interface FightAllData {
  Active: boolean
  CardSegment: string
  FightId: number
  Fighters: FighterProfile[]
  Order: number
  Referee: string
  ResultClock: number
  ResultRound: number
  ResultType: string
  Rounds: number
  Status: string
  WeightClass: string
  WinnerId: number | null
}
// those will be returned upon providing eventId - https://api.sportsdata.io/v3/mma/scores/json/Event/{eventid}?key=${MMA_API_KEY}
// contains most of the data that we need
interface EventAllData {
  Active: boolean
  DateTime: string
  Day: string
  EventId: number
  Fights: FightAllData[]
  LeagueId: number
  Name: string
  Season: number
  ShortName: string
  Status: string
}

interface BetData {
  id: string
  name: string
  fightName: string
  method?: WinMethod
  FightId: number
  activated: boolean
  dateTime: string
  moneyline?: number
  Fighters?: FighterProfile[]
  projectedWinner: WinnerProjection
}

interface ConfirmedBet extends BetData {
  amountBet: number
  expectedPayout: number
}

export {
  SportChosen,
  SportEventData,
  FightAllData,
  FighterProfile,
  AvailableEventSimpleData,
  ApiRetrivalHttpError,
  EventAllData,
  BetData,
  ConfirmedBet
}
