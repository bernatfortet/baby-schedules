import { rgba, transparentize } from 'polished'

const black = '#232323'
const white = 'white'

const baseColors = {
  rootBackground: black,
  modalBackground: white,
  gradientForeground: '#272C2D',
  darkPanel: '#131313',
  foreground: '#EEEEEE',

  green: '#67C202',
  darkGreen: '#38ad00', // Used for green text on white
  dimGreen: '#43C258',
  dimRed: '#C04A3B',
  red: '#FF5900',
  grey: '#F5F5F5',
  blue: '#3E72F8',
  lightBlue: '#27A6DC',
  yellow: '#FFB100',
  orange: '#FF8B21',

  black: black,
  black95: rgba( black, 0.95),
  black90: rgba( black, 0.9),
  black85: rgba( black, 0.85),
  black80: rgba( black, 0.8),
  black70: rgba( black, 0.7),
  black60: rgba( black, 0.6),
  black50: rgba( black, 0.5),
  black40: rgba( black, 0.4),
  black35: rgba( black, 0.35),
  black30: rgba( black, 0.3),
  black20: rgba( black, 0.2),
  black15: rgba( black, 0.15),
  black10: rgba( black, 0.1),
  black05: rgba( black, 0.05),

  white0: rgba( white, 0),
  white05: rgba( white, 0.05),
  white10: rgba( white, 0.1),
  white15: rgba( white, 0.15),
  white20: rgba( white, 0.2),
  white30: rgba( white, 0.3),
  white40: rgba( white, 0.4),
  white50: rgba( white, 0.5),
  white60: rgba( white, 0.6),
  white70: rgba( white, 0.7),
  white80: rgba( white, 0.8),
  white90: rgba( white, 0.9),
  white: white,


  facebook: '#4065B4',
  twitter: '#1DA1F2',
  google: 'white',
  coinbase: '#1D75B7',
}

export default { ...baseColors,
  brand: baseColors.yellow,

  warning: baseColors.yellow,
  error: baseColors.red,
  info: baseColors.blue,
  inputFocus: transparentize(0.8, baseColors.blue)
}

