import { Field as FormikField } from 'formik'
// Wraps any object around an input field or
import * as React from 'react'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

import InputError from 'components/global/forms/InputError'

interface Props extends BoxProps {
  name: string,
  children: any,
  label?: string,
  touched?: any,
  errors?: any,
  className?: string,
  style?: any,
  dirty?: boolean,
}

const Field: React.SFC<Props> = (props: Props) => {
  const { children, label, name, dirty, touched, errors, ...rest } = props
  const hasError = ( touched && errors && touched[name] && errors[name]) ? true : false
  
  const childrenWithProps = React.Children.map(children, (child: any) =>
    child == null ? null : 
    React.cloneElement(child, {
      id: name,
      className: `${child && child.props.className ? child.props.className : ''} ${ hasError ? 'has-error' : ''}`,
    }))

  return (
    <Wrapper hasError={hasError} {...rest} >
      { label ? <Label htmlFor={name}>{label}</Label> : null }
      { childrenWithProps }
      { errors && hasError ? <InputError error={errors[name]} /> : null }
    </Wrapper>
  )
}

export default Field


const Wrapper = styled(Column).attrs<{ hasError: boolean }>({ mb: 24 })` width:100%; position:relative;
  .input{ ${p => p.hasError ? `box-shadow: inset 0 0 0 2px ${c.red} !important;` : '' } }
`

  const Label = styled.label` display:block; ${m.t14} padding-bottom:8px; opacity:0.5; ${s.anchor} `
