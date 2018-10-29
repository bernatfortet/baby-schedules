import { darken, transparentize } from 'polished'

import { Box, BoxProps, s } from '@bernatfortet/global-styles'
import styled, { css } from 'styled-components'

import c from '../colors'
import * as t from '../text'

// Pressables --------
// Pressable
interface PressableProps extends BoxProps { color?: string, hoverColor?: string, hoverBackground?: string  }
export const RootPressable = styled(Box).attrs<PressableProps>({
    br: 4, p: 4,
    color: p => p.color || c.black50,
    background: p => p.background || 'transparent',
    hoverColor: p => p.hoverColor || c.black,
    hoverBackground: p => p.hoverBackground || c.black10,
  })`
  ${s.unselectable} ${s.anchor} ${s.anim}
  color:${p => p.color}; 
  &:hover{ color:${p => p.hoverColor}; background:${p => p.hoverBackground}; }
`
export const PressableOnBlack = styled(RootPressable).attrs<PressableProps>({
  color: c.white50,
  hoverColor: c.white,
  hoverBackground: c.white10,
})``
export const PressableOnWhite = styled(RootPressable).attrs<PressableProps>({
  color: c.black50,
  hoverColor: c.black,
  hoverBackground: c.black10,
})``
export const PressableBlue = styled(RootPressable).attrs<PressableProps>({
  color: c.blue,
  hoverColor: darken(0.8, c.blue),
  hoverBackground: transparentize(0.8, c.blue),
})``


// pressable props: color, hoverColor, background, hoverBackground, borderRadius, padding, 
export const pressableBase = css` ${s.unselectable} `
export const pressableBackground = css` ${pressableBase} border-radius:4px; ${s.anchor} transition:300ms; &:hover{ transition:100ms; } `
export const pressableLightBackground = css` ${pressableBackground} &:hover{ background:${c.white10}; }`
export const pressableDarkBackground = css`  ${pressableBackground} &:hover{ background:${c.black10}; }`
export const pressable = css` ${pressableBase} ${pressableLightBackground} color:${c.white50}; &:hover{ color:${c.white} !important; } `
export const pressableDark = css` ${pressableBase} ${pressableDarkBackground} color:${c.black50};
  &:hover{ color:${c.black} !important; }
`

export const Pressable = styled(Box).attrs<BoxProps>({ p: 8 })` ${pressable} `
// export const PressableOnWhite = styled(Box)` ${pressableDark} padding:4px; `
