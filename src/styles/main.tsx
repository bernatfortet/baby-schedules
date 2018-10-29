import { darken, lighten, rgba, transparentize, triangle } from 'polished'
import * as React from 'react'

import 'tippy.js/dist/themes/light.css'

import { Box, BoxProps, Column, Row, s, TextProps } from '@bernatfortet/global-styles'
import styled, { css, keyframes } from 'styled-components'

import c from './colors'
import * as primitives from './primitives/index'
import * as t from './text'

// Themes
const getFocusStyles = (color: string) =>  `0 0 0 3px ${transparentize(0.7, color)}`

export const themes = {
  blackBackground: {
    ...primitives.blackBackgroundInputTheme,
    focusOutline: getFocusStyles(c.white),
    opposite: c.white
  },
  whiteBackground: {
    ...primitives.whiteBackgroundInputTheme,
    focusOutline: getFocusStyles(c.blue),
    opposite: c.black
  }
}
