import { readableColor, transparentize } from 'polished'
import * as React from 'react'

import { PIXELS_PER_MINUTE } from 'utils/constants'
import { BlockAttr, BlockType } from 'utils/types'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

type Props = {
  type: BlockType,
  duration: number
  start?: number,
} & BoxProps

const Block: React.SFC<Props> = (props: Props) => {
  const { type, duration, ...rest } = props
  const bg = BlockAttr[type].color
  const label = BlockAttr[type].label
  return(
    <Wrapper h={duration * PIXELS_PER_MINUTE} p={8} br={4} bg={bg} {...rest}>
      <m.Text bold center color={readableColor(bg)} >{label}</m.Text>
    </Wrapper>
  )
}

export default Block

const Wrapper = styled(Box)<{start?: number}>` width:80px; background-color:${p => transparentize(0.1, p.bg)};
  ${p => p.start && ` ${s.pabs} top:${p.start}px;`}
`