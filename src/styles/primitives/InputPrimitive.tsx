import { rgba, transparentize } from 'polished'
import * as React from 'react'

import { s } from '@bernatfortet/global-styles'
import { css } from 'styled-components'

import c from '../colors'
import * as t from '../text'

// -------------------
// Core Input variables
export const focusOutline = `0 0 0 4px ${c.inputFocus}`
export const inputBorderWidth = 2
export const errorStyle = css` box-shadow: inset 0 0 0 2px ${c.red} !important; `

export const resetInputAttributes = css`
  ${t.resetTextAttributes} margin:0; padding:0; background:transparent;
  border:0; outline:0; color:inherit; font-size:inherit;
`


 // TODO improve how errors are handeled with inputs. Improve when creating new Field/Input primitive components
export type InputProps = { hasError?: boolean, color?: string }
export const inputError = css` 
  &.has-error{ ${errorStyle} }
  ${(p: InputProps) => p.hasError ? errorStyle : '' }
`
export const noInputSpinner = css` &::-webkit-outer-spin-button, &::-webkit-inner-spin-button { -webkit-appearance: none; } `


// -------------------
// Base Input

export const baseInput = css` ${resetInputAttributes} ${s.ass} flex:1; box-sizing:border-box;
  background:transparent; border-radius:4px; ${s.anim}
  &:hover{ z-index:1; }
  &:focus{ z-index:2; }

  &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active {
    -webkit-transition: color 9999s ease-out 9999s, background-color 9999s ease-out 9999s;
  }
  ${inputError}
`

export const inputText = css`
  color:${p => p.theme.textColor};
  &::placeholder{ ${s.anim} color:${p => transparentize(0.7, p.theme.textColor)}; }
  &:hover::placeholder{ color:${p => transparentize(0.6, p.theme.textColor)};  }
  &:focus::placeholder{ color:${p => transparentize(0.6, p.theme.textColor)}; }
`
export const input = css` ${baseInput} ${inputText} ${s.anim}
  padding:15px; 
  background: ${p => p.theme.inputBackground.idle};

  box-shadow:${p => p.theme.inputBorder.idle};
  &:hover{ ${s.anim} background:${p => p.theme.inputBackground.hover}; box-shadow:${p => p.theme.inputBorder.hover}; }
  &:focus{ background:${p => p.theme.inputBackground.focus}; box-shadow:${p => p.theme.inputBorder.focus} !important; ${s.anim} }
`

// -------------------
// Textareas
export const textarea = css` ${input} ${p => p.theme.inputText}  resize:none; `


// -------------------
// Select Inputs  => Based on React-select package
const selectMenuShadow = css` 0 6px 12px ${c.black10} `

export const selectStyles = css` flex:1; padding:0;
  &.is-focused, &.is-open{ background:transparent; }

  &:hover{
    & .Select-placeholder{ color:${c.black70}; }
  }
  & .Select-value{ ${s.aic} }
  & .Select-control{ height:100% !important; padding:0 !important; ${s.aic} ${s.jcsb} 
    ${input};
    ${p => p.theme.inputText};
  }
  &.is-focused .Select-control, &.is-open .Select-control{ background:white !important; }
  &.is-focused .Select-control{ box-shadow:${p => p.theme.inputBorder.focus} !important; }

  .Select-placeholder{ ${s.aic} }
  .Select-input{ ${s.aic} ${s.prel} z-index:10; }
  .Select-option{ background-color:transparent; }

  .Select-menu-outer{ margin-top:-4px; overflow:hidden; z-index:999;
    box-shadow:${selectMenuShadow}; border:${inputBorderWidth}px solid ${p => p.theme.textColor};
  }
`

// -------------------
// Segmented Controls

export const segmentedControlBorder = {
  idle: `inset 0 0 0 ${inputBorderWidth}px ${c.black20}`
}


// -------------------
// Themes

type InputTheme = { // TODO Figure out what css string literals have as a type
  textColor: any,
  inputBackground: any,
  inputBorder: any,
  selectInput: any,
  textarea: any,
}


// White Input on Black Background---------
// (to use on top of black background when input is very important )
// export const inputWhite = css` ${baseInput} ${s.anim}
//   padding: 15px;
//   background:${rgba(c.white, 0.95)};
//   color:${p => p.color ? p.color : c.black};

//   &:hover{ background:white; box-shadow:0 2px 18px ${rgba('black', 0.2)}, 0 0 0 2px ${rgba(c.white, 0.3)}; ${s.anim}
//     .input{ color:${c.black}; opacity:1;}
//   }

//   &:focus{ background:white; box-shadow:0 4px 24px ${rgba('black', 0.4)}, 0 0 0 4px ${transparentize(0.8, c.white)}; ${s.anim} ${s.anim} }

//   &::placeholder{ ${s.anim} color:${p => p.color ? transparentize(0.5, p.color) : c.black40}; }
//   &:hover::placeholder{ color:${p => p.color ? transparentize(0.25, p.color) : c.black90};  }
//   &:focus::placeholder{ color:${p => p.color ? transparentize(0.25, p.color) : c.black40}; }
//   ${inputError}
// `


export const blackBackgroundInputTheme: InputTheme = {
  textColor: c.black,
  inputBackground: {
    idle: rgba(c.white, 0.95),
    hover: c.white,
    focus: c.white, 
  },
  inputBorder: {
    idle: ` 0 0 0 ${inputBorderWidth}px ${rgba(c.white, 0.02)} `,
    hover: ` 0 0 0 ${inputBorderWidth}px ${rgba(c.white, 0.3)} `,
    focus: ` 0 0 0 4px ${rgba(c.white, 0.2)} `,
  },
  selectInput: selectStyles,
  textarea: textarea,
}

export const whiteBackgroundInputTheme: InputTheme = {
  textColor: c.black,
  inputBackground: {
    idle: rgba(c.black, 0.06),
    hover: rgba(c.black, 0.02),
    focus: c.white, 
  },
  inputBorder: {
    idle: ` inset 0 0 0 ${inputBorderWidth}px ${rgba(c.black, 0.02)} `,
    hover: ` inset 0 0 0 ${inputBorderWidth}px ${rgba(c.black, 0.4)} `,
    focus: ` inset 0 0 0 ${inputBorderWidth}px ${c.black} `,
  },
  selectInput: selectStyles,
  textarea: textarea,
}
