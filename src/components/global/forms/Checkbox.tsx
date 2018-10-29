import { transparentize } from 'polished'
import * as React from 'react'

import styled, { css } from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

import Icon from 'components/global/Icon'

interface Props extends BoxProps {
  name: string,
  id?: string,
  value?: string,
  checked?: boolean,
  defaultChecked?: boolean,
  disabled?: boolean,
  readOnly?: boolean,
  tabIndex?: number,
  onChange?: (checked: boolean) => void,
  onClick?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
  autoFocus?: boolean,
}

type State = {
  checked: boolean,
  isFocused: boolean,
}

export default class Checkbox extends React.Component<Props> {

  input: any

  state: State = {
    checked: false,
    isFocused: false,
  }

  constructor(props) {
    super(props)
    this.state.checked = 'checked' in props ? props.checked : props.defaultChecked
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) this.setState({ checked: nextProps.checked })
  }

  focus() { this.input.focus() }

  render() {
    const { name, value, id, disabled, readOnly, tabIndex, onClick, onFocus, onBlur, autoFocus, children, onChange, ...rest } = this.props
    const { checked, isFocused } = this.state

    const parsedId = id ? id : name

    const checkbox = (
      <CheckboxInput
        name={name}
        value={value ? value : name}
        id={parsedId}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={(this.onChange)}
        ref={ ref => this.input = ref}
        type='checkbox'
        checked={checked}
        autoFocus={autoFocus}
      />
    )

    const checkboxGraphic = (withOutline: boolean) => 
      <CheckboxGraphic center mr={12} checked={checked} isFocused={isFocused} withOutline={withOutline}>
        <CheckIcon name="check" checked={checked} />
      </CheckboxGraphic>
    
    return children ? 
      <Box {...rest}>
        <PressableLabel {...rest}>
          {checkbox}
          {checkboxGraphic(false)}
          {children}
        </PressableLabel>
      </Box>
    :
      <Box {...rest}>
        {checkbox}
        {checkboxGraphic(true)}
      </Box>
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { props } = this
    if (props.disabled) return

    this.setState({
      isFocused: true, 
      checked: e.currentTarget.checked
    })

    if (this.props.onChange) this.props.onChange(e.currentTarget.checked)
  }

  onFocus = () => {
    if (this.props.onFocus) this.props.onFocus()
  }

  onBlur = () => {
    this.setState({ isFocused: false })
    if (this.props.onBlur) this.props.onBlur()
  }

}

const CheckboxInput = styled.input` opacity:0; ${s.pabs} z-index:-1;`
const PressableLabel = styled.label.attrs<BoxProps>({})`${s.boxProps} ${m.pressable} ${s.flxRow} ${s.aic}
  margin-left:-12px; margin-right:12px; padding:12px;
`

  type GraphicProps = { checked?: boolean, isFocused?: boolean, withOutline?: boolean }

  const checkedStyle = css` background: ${c.blue}; `
  const uncheckedStyle = css` border:1px solid ${p => transparentize(0.7, p.theme.opposite)}; `

  const CheckboxGraphic = styled(Box)<GraphicProps>` width:20px; height:20px; margin-right:12px; ${s.prel} z-index:2;
    background:${p => transparentize(0.8, p.theme.opposite)}; border-radius:4px; ${s.anim}
    
    ${p => p.checked ? checkedStyle : uncheckedStyle}
    ${p => p.isFocused && p.withOutline ? `box-shadow: ${p.theme.focusOutline}; ` : ''}
  `

  const CheckIcon = styled(Icon)<GraphicProps>` color:white; opacity:0; ${s.anim}
    ${p => p.checked ? `opacity:1; ` : ''}
  `
