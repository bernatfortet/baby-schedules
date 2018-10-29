import { Box, BoxProps } from '@bernatfortet/global-styles'
import styled from 'styled-components'

interface Props extends BoxProps {
  direction: 'up' | 'right' | 'down' | 'left',
  color: string,
  size: number,
}
const EQUI = 1.732 // Equilateral multiplier
export const Triangle = styled(Box)<Props>` width:0; height:0;
  ${p => p.direction == 'up' && `border:${p.size/EQUI}px solid transparent; border-bottom:${p.size}px solid ${p.color}; border-top:none;`}
  ${p => p.direction == 'right' && `border:${p.size/EQUI}px solid transparent; border-left:${p.size}px solid ${p.color}; border-right:none;`}
  ${p => p.direction == 'down' && `border:${p.size/EQUI}px solid transparent; border-top:${p.size}px solid ${p.color}; border-bottom:none;`}
  ${p => p.direction == 'left' && `border:${p.size/EQUI}px solid transparent; border-right:${p.size}px solid ${p.color}; border-left:none;`}
`