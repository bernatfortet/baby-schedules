import colors from './colors'
import * as mainStyles from './main'
import * as primitives from './primitives/index'
import * as text from './text'

export { BoxProps, TextProps, Box, Column, Row, s } from '@bernatfortet/global-styles'
export const m = { 
  ...mainStyles,
  ...primitives,
  ...text,
}

export const c = colors