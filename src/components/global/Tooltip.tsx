import Tippy from '@tippy.js/react'
import * as React from 'react'

import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/themes/light.css'
import 'styles/tippy-styles.css'

import { Box, BoxProps, Column, Row, s } from 'styles/index'

type TippyPlacement = 'top' | 'bottom' | 'left' | 'right' |
                      'top-start' | 'bottom-start' | 'left-start' | 'right-start'  |
                      'top-end' | 'bottom-end' | 'left-end' | 'right-end'

interface Props extends BoxProps {
  children?: any,
  content: any,
  wrap?: boolean | number,

  arrow?: boolean,
  theme?: string,
  placement?: TippyPlacement,
  animateFill?: boolean,
  animation?: string,
  trigger?: string,
  hideOnClick?: boolean,
  interactive?: boolean,
  preventOverflow?: boolean,
  delay?: number,
  onShow?: () => void,
  onHide?: () => void,
}

export const Tooltip: React.SFC<Props> = (props: Props) => {
  const { content, wrap, children, preventOverflow, ...rest } = props

  const tippyPropKeys = ['arrow', 'theme', 'placement', 'animateFill', 'animation', 'trigger', 'hideOnClick',
    'interactive', 'onShow', 'onHide', 'delay']
  const tippyProps = Object.keys(props).reduce( (newProps, prop) => {
    if (tippyPropKeys.indexOf(prop) !== -1) return { ...newProps, [prop]: props[prop] }
    else return { ...newProps}
  }, {} )
  
  if (!content) return <React.Fragment>{children}</React.Fragment>

  const wrapMaxWidth = typeof wrap == 'number' ? wrap : 220
  const parsedContent = wrap ? <Box jcfs maxw={wrapMaxWidth} p={8}>{content}</Box> : content
  const popperOptions = preventOverflow ? { popperOptions: { modifiers: { preventOverflow: { escapeWithReference: true }}}} : {}
  return(
    <Box {...rest}>
      <Tippy content={parsedContent} {...tippyProps} {...popperOptions} >
        {children}
      </Tippy>
    </Box>
  )
}

Tooltip.defaultProps = {
  arrow: true,
  theme: 'dark',
  placement: 'right',
  animateFill: false,
  animation: 'fade',
  wrap: true,
  preventOverflow: true,
}

export default Tooltip