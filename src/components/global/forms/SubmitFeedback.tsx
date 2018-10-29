import * as React from 'react'

import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

import Icon from 'components/global/Icon'

interface Props extends BoxProps {
  success?: string,
  error?: string,
}

const SubmitFeedback: React.SFC<Props> = (props: Props) => {
  const { success, error, ...rest } = props

  if (!success && !error) return null

  return <Row id='Success' vCenter {...rest}>
    {success && <>
      <Icon name='check-circle' color={c.green} size={20} mr={4}  />
      <m.T16 bold color={c.green}>{success}</m.T16>
    </>}
    {error && <>
      <m.T16 bold color={c.red}>{error}</m.T16>
    </>}
  </Row>
}

SubmitFeedback.defaultProps = {
  mt: 12
}

export default SubmitFeedback
