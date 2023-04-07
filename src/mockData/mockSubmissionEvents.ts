import { Discipline } from "../consts";
import { SportEventData } from "../interfaces";


export const eventsSubmission: SportEventData[] = [
    {
        name: "ADCC World Championship",
        date: "2023-09-15",
        location: "Las Vegas, Nevada",
        discipline: Discipline.SubmissionGrappling,
        organization: "ADCC",
        fights: [
            {
                fighterOne: {
                    name: "Gordon Ryan",
                    weight: '99 kg'
                },
                fighterTwo: {
                    name: "Marcus Buchecha",
                    weight: 'Over 99 kg'
                },
                rules: "Submission Grappling - Men's Absolute"
            },
            {
                fighterOne: {
                    name: "Beatriz Mesquita",
                    weight: '60 kg'
                },
                fighterTwo: {
                    name: "Mackenzie Dern",
                    weight: 'Under 60 kg'
                },
                rules: "Submission Grappling - Women's Absolute"
            }
        ]
    },
    {
        name: "Polarsubmission Championship",
        date: "2023-11-05",
        location: "Moscow, Russia",
        discipline: Discipline.SubmissionGrappling,
        organization: "Polarsubmission",
        fights: [
            {
                fighterOne: {
                    name: "Keenan Cornelius",
                    weight: '90 kg'
                },
                fighterTwo: {
                    name: "Felipe Pena",
                    weight: 'Over 90 kg'
                },
                rules: "Submission Grappling - Men's Absolute"
            },
            {
                fighterOne: {
                    name: "Ffion Davies",
                    weight: 'Under 55 kg'
                },
                fighterTwo: {
                    name: "Nathalie Ribeiro",
                    weight: 'Under 55 kg'
                },
                rules: "Submission Grappling - Women's Roosterweight"
            }
        ]
    },
    {
        name: "Submission Underground 25",
        date: "2023-12-02",
        location: "Portland, Oregon",
        discipline: Discipline.SubmissionGrappling,
        organization: "Submission Underground",
        fights: [
            {
                fighterOne: {
                    name: "Craig Jones",
                    weight: '88 kg'
                },
                fighterTwo: {
                    name: "Garry Tonon",
                    weight: '77 kg'
                },
                rules: "Submission Grappling - Superfight"
            },
            {
                fighterOne: {
                    name: "Jessamyn Duke",
                    weight: '70 kg'
                },
                fighterTwo: {
                    name: "Andrea Lee",
                    weight: '61 kg'
                },
                rules: "Submission Grappling - Women's Superfight"
            }
        ]
    }
];
