import { ConfirmedBet } from '../../../interfaces'

export function filterAllBetsByEarliestDate (allBets: ConfirmedBet[]) {
  const today = new Date().toISOString().substring(0, 10)

  const filteredBets = allBets.filter(
    obj => obj.dateTime.substring(0, 10) >= today
  )

  // get the earliest date - dateTime property of obj to the current min value
  const earliestDate = filteredBets.reduce((min, obj) => {
    return obj.dateTime < min ? obj.dateTime : min
  }, filteredBets[0]?.dateTime)

  // filter by the earliest date
  const filteredEarliestBets = filteredBets.filter(
    obj => obj.dateTime === earliestDate
  )

  return filteredEarliestBets
}

export function filterBetsByEventId (allBets: ConfirmedBet[], eventId: number) {
  const filteredBets = allBets.filter(bet => bet.EventId === eventId)
  return filteredBets
}
