import { transparentize } from 'polished'
import * as React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import styled from 'styled-components'
import { Column, m, Row, s } from 'styles/index'

type Props = {
  children: any,
  innerRef?: () => {},
}

export default class StyledScrollbars extends React.Component<Props> {
  render() {
    const { children, innerRef, ...rest } = this.props
    return(
      <Scrollbars autoHide {...rest} ref={innerRef ? innerRef : null} style={{ width: '100%', height: '100%'}} >
        {children}
      </Scrollbars>
    )
  }

  static defaultProps = {
    renderThumbVertical: props => <div {...props} style={thumbStyles}/>,
  }
}

  const thumbColor = '#656565'
  const thumbStyles = { backgroundColor: transparentize(0.3, thumbColor) , borderRadius: 20}
