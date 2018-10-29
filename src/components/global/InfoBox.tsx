import { shade, tint, transparentize } from 'polished'
import * as React from 'react'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

import Icon from 'components/global/Icon'

interface Props extends BoxProps {
  iconName?: string,
  color?: string,
  bg: string,
  text?: string | React.ReactNode,
  children?: any,
  bold?: boolean,
  size: number,
} 

const InfoBox: React.SFC<Props> = (props: Props) => {
  const { iconName, bold, bg, size, text, children, ...rest } = props
  const color = props.color ? props.color : shade(0.2, bg)

  const Text = m.textTags[size]
  return(
    <Box vCenter background={transparentize(0.85, bg)} p={'10px 12px 12px 10px'} br={4} {...rest} asfs>
      <Row>
        {iconName && <Icon name={iconName} color={color} size={size + 2} mr={8} />}
        {text || typeof(children) == 'string' ? <Text bold={bold} color={color}>{text || children}</Text> : null}
      </Row>
        
      {children && typeof(children) != 'string' ? children : null}
    </Box>
  )
}

InfoBox.defaultProps = {
  size: 16,
  iconName: 'info-outlined',
  bg: c.blue,
}
export default InfoBox
