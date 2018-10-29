import * as React from 'react'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles/index'

type Props = {
  error?: Error | string,
}

const InputError = (props: Props) => {
  const { error } = props
  if ( !error ) return null
  return(
    <Error className='error'>{error.toString()}</Error>
  )
}

export default InputError


const Error = styled(Box)` ${s.prel} top:-3px; background:${c.red}; padding:2px 6px; border-radius:0 0 4px 4px;
  ${m.t14} ${m.tBold} color:${c.white};
`
