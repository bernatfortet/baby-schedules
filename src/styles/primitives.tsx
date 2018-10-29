import { triangle } from 'polished'

import { Box, BoxProps, s, TextProps } from '@bernatfortet/global-styles'
import styled from 'styled-components'

// Circle
interface CircleProps extends BoxProps { size?: number }
export const Circle = styled(Box).attrs<CircleProps>({
  background: p => p.background,
  color: p => p.background,
  size: p => p.size || 40,
  center: true,
})` min-width:${p => p.size}px; min-height:${p => p.size}px; border-radius:${ p => p.size}px;  `

interface TriangleProps extends BoxProps {
  direction: 'up' | 'right' | 'down' | 'left',
  color: string,
  size: number,
}
const EQUI = 1.732 // Equilateral multiplier
export const Triangle = styled(Box)<TriangleProps>` width:0; height:0;
  ${p => p.direction == 'up' && `border:${p.size/EQUI}px solid transparent; border-bottom:${p.size}px solid ${p.color}; border-top:none;`}
  ${p => p.direction == 'right' && `border:${p.size/EQUI}px solid transparent; border-left:${p.size}px solid ${p.color}; border-right:none;`}
  ${p => p.direction == 'down' && `border:${p.size/EQUI}px solid transparent; border-top:${p.size}px solid ${p.color}; border-bottom:none;`}
  ${p => p.direction == 'left' && `border:${p.size/EQUI}px solid transparent; border-right:${p.size}px solid ${p.color}; border-left:none;`}
`