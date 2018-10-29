import { rgba } from 'polished'
import * as React from 'react'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

interface SegmentOption {
  value: string,
  label: string,
  disabled?: boolean,
}

interface Props extends BoxProps {
  name: string,
  options: any, // TODO , better typing Segemnt Options that are extensible?
  value: string,
  isSmall?: boolean,
  onClick: (option: any) => void
}

type State = {
  value: string,
}

export default class SegmentedControl extends React.Component<Props> {

  state: State = {
    value: this.props.value,
  }

  render() {
    const { name, options, value, onClick, isSmall, ...boxProps } = this.props
    const { Item } = this
    return <Row h={isSmall ? 20 : 48} center {...boxProps}>
      {options.map( (option, key) => <Item option={option} key={key} />)}
    </Row>
  }

  Item = ({ option }) => {
    const { isSmall } = this.props
    const { label, value } = option
    const isActive = this.props.value == value
    const TextTag = isSmall ? m.T14 : m.T16
    return <Option isActive={isActive} onClick={() => this.onClick(option)}>
      <TextTag lh={16} center upcase={isSmall}>{label}</TextTag>
    </Option>
  }

  onClick = ( option ) => this.props.onClick(option)

}

const roundness = 4
  const Option = styled(Box)<{ isActive: boolean}>` ${s.aic}  height:100%; padding:12px; margin-right:3px; ${s.anchor}
    box-shadow:${m.segmentedControlBorder.idle};
    ${s.anim} transition-duration:100ms;
    
    &:first-child{ border-top-left-radius:${roundness}px; border-bottom-left-radius:${roundness}px; }
    &:last-child{ margin-right:0; border-top-right-radius:${roundness}px; border-bottom-right-radius:${roundness}px; }
    &:hover{ ${s.anim}
      background:rgba(0, 0, 0, 0.02);
      box-shadow:${p => p.theme.inputBorder.focus}; 
      > * { opacity: 1; }
    }
    ${ p => p.isActive && `
      background:${c.black70}; color:white;
      > * { ${m.tBold} }
      &:hover{ background:${c.black80}; box-shadow:none; ${s.anim} }
    `}
    ${ p => !p.isActive && `
      > * { opacity: 0.5; }
    `}

  `
