import { darken, getLuminance, readableColor, transparentize } from 'polished'
import * as React from 'react'

import styled, { css } from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

import Icon from 'components/global/Icon'

export interface Props extends BoxProps {
  children?: any,
  className?: string,
  name?: string,
  background?: string,
  iconName?:  string,
  color?: string,
  style?: any,
  useRightIcon?: boolean,
  id?: string,
  disabled?: boolean,
  hideShadow?: boolean,
  title?: string,
  onClick?: React.MouseEventHandler<any>,
  innerRef?: any,
}

const StyledButton = (props: Props) => {
  const { iconName, useRightIcon, innerRef, ...rest } = props
  return(
    <Button {...rest} innerRef={innerRef}>
      {iconName && !useRightIcon && <Icon name={iconName} mr={8}/>}
      {props.children}
      {iconName && useRightIcon && <Icon name={iconName} ml={8}/>}
    </Button>
  ) 
}

export default StyledButton


const disabledButton = css` ${m.baseButton}
  background-color:${p => transparentize(0.8, p.theme.opposite)}  !important;
  cursor:not-allowed; box-shadow:none !important; border:0 !important;
  text-shadow:none;
  &:hover{ background-color:${p => p.theme.disabledBackground} !important; }
`

const Button = styled.button.attrs<Props>({})`
  ${s.boxProps}
  ${p => !p.disabled ? m.button : '' }
  ${p => p.background ? m.buttonWithColoredBackground : ''}
  ${p => p.disabled ? disabledButton : '' }
  ${s.jcc} ${m.t16} ${m.tBold} transition:500ms;
  ${p => (p.color == c.black || p.hideShadow) && ` text-shadow:none;`}
`
