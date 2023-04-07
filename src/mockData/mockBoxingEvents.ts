import { Discipline } from "../consts";
import { SportEventData } from "../interfaces";

export const eventsBoxing: SportEventData[] = [
    {
        name: "Battle of the Undefeated",
        date: "2023-05-20",
        location: "Los Angeles, California",
        discipline: Discipline.Boxing,
        organization: "Golden Boy Promotions",
        fights: [
            {
                fighterOne: {
                    name: "Ryan Garcia",
                    weight: "135 lbs"
                },
                fighterTwo: {
                    name: "Tank Davis",
                    weight: "135 lbs"
                },
                rules: "Boxing - Lightweight"
            },
            {
                fighterOne: {
                    name: "Gervonta Davis",
                    weight: "130 lbs"
                },
                fighterTwo: {
                    name: "Shakur Stevenson",
                    weight: "130 lbs"
                },
                rules: "Boxing - Super Featherweight"
            }
        ]
    },
    {
        name: "Boxing Extravaganza",
        date: "2023-04-15",
        location: "New York, New York",
        discipline: Discipline.Boxing,
        organization: "Top Rank Boxing",
        fights: [
            {
                fighterOne: {
                    name: "Tyson Fury",
                    weight: '240 lbs'
                },
                fighterTwo: {
                    name: "Deontay Wilder",
                    weight: '231 lbs'
                },
                rules: "Boxing - Heavyweight"
            }
        ]
    },
    {
        name: "Knockout Kings",
        date: "2023-06-03",
        location: "Las Vegas, Nevada",
        discipline: Discipline.Boxing,
        organization: "Top Rank Boxing",
        fights: [
            {
                fighterOne: {
                    name: "Terence Crawford",
                    weight: "147 lbs"
                },
                fighterTwo: {
                    name: "Errol Spence Jr.",
                    weight: "147 lbs"
                },
                rules: "Boxing - Welterweight"
            }
        ]
    },
    {
        name: "Rumble in the Garden",
        date: "2023-06-24",
        location: "New York, New York",
        discipline: Discipline.Boxing,
        organization: "Matchroom Boxing",
        fights: [
            {
                fighterOne: {
                    name: "Anthony Joshua",
                    weight: "240 lbs"
                },
                fighterTwo: {
                    name: "Oleksandr Usyk",
                    weight: "215 lbs"
                },
                rules: "Boxing - Heavyweight"
            },
            {
                fighterOne: {
                    name: "Katie Taylor",
                    weight: "135 lbs"
                },
                fighterTwo: {
                    name: "Amanda Serrano",
                    weight: "135 lbs"
                },
                rules: "Boxing - Lightweight"
            }
        ]
    },
    {
        name: "East-West Showdown",
        date: "2023-07-15",
        location: "Moscow, Russia",
        discipline: Discipline.Boxing,
        organization: "World of Boxing",
        fights: [
            {
                fighterOne: {
                    name: "Artur Beterbiev",
                    weight: "175 lbs"
                },
                fighterTwo: {
                    name: "Dmitry Bivol",
                    weight: "175 lbs"
                },
                rules: "Boxing - Light Heavyweight"
            }
        ]
    }


]

