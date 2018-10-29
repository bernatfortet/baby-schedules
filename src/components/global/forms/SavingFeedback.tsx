import * as React from 'react'

import styled, { css, keyframes } from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles/index'

import Icon from 'components/global/Icon'
import Loader from 'components/global/Loader'

type Props = {
  isSubmitting?: boolean,
  success?: boolean,
  className?: string,
  style?: any,
}

const SavingFeedback = (props: Props) => {
  const { isSubmitting, success, className, style } = props

  if ( success )
    return(
      <Wrapper vCenter isSubmitting={true} success={success} className={className} style={style}>
        <Icon name='check-circle' color={c.green} />
        <Box ml={4}>Saved!</Box>
      </Wrapper>
    )
  return(
    <Wrapper vCenter isSubmitting={isSubmitting} className={className} style={style}>
      <Loader size={16} color={c.green} />
      <Box ml={4}>Saving...</Box>
    </Wrapper>
  )
}

export default SavingFeedback



const hide = keyframes` from{ opacity:1; } to{ opacity:0; } `


const submittingStyle = css` opacity:1; transition-delay:0;`
const successStyle = css` animation:${hide} 1s 1s forwards; `

const Wrapper = styled(Row).attrs<{isSubmitting?: boolean, success?: boolean}>({})` ${s.untouchable} transition:500ms;
  ${m.tBold} color:${c.green};
  opacity:0;
  ${p => p.isSubmitting ? submittingStyle : ''}
  ${p => p.success ? successStyle : ''}
`
