import {
  AvailableEventSimpleData,
  BetsWithUserData,
  ConfirmedBet
} from '../../../interfaces'

export function filterAllBetsByEarliestDate (allBets: ConfirmedBet[]) {
  const today = new Date().toISOString().substring(0, 10)

  const filteredBets =
    Array.isArray(allBets) &&
    allBets.filter(obj => obj.dateTime.substring(0, 10) >= today)

  if (!Array.isArray(filteredBets)) {
    return []
  }
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
  const filteredBets =
    Array.isArray(allBets) &&
    allBets &&
    allBets.filter(bet => bet.EventId === eventId)
  return filteredBets
}
export function filterAcceptedBets (allBets: ConfirmedBet[] | undefined) {
  const filteredBets = Array.isArray(allBets)
    ? allBets.filter(bet => bet.isAccepted === false)
    : []
  return filteredBets
}

export function filterFutureEvents (allEvents: AvailableEventSimpleData[]) {
  const today = new Date().toISOString().substring(0, 10)

  const filteredEvents = allEvents.filter(
    obj => obj.DateTime.substring(0, 10) >= today
  )

  return filteredEvents
}

export function filterUserBetsAway (
  allBets: BetsWithUserData[],
  userId: string
) {
  const noUserBets =
    Array.isArray(allBets) &&
    allBets &&
    allBets.filter(bet => bet.user._id !== userId)

  return noUserBets
}
