import { timingFunctions } from 'polished'
import * as React from 'react'
import { CSSTransition } from 'react-transition-group'

import { Box, Column, Row, s } from '@bernatfortet/global-styles'
import styled, { createGlobalStyle, css } from 'styled-components'

type Props = {
  children: any,
  isVisible?: boolean,
}

export default class Fade extends React.Component<Props> {

  render() {
    const { children, isVisible,  ...rest } = this.props
    const isVisibleProp = isVisible != undefined ? { in: isVisible } : {}
    return <>
      <GlobalStyle />
      <CSSTransition {...rest} {...isVisibleProp} timeout={duration} appear mountOnEnter unmountOnExit classNames='fade'>
        {children ? children : <div></div>}
      </CSSTransition>
    </>
  }

}

const duration = 800
const initialState = css` opacity:0.01; `
const targetState = css` opacity:0.75; `
const timing = timingFunctions('easeOutExpo')
const transition = css` transition: transform ${duration}ms ${timing}, opacity ${duration}ms ${timing}; `


const GlobalStyle = createGlobalStyle`
  .fade-enter{ ${initialState} }
  .fade-enter.fade-enter-active{ ${targetState} ${transition} }
  .fade-exit{ ${targetState} }
  .fade-exit.fade-exit-active{ ${initialState} ${transition} pointer-events:none;}
`