import { lighten, transparentize } from 'polished'

import { Box, s } from '@bernatfortet/global-styles'
import styled, { css } from 'styled-components'

import c from '../colors'
import * as t from '../text'

// Butons --------
export const buttonPadding = css` padding:14px 16px; `
export const buttonText = css` ${t.t16} ${t.tBold} `

export type ButtonProps = { background?: string, color?: string, white?: string }

export const baseButton = css` ${s.flxRow} ${s.aic} ${s.jcc} ${s.tac} ${buttonPadding} ${s.anchor} ${s.unselectable}
  border:0; border-radius:4px; outline:0;
  transition:all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover{ transition:all 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94) }
  &:focus{ box-shadow:0 0 0 4px rgba(0,147,255,0.4); }
`
export const buttonWithTranslation = css` transform: translateY(0px);
  &:hover{ transform: translateY(-1px); }
  &:active{ transform: translateY(0px); transition:transform 0ms linear; }
`
export const buttonWithShadow = css` transition: all 400ms ease;
  &:hover{ box-shadow: 0 1px 5px 0 ${c.black10}, 0 3px 16px 0 ${c.black10}; transition: all 150ms ease; }
  &:active{ box-shadow: 0 1px 1px 0 ${c.black10}; transition:box-shadow 0ms linear; }
`
export const buttonWithbackgroundShadow = css` transition: box-shadow 400ms ease, border-color 400ms ease;
  border-color:${(p: ButtonProps) => p.background ? transparentize(0.8, p.background) : c.black10 };
  &:hover{ box-shadow: 0 2px 7px 0px ${p => transparentize(0.75, p.background ? p.background : c.black10)},
                       0 5px 24px 1px ${p => transparentize(0.75, p.background ? p.background : c.black10)}; }
  &:active{ box-shadow: 0 1px 1px 0 ${p => transparentize(0.75, p.background ? p.background : c.black10)};
      transition:box-shadow 0ms linear; border-color:transparent; }
`
export const buttonWithOutline = css` ${baseButton} ${buttonWithTranslation}
  border:2px solid ${c.black20};
`
export const buttonWithColoredBackground = css` color:${(p: ButtonProps) => p.color ? p.color : c.white};
  background:${p => p.background ? p.background : c.white };
  &:hover{ background:${p => p.background ? lighten(0.05, p.background) : c.white90 };}
  &:active{ background:${p => p.background ? lighten(0.1, p.background) : c.white40}; }
`

export const button = css` ${baseButton} ${buttonWithShadow} ${buttonWithTranslation} ${buttonWithbackgroundShadow} ${buttonWithColoredBackground}
  color:${p => p.color ? p.color : c.black90};
  text-shadow:0 0 2px rgba(0,0,0,0.2);
`

export const Button = styled(Box)` ${button} ${buttonPadding} ${buttonText} `
export const SecondaryButton = styled(Box)` ${buttonWithOutline} ${buttonWithShadow} ${buttonPadding} ${buttonText} `


export const ButtonInput = styled.input` ${button} ${s.spacingProps as any} `