import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSignInAlt,
  faSignOutAlt,
  faUser,
  faUserTie,
  faSearch,
  faHome,
  faSave,
  faFolderOpen,
  faQuestionCircle,
  faCog,
  faAlignLeft,
  faCaretRight,
  faCaretDown,
  faChevronRight,
  faChevronLeft,
  faTimes,
  faCogs,
  faSquare,
  faCheckSquare,
  faCoins
} from '@fortawesome/free-solid-svg-icons'
import { IconsItem } from './IconsSvg.styled'
import { SvgIconVariants } from '../../../consts'

interface SvgIconProps {
  variant: SvgIconVariants
  contentAfter?: string
  showContent?: boolean
}

const SvgIcon: React.FC<SvgIconProps> = ({
  variant,
  contentAfter,
  showContent
}) => {
  const iconVersion = (variant: string) => {
    switch (variant) {
      case SvgIconVariants.LOGIN:
        return faSignInAlt
      case SvgIconVariants.LOGOUT:
        return faSignOutAlt
      case SvgIconVariants.ADMIN:
        return faUserTie
      case SvgIconVariants.USER:
        return faUser
      case SvgIconVariants.SEARCH:
        return faSearch
      case SvgIconVariants.HOME:
        return faHome
      case SvgIconVariants.COG:
        return faCog
      case SvgIconVariants.STORE:
        return faFolderOpen
      case SvgIconVariants.SAVE:
        return faSave
      case SvgIconVariants.QUESTION:
        return faQuestionCircle
      case SvgIconVariants.TEXT_LEFT:
        return faAlignLeft
      case SvgIconVariants.RIGHT_POINT:
        return faCaretRight
      case SvgIconVariants.DOWN_POINT:
        return faCaretDown
      case SvgIconVariants.CHEVRON_RIGHT:
        return faChevronRight
      case SvgIconVariants.CHEVRON_LEFT:
        return faChevronLeft
      case SvgIconVariants.CLOSE:
        return faTimes
      case SvgIconVariants.COGS:
        return faCogs
      case SvgIconVariants.CHECK:
        return faCheckSquare
      case SvgIconVariants.CHECK_EMPTY:
        return faSquare
      case SvgIconVariants.COINS:
        return faCoins

      default:
        return faUser
    }
  }

  return (
    <IconsItem contentAfter={contentAfter} showContent={showContent}>
      <FontAwesomeIcon icon={iconVersion(variant)} />
    </IconsItem>
  )
}
export default SvgIcon
