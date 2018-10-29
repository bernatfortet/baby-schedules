import * as React from 'react'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

interface Props extends BoxProps {
  error: string,
}
const Error = (props: Props) => {
  const { error, ...rest } = props
  if ( !error ) return null

  return(
    <Wrapper {...rest}>
      {error}
    </Wrapper>
  )
}

export default Error


const Wrapper = styled(Box)` padding:20px; color:${c.red}; `
