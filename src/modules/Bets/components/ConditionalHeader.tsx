import React from 'react'
import { BetListHeader } from '../main/DragColumns.styled'
import StaggerChildrenWrapper from '../../utils/AnimationWrappers/StaggerChildrenWrapper'
import { motion } from 'framer-motion'
import { SvgIconVariants, TextColor } from '../../../consts'
import {
  HighlightText,
  HorizontalWrapper,
  RelativeWrapper,
  RoundAccent
} from '../../../styles/misc.styles'
import SvgIcon from '../../misc/SvgIcon/SvgIcon'

interface ConditionalHeaderProps {
  passedArrayLength: number
  optionEmpty: string
  optionHaveContent: string
}

const ConditionalHeader: React.FC<ConditionalHeaderProps> = ({
  passedArrayLength,
  optionEmpty,
  optionHaveContent
}) => {
  return (
    <>
      <BetListHeader minHeight='63px'>
        <StaggerChildrenWrapper key='betsConfirmHeader'>
          {passedArrayLength === 0 ? (
            <motion.div
              key='empty'
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <RelativeWrapper top='5px' left='-9px'>
                {' '}
                <HorizontalWrapper>
                  {' '}
                  <HighlightText color={TextColor.PRIMARY}>
                    {' '}
                    <RelativeWrapper top='5px' left='9px'>
                      <SvgIcon variant={SvgIconVariants.CHEVRON_LEFT} />{' '}
                    </RelativeWrapper>
                    <RelativeWrapper top='5px' left='3px'>
                      <SvgIcon variant={SvgIconVariants.CHEVRON_LEFT} />{' '}
                    </RelativeWrapper>
                    <RelativeWrapper top='5px' left='-3px'>
                      <SvgIcon variant={SvgIconVariants.CHEVRON_LEFT} />{' '}
                    </RelativeWrapper>
                    {optionEmpty}
                  </HighlightText>
                </HorizontalWrapper>
              </RelativeWrapper>
            </motion.div>
          ) : (
            <motion.div
              key='haveContent'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              exit={{ opacity: 0 }}
            >
              <HorizontalWrapper>
                <RoundAccent>{passedArrayLength} </RoundAccent>
                <HighlightText color={TextColor.PRIMARY}>
                  {optionHaveContent}
                </HighlightText>
              </HorizontalWrapper>
            </motion.div>
          )}{' '}
        </StaggerChildrenWrapper>
      </BetListHeader>
    </>
  )
}
export default ConditionalHeader
