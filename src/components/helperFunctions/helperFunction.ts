export const dateFormatter = (date: string, displayYear: boolean) => {
  try {
    const dateFormat = new Date(date)
    const timeZone = 'Europe/Warsaw'
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: displayYear ? 'numeric' : undefined,
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: timeZone,
      timeZoneName: 'short'
    }).format(dateFormat)

    return formattedDate
  } catch (error) {
    // console.log('Error in dateFormatter')
  }
}

export const payoutFormatter = (
  amountBet: number,
  betMoneyline: number | undefined
) => {
  const payoutMultiplier =
    betMoneyline && betMoneyline > 0
      ? betMoneyline / 100
      : betMoneyline
      ? 100 / Math.abs(betMoneyline)
      : 1

  const newExpectedPayout = Number((amountBet * payoutMultiplier).toFixed(2))

  return newExpectedPayout
}
