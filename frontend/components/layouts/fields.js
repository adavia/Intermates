import styled from 'styled-components'
import React from 'react'
import { getIn } from 'formik'
import moment from 'moment'
import { InputWrapper, inputStyles, Input, InputSelect, InputError } from './'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from './select'
import TextEditor from './editor'

const DateSelect = styled(DatePicker)`
  ${inputStyles}
`

export const InputField = ({
  field: { name, ...field },
  form: { touched, errors },
  ...props
}) => {
  const error = getIn(errors, name)
  const touch = getIn(touched, name)
 
  return (
    <InputWrapper>
      <Input 
        error={(touch && error) && error} 
        name={name} 
        {...field} 
        {...props} 
      />
      {(touch && error) && <InputError>{error}</InputError>}
    </InputWrapper>
  )
}

export const InputSelectField = ({
  field: { name, ...field },
  form: { touched, errors },
  ...props
}) => {
  const error = getIn(errors, name)
  const touch = getIn(touched, name)
  
  return (
    <InputWrapper>
      <InputSelect 
        error={(touch && error) && error} 
        name={name} 
        value={field.value}
        {...field} 
        {...props}>
        <option value="">{props.placeholder}</option>
        {props.options.map(option => 
          <option key={option.type} value={option.type}>{option.title}</option>
        )}
      </InputSelect>
      {(touch && error) && <InputError>{error}</InputError>}
    </InputWrapper>
  )
}

export const SelectField = ({
  field: { name, ...field },
  form: { touched, errors },
  ...props
}) => {
  const error = getIn(errors, name)
  const touch = getIn(touched, name)
  
  return (
    <InputWrapper>
      <Select 
        error={!!(touch && error)} 
        name={name} 
        {...field} 
        {...props} 
      />
      {(touch && error) && <InputError>{error}</InputError>}
    </InputWrapper>
  )
}

export const EditorField = ({
  field: { name, ...field },
  form: { touched, errors },
  ...props
}) => {
  const error = getIn(errors, name)
  const touch = getIn(touched, name)
  
  return (
    <InputWrapper>
      <TextEditor 
        error={!!(touch && error)} 
        name={name} 
        {...field} 
        {...props} 
      />
      {(touch && error) && <InputError>{error}</InputError>}
    </InputWrapper>
  )
}

export const DateField = ({
  field: { name, ...field },
  form: { touched, errors },
  ...props
}) => {
  const error = getIn(errors, name)
  const touch = getIn(touched, name)
  
  return (
    <InputWrapper>
      <DateSelect
        error={!!(touch && error)} 
        name={name} 
        onChange={field.onChange}
        onBlur={field.onBlur}
        {...props} 
      />
      {(touch && error) && <InputError>{error}</InputError>}
    </InputWrapper>
  )
}