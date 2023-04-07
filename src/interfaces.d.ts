import { Discipline } from './consts'

interface SportsData {
    name: Discipline
    rules: string
    organization: string
}
type FighterData = {
    name: string
    nickname?: string
    age?: number
    height?: number
    weight?: string
    reach?: number
    stance?: string
    record?: string
    country?: string

}
interface FightData {
    fighterOne: FighterData
    fighterTwo: FighterData
    rules: string

}


// type Discipline = 'MMA' | 'Boxing' | 'BJJ' | 'Submission grappling' | 'None'

interface SportEventData {
    name: string
    date: string
    location: string
    discipline: Discipline
    organization: string
    fights: FightData[]
}

interface MMAEventData {
    Active: boolean;
    DateTime: string;
    Day: string;
    EventId: number;
    LeagueId: number;
    Name: string;
    Season: number;
    ShortName: string;
    Status: string;
}


export {
    SportsData, SportEventData, FightData, FighterData, MMAEventData
}