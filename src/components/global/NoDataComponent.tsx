import * as React from 'react'

import styled from 'styled-components'
import { Column, m, Row, s } from 'styles/index'

type Props = {
  children: any,
}
const NoDataComponent = (props: Props) => {
  const { children } = props
  return(
    <Wrapper vCenter hCenter>
      {children}
    </Wrapper>
  )
}

export default NoDataComponent


const Wrapper = styled(Column)` ${s.tac} min-height:100px; padding:32px; ${m.t20}
  & span{ opacity:0.6; }
`
