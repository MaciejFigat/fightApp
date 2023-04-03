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
// export const enum Discipline {
//     MMA = "MMA",
//     Boxing = "Boxing",
//     BJJ = "BJJ",
//     SubmissionGrappling = "Submission grappling",
// }

// can't use enum as an export, so use a type instead

type Discipline = 'MMA' | 'Boxing' | 'BJJ' | 'Submission grappling' | 'None'

interface SportEventData {
    name: string
    date: string
    location: string
    discipline: Discipline
    organization: string
    fights: FightData[]
}

export {
    SportsData, SportEventData, FightData, FighterData, Discipline
}