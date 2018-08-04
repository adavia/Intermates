import styled from 'styled-components'
import { object, string } from 'yup'
import isEmpty from 'lodash/isEmpty'
import { Formik, Form as MessageForm, Field } from 'formik'
import { Button } from '../layouts'
import { InputField } from '../layouts/fields'
import { Router } from '../../routes'

const Form = styled(MessageForm)`
  padding: 1rem 1rem 0 1rem;
  border-top: 3px solid #DDD;
  background: #FFF;
`

const MessageNew = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        content: ''
      }}
      validationSchema={
        object().shape({
          content: string().required('Say something!')
      })}
      onSubmit={ async(
        values, 
        { setSubmitting, resetForm }) 
      => {
        onSubmit(values)
        setSubmitting(false)
        resetForm()
      }}
      render={({
        values,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        dirty
      }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            autoComplete="off"
            name="content"
            component={InputField}
            placeholder="Add some content!"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form>
      )}
    />
  )
}

export default MessageNew