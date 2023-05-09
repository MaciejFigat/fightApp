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
interface FightStats {
  Advances: number
  DecisionWin: boolean
  FantasyPoints: number
  FantasyPointsDraftKings: number
  FifthRoundWin: boolean
  FighterId: number
  FirstName: string
  FirstRoundWin: boolean
  FourthRoundWin: boolean
  Knockdowns: number
  LastName: string
  Reversals: number
  SecondRoundWin: boolean
  SigStrikesAttempted: number
  SigStrikesLanded: number
  SlamRate: number
  Submissions: number
  TakedownAccuracy: number
  TakedownsAttempted: number
  TakedownsLanded: number
  TakedownsSlams: number
  ThirdRoundWin: boolean
  TimeInControl: number
  TotalStrikesAttempted: number
  TotalStrikesLanded: number
  Winner: boolean
}
interface FinishedFightData extends FightAllData {
  FightStats: FightStats[]
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
  _id?: string
  id: string
  name: string
  fightName: string
  method?: WinMethod
  FightId: number
  EventId: number
  activated: boolean
  dateTime: string
  moneyline?: number
  Fighters?: FighterProfile[]
  projectedWinner: WinnerProjection
  isAccepted?: boolean
}

interface ConfirmedBet extends BetData {
  amountBet: number
  expectedPayout: number
}
interface AcceptedBet extends ConfirmedBet {
  isResolved?: boolean
  acceptedBy: string | null
  acceptDateTime: Date
}
interface BetsWithUserData extends ConfirmedBet {
  user: {
    _id: string
    name: string
  }
}
interface UserInfo {
  id?: string
  name?: string
  email?: string
  password?: string
  isAdmin?: boolean
  status?: 'Active' | 'Pending'
  coinsAvailable?: number
  token?: string
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
  ConfirmedBet,
  UserInfo,
  AcceptedBet,
  BetsWithUserData
}
