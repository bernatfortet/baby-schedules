import { timingFunctions } from 'polished'
import * as React from 'react'
import { CSSTransition } from 'react-transition-group'

import { Box, Column, Row, s } from '@bernatfortet/global-styles'
import styled, { createGlobalStyle, css } from 'styled-components'

type Props = {
}

export default class Pop extends React.Component<Props> {

  render() {
    const { children, ...rest } = this.props
    return <>
      <GlobalStyle/>
      <CSSTransition {...rest} timeout={duration} appear mountOnEnter unmountOnExit classNames='pop'>
        {children}
      </CSSTransition>
    </>
  }

}

const duration = 500
const initialState = css` opacity:0.01; transform:translateY(20%); `
const targetState = css` opacity:1; transform:translateY(0px); `
const timing = timingFunctions('easeOutExpo')
const transition = css` transition: transform ${duration}ms ${timing}, opacity ${duration}ms ${timing}; `

const GlobalStyle = createGlobalStyle`
.pop-enter{ ${initialState} }
.pop-enter.pop-enter-active{ ${targetState} ${transition} }
.pop-exit{ ${targetState} }
.pop-exit.pop-exit-active{ ${initialState} ${transition} }
`