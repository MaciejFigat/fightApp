import React from 'react'
import { useAppSelector } from '../../../reduxState/reduxHooks'
import { EventAllData } from '../../../interfaces'
import { HighlightText, HorizontalWrapper } from '../../../styles/misc.styles'
import { TextColor } from '../../../consts'
interface CurrentEventProps {}

const CurrentEvent: React.FC<CurrentEventProps> = () => {
  const currentEvent: EventAllData | null = useAppSelector(
    state => state.events?.currentEvent
  )

  return (
    <>
      {currentEvent ? (
        <>
          <HorizontalWrapper>
            Event:{' '}
            <HighlightText color={TextColor.GOLD}>
              {currentEvent.ShortName}
            </HighlightText>
          </HorizontalWrapper>
        </>
      ) : (
        <HighlightText color={TextColor.INFO}>No event selected</HighlightText>
      )}
    </>
  )
}
export default CurrentEvent
