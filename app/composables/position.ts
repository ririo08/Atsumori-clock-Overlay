import type { CSSProperties } from 'vue'
import { PositionTypes } from '~/types/PositionTypes'

const TOP_OFFSET = '55px'
const SIDE_OFFSET = '55px'
const BOTTOM_OFFSET = '36px'
const NONE_TOP_OFFSET = '6px'

export const usePosition = () => {
  const createPositionStyle = (position?: PositionTypes): CSSProperties => {
    switch (position) {
      case PositionTypes.TopLeft:
        return {
          top: TOP_OFFSET,
          bottom: 'auto',
          left: SIDE_OFFSET,
          right: 'auto',
        }
      case PositionTypes.TopRight:
        return {
          top: TOP_OFFSET,
          bottom: 'auto',
          left: 'auto',
          right: SIDE_OFFSET,
        }
      case PositionTypes.BottomLeft:
        return {
          top: 'auto',
          bottom: BOTTOM_OFFSET,
          left: SIDE_OFFSET,
          right: 'auto',
        }
      case PositionTypes.BottomRight:
        return {
          top: 'auto',
          bottom: BOTTOM_OFFSET,
          left: 'auto',
          right: SIDE_OFFSET,
        }
      case PositionTypes.None:
        return {
          top: NONE_TOP_OFFSET,
          bottom: 'auto',
          left: 'auto',
          right: 'auto',
        }
      default:
        return {
          top: 'auto',
          bottom: BOTTOM_OFFSET,
          left: SIDE_OFFSET,
          right: 'auto',
        }
    }
  }

  return {
    createPositionStyle,
  }
}
