import { readableColor } from 'polished'
import * as React from 'react'

import { Box, c, Column, m, Row, s } from 'styles/index'

import Icon from 'components/global/Icon'
import Loader from 'components/global/Loader'
import StyledButton, { Props as ButtonProps } from 'components/global/StyledButton'

interface Props extends ButtonProps {
  text: string,
  name?: string,
  type?: string,
  onSubmit?: (e?: any) => void,
  isSubmitting: boolean,
  iconName?:  string,
  disabled?: boolean,
  background?: string,
  useRightIcon?: boolean,
  color?: string,
  style?: any,
  className?: string,
  green?: boolean,
  red?: boolean,
  innerRef?: any,
}
export default class FormButton extends React.Component<Props> {

  static defaultProps = {
    color: c.white,
  }

  render() {
    const { onSubmit, isSubmitting, useRightIcon, iconName, background, color, text, innerRef, ...rest } = this.props

    const backgroundColor = background ? background : this.props.green ? c.green : this.props.red ? c.red : ''

    return(
      <StyledButton onClick={onSubmit} background={backgroundColor} innerRef={innerRef} {...rest} >
        <Row vCenter>
          { iconName && !useRightIcon && !isSubmitting && <Icon name={iconName} color={color} size={20} mr={8} /> }
          <m.T16 bold color={color}>{text}</m.T16>
          { iconName && useRightIcon && !isSubmitting && <Icon name={iconName} color={color}size={20} ml={8} /> }
          { isSubmitting ? <Box w={12} /> : ''}
          { isSubmitting ? <Loader size={15} color={color} /> : ''}
        </Row>
      </StyledButton>
    )
  }

  onClick = ( event: any ) => {
    const { onSubmit, isSubmitting } = this.props
    if (onSubmit &&  !isSubmitting)
      onSubmit(event)
  }
}
