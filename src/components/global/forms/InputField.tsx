import * as React from 'react'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

import Field from 'components/global/forms/Field'
import Icon from 'components/global/Icon'

interface Props extends BoxProps {
  name: string,
  type: string,
  handleBlur?: React.FocusEventHandler<any>,
  handleFocus?: React.FocusEventHandler<any>,
  component?: any,
  handleChange: React.FormEventHandler<any>,
  label?: string,
  placeholder?: string,
  disabled?: boolean,
  touched?: any,
  errors?: any,
  iconName?:  string,
  className?: string,
  style?: any,
  inputClassName?: string,
  value?: any,
  required?: boolean,
  autoComplete?: string
  innerRef?: any,
  autoFocus?: boolean,
}

const InputField: React.SFC<Props> = (props: Props) => {
  const { name, placeholder, innerRef, handleChange, handleBlur, handleFocus, touched, iconName, errors, 
    className, style, inputClassName, ...rest } = props

  const iconComponent = iconName ? <InputIcon><Icon name={iconName} size={16} color={c.black50} /></InputIcon> : null

  return(
    <Field name={name} touched={touched} errors={errors} className={className} style={style} {...rest}>
      <InputWrapper>
        {iconComponent}
        <StyledInput
          id={name}
          ref={innerRef}
          name={name}
          placeholder={placeholder}
          hasIcon={iconName ? true : false}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`input ${inputClassName ? inputClassName : ''}`}
          {...rest}
        />
      </InputWrapper>
    </Field>
  )
}

export default InputField

type InputProps = { hasIcon?: boolean }

const InputWrapper = styled.div` ${s.prel};`
  const StyledInput = styled.input.attrs<InputProps>({})`
    width:100%; ${m.input}; ${m.t16} ${p => p.hasIcon ? 'padding-left:40px;' : ''}
  `
  const InputIcon = styled.div` ${s.pabs} left:12px; top:50%; margin-top:-7px; pointer-events:none; `
