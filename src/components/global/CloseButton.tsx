import * as React from 'react'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

import Icon from 'components/global/Icon'

interface Props extends BoxProps {
  onClick: () => void,
  top?: number,
  left?: number,
  right?: number,
  bottom?: number,
}

const CloseButton: React.SFC<Props> = (props: Props) => {
  const { onClick, top, left, right, bottom, ...rest } = props
  
  return(
    <Wrapper id='Close' aic onClick={onClick} tabIndex={0} style={{ top, left, right, bottom }} {...rest}>
      <Icon name='close' size={32} color={c.black40} />
    </Wrapper>
  )
}

CloseButton.defaultProps = {
  top: 14,
  right: 14,
}

export default CloseButton

const Wrapper = styled(Box)` ${m.pressableDarkBackground} padding:6px; ${s.pabs}`
