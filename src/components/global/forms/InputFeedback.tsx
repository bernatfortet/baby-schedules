// DEPRACTED -> Use Submit Feedback
import * as React from 'react'

import styled, { css, keyframes } from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

interface Props extends BoxProps {
  isFeedbackVisible: boolean,
  errorString?: string,
  successMessage: string,
  className?: string,
  style?: any,
}



export default class InputFeedback extends React.Component<Props> {

  static defaultProps = {
    successMessage: 'Saved succesfully',
  }

  render() {
    const { isFeedbackVisible, errorString, successMessage, className, style, ...rest } = this.props
    if (errorString) {
      return <Error className={className} style={style} {...rest}>{errorString}</Error>
    }
    if (!isFeedbackVisible) return null
    return <Success className={className} style={style} {...rest}>{successMessage}</Success>
  }
}

const Success = styled(Box)` ${m.t16} ${m.tBold} color:${c.green}; `
const Error = styled(Success)` color:${c.red};`
