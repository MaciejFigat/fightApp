import { Discipline } from '../consts';
import { SportEventData } from '../interfaces.js'

export const eventsBJJ: SportEventData[] = [
    {
        name: "IBJJF World Championship",
        date: "2023-06-01",
        location: "Long Beach, California",
        discipline: Discipline.BJJ,
        organization: "IBJJF",
        fights: [
            {
                fighterOne: {
                    name: "Marcus Almeida",
                    weight: 'Super-Heavy'
                },
                fighterTwo: {
                    name: "Rodolfo Vieira",
                    weight: 'Super-Heavy'
                },
                rules: "BJJ - Gi - Super-Heavyweight"
            },
            {
                fighterOne: {
                    name: "Ffion Davies",
                    weight: 'Light-Feather'
                },
                fighterTwo: {
                    name: "Bianca Basilio",
                    weight: 'Light-Feather'
                },
                rules: "BJJ - Gi - Women's Light-Featherweight"
            }
        ]
    },
    {
        name: "Pan Jiu-Jitsu Championship",
        date: "2023-07-08",
        location: "Irvine, California",
        discipline: Discipline.BJJ,
        organization: "IBJJF",
        fights: [
            {
                fighterOne: {
                    name: "Lucas Lepri",
                    weight: 'Lightweight'
                },
                fighterTwo: {
                    name: "Leandro Lo",
                    weight: 'Middleweight'
                },
                rules: "BJJ - Gi - Middleweight"
            },
            {
                fighterOne: {
                    name: "Beatriz Mesquita",
                    weight: 'Middle-Heavy'
                },
                fighterTwo: {
                    name: "Nathiely de Jesus",
                    weight: 'Heavy'
                },
                rules: "BJJ - Gi - Women's Middle-Heavyweight"
            }
        ]
    },
    {
        name: "World Master Jiu-Jitsu Championship",
        date: "2023-08-12",
        location: "Las Vegas, Nevada",
        discipline: Discipline.BJJ,
        organization: "IBJJF",
        fights: [
            {
                fighterOne: {
                    name: "Bruno Malfacine",
                    weight: 'Rooster'
                },
                fighterTwo: {
                    name: "Caio Terra",
                    weight: 'Rooster'
                },
                rules: "BJJ - Gi - Roosterweight"
            },
            {
                fighterOne: {
                    name: "Samantha Cook",
                    weight: 'Medium-Heavy'
                },
                fighterTwo: {
                    name: "Jessica Flowers",
                    weight: 'Super-Heavy'
                },
                rules: "BJJ - Gi - Women's Medium-Heavyweight"
            }
        ]
    },
    {
        name: "Pan American Championships",
        date: "2023-06-07",
        location: "Orlando, Florida",
        discipline: Discipline.BJJ,

        organization: "IBJJF",
        fights: [
            {
                fighterOne: {
                    name: "Lucas Barbosa",
                    weight: 'Super-Heavy'
                },
                fighterTwo: {
                    name: "Leandro Lo",
                    weight: 'Super-Heavy'
                },
                rules: "BJJ - Black Belt - Super-Heavy"
            },
            {
                fighterOne: {
                    name: "Marcus Almeida",
                    weight: 'Ultra-Heavy'
                },
                fighterTwo: {
                    name: "Nicholas Meregali",
                    weight: 'Ultra-Heavy'
                },
                rules: "BJJ - Black Belt - Ultra-Heavy"
            }
        ]
    },
    {
        name: "Mundials",
        date: "2023-08-10",
        location: "Rio de Janeiro, Brazil",
        discipline: Discipline.BJJ,

        organization: "IBJJF",
        fights: [
            {
                fighterOne: {
                    name: "Bianca Basilio",
                    weight: 'Light-Feather'
                },
                fighterTwo: {
                    name: "Mayssa Bastos",
                    weight: 'Light-Feather'
                },
                rules: "BJJ - Black Belt - Light-Feather"
            },
            {
                fighterOne: {
                    name: "Roberto Jimenez",
                    weight: 'Middleweight'
                },
                fighterTwo: {
                    name: "Isaque Bahiense",
                    weight: 'Middleweight'
                },
                rules: "BJJ - Black Belt - Middleweight"
            }
        ]
    },

];
