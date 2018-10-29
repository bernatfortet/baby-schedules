import * as React from 'react'

import { Box, BoxProps, s, TextProps } from '@bernatfortet/global-styles'
import styled, { createGlobalStyle, css } from 'styled-components'

import c from './colors'

export const resetTextAttributes = css` font-family:inherit; font-size:inherit; line-height:inherit; font-weight:inherit; letter-spacing:inherit; `

export const tBold = css` font-weight:700; `
export const tRegular = css` font-weight:400; `
export const interFont = css` font-family:'Inter UI'; `

export const t32 = css` font-size:32px; line-height:42px; ${tBold} `
export const t28 = css` font-size:28px; line-height:36px; ${tBold} `
export const t24 = css` font-size:24px; line-height:32px; ${tBold} `
export const t22 = css` font-size:22px; line-height:28px; ${tRegular} `
export const t20 = css` font-size:20px; line-height:24px; ${tRegular} `
export const t18 = css` font-size:18px; line-height:22px; ${tRegular} `
export const t16 = css` font-size:16px; line-height:19px; ${tRegular} `
export const t15 = css` font-size:15px; line-height:17px; ${tRegular} `
export const t14 = css` font-size:14px; line-height:16px; ${tRegular} `
export const t12 = css` font-size:12px; line-height:14px; ${tRegular} `

/* tslint:disable */ // Fix when updating to styled-components v4 
export const TextGlobalStyle  = createGlobalStyle`
  html{
    ${interFont} ${t16} color:${c.black};
    font-feature-settings: 'calt' 1, 'tnum' 1, 'case' 1, 'ss01' 1;
    -webkit-font-feature-settings: 'calt' 1, 'tnum' 1, 'case' 1, 'ss01' 1;
    font-kerning:normal;
    text-rendering:geometricPrecision;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const textProps = css`
  ${(p: TextProps) => p.bold ? tBold : ''}
  ${p => p.lh ? `line-height:${p.lh}px;` : ''}
  ${p => p.opacity ? `opacity:${p.opacity};` : ''}
  ${p => p.op ? `opacity:${p.op};` : ''}
  ${p => p.color ? `color:${p.color};` : ''}
  ${p => p.center ? `text-align:center;` : ''}
  ${p => p.right ? `text-align:right;` : ''}
  ${p => p.upcase ? `text-transform: uppercase;` : ''}
`

export const T32 = styled(Box)` ${t32} ${textProps}`
export const T28 = styled(Box)` ${t28} ${textProps}`
export const T24 = styled(Box)` ${t24} ${textProps}`
export const T18 = styled(Box)` ${t18} ${textProps}`
export const T20 = styled(Box)` ${t20} ${textProps}`
export const T16 = styled(Box)` ${t16} ${textProps}`
export const T15 = styled(Box)` ${t15} ${textProps}`
export const T14 = styled(Box)` ${t14} ${textProps}`
export const T12 = styled(Box)` ${t12} ${textProps}`
export const BaseText = styled(Box)` ${textProps}`

export const UpcaseHeading = styled(Box)` ${t14} ${tBold} text-transform:uppercase; opacity:0.4;`


export const textStyles = {12: t12, 14: t14, 15: t15, 16: t16, 18: t18, 20: t20, 24: t24, 28: t28, 32: t32  }
export const textTags = {12: T12, 14: T14, 15: T15, 16: T16, 18: T18, 20: T20, 24: T24, 28: T28, 32: T32  }

// TODO refactor this props with Global Style props maybe ditch TextProps in global styles since
type TextComponentProps = {
  size?: number,
  weight?: number,

  bold?: boolean,
  semi?: boolean,
  color?: string,
  lh?: number,
  opacity?: number,
  op?: number,
  center?: boolean,
  right?: boolean,
  upcase?: boolean,
}

export const Text = styled(Box)<TextComponentProps>`
${p => p.size && textStyles[p.size]}
${p => p.bold && tBold} 
${p => p.weight && `font-weight:${p.weight};`} 
${textProps}
`

