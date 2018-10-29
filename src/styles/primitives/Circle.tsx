import { Box, BoxProps, s } from '@bernatfortet/global-styles'
import styled from 'styled-components'

type Props = {
  size?: number
} & BoxProps 

export const Circle = styled(Box).attrs<Props>({
  background: p => p.color,
  size: p => p.size || 40,
  center: true,
})`
  width:${p => p.size}px; height:${p => p.size}px;
  ${s.boxProps}  border-radius:${ p => p.size}px;
`