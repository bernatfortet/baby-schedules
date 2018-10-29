import * as React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

interface Props extends BoxProps {
  // Link props
  to?: string,
  id?: string,

  // Anchor props
  href?: string,
  target?: string,
  title?: string,

  onClick?: () => void,
}

const Link = (props: Props) => {
  const { to, href, target, title, ...rest} = props

  if ( href ) return <A href={href} target={target} title={title} {...rest} />
  if ( to ) return <StyledRouterLink to={to} title={title} {...rest} />
  return null
}

export default Link
const A = styled.a` display:flex; ${s.boxProps} `
const StyledRouterLink = styled(RouterLink)` ${s.boxProps} `
