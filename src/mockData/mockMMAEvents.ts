import { SportEventData } from "../interfaces";


export const eventsMMA: SportEventData[] = [
    {
        name: "Fight Night 1",
        date: "2023-04-10",
        location: "Las Vegas, Nevada",
        discipline: 'MMA',
        organization: "UFC",
        fights: [
            {
                fighterOne: {
                    name: "Conor McGregor",
                    weight: '155 lbs'
                },
                fighterTwo: {
                    name: "Dustin Poirier",
                    weight: '155 lbs'
                },
                rules: "MMA - Lightweight"
            },
            {
                fighterOne: {
                    name: "Israel Adesanya",
                    weight: '185 lbs'
                },
                fighterTwo: {
                    name: "Robert Whittaker",
                    weight: '185 lbs'
                },
                rules: "MMA - Middleweight"
            }
        ]
    }, {
        name: "UFC 300",
        date: "2023-05-05",
        location: "Las Vegas, Nevada",
        discipline: 'MMA',
        organization: "UFC",
        fights: [
            {
                fighterOne: {
                    name: "Jon Jones",
                    weight: '205 lbs'
                },
                fighterTwo: {
                    name: "Stipe Miocic",
                    weight: '240 lbs'
                },
                rules: "MMA - Heavyweight"
            },
            {
                fighterOne: {
                    name: "Valentina Shevchenko",
                    weight: '125 lbs'
                },
                fighterTwo: {
                    name: "Amanda Nunes",
                    weight: '135 lbs'
                },
                rules: "MMA - Bantamweight"
            }
        ]
    },
    {
        name: "Bellator 250",
        date: "2023-05-15",
        location: "New York, New York",
        discipline: 'MMA',
        organization: "Bellator MMA",
        fights: [
            {
                fighterOne: {
                    name: "Douglas Lima",
                    weight: '170 lbs'
                },
                fighterTwo: {
                    name: "Gegard Mousasi",
                    weight: '185 lbs'
                },
                rules: "MMA - Middleweight"
            }
        ]
    },
    {
        name: "ONE Championship: Unbreakable",
        date: "2023-05-20",
        location: "Singapore Indoor Stadium, Kallang, Singapore",
        discipline: 'MMA',
        organization: "ONE Championship",
        fights: [
            {
                fighterOne: {
                    name: "Angela Lee",
                    weight: '125 lbs'
                },
                fighterTwo: {
                    name: "Denice Zamboanga",
                    weight: '125 lbs'
                },
                rules: "MMA - Women's Flyweight"
            }
        ]
    },
    {
        name: "PFL 10",
        date: "2023-05-27",
        location: "New York, New York",
        discipline: 'MMA',
        organization: "Professional Fighters League",
        fights: [
            {
                fighterOne: {
                    name: "Kayla Harrison",
                    weight: '155 lbs'
                },
                fighterTwo: {
                    name: "Claressa Shields",
                    weight: '155 lbs'
                },
                rules: "MMA - Lightweight"
            },
            {
                fighterOne: {
                    name: "Rory MacDonald",
                    weight: '170 lbs'
                },
                fighterTwo: {
                    name: "Gleison Tibau",
                    weight: '170 lbs'
                },
                rules: "MMA - Welterweight"
            }
        ]
    }

];
