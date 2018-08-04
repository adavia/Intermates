import styled from 'styled-components'
import { Subscribe } from 'unstated'
import { mixed, object, array } from 'yup'
import isEmpty from 'lodash/isEmpty'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import { Formik, Form as TopicForm, Field } from 'formik'
import { Button } from '../layouts'
import { SelectField, EditorField } from '../layouts/fields'
import { Router } from '../../routes'
import TopicContainer from '../../containers/topic'
import CategoryContainer from '../../containers/category'

const Form = styled(TopicForm)`
  background-color: #FFF;
  padding: 1rem;
  border: 1px solid #DDD;
  border-radius: 3px;
`

const TopicEdit = ({ query }) => {
  const formatContent = (topic) => {
    return convertFromRaw(JSON.parse(topic.content))
  }

  return (
    <Subscribe to={[TopicContainer, CategoryContainer]}>
      {({ state: { selectedTopic }, updateTopic }, { state: { categories }}) => (
        <Formik
          initialValues={{
            categories: selectedTopic.categories,
            content: EditorState.createWithContent(formatContent(selectedTopic))
          }}
          validationSchema={
            object().shape({
              categories: array().min(1, 'Pick at least 1 category'),
              content: mixed().test({
                name: 'min',
                message: 'Add some content!',
                test: value => value.getCurrentContent()
                  .getPlainText().trim().length >= 6
              })
          })}
          onSubmit={ async (
            values, 
            { setSubmitting }) 
          => {
            const contentState = values.content.getCurrentContent()
            const content = JSON.stringify(convertToRaw(contentState))
            const categories = values.categories.map(item => ({ category_id: item.id }))
            const topic = {
              topics_categories: categories,
              content: content
            }
            
            const resp = await updateTopic(topic, query.id)

            if (resp.status !== 200) {
              console.log("Something went wrong")
              setSubmitting(false)
            } else {
              Router.pushRoute('index')
            }
          }}
          render={({
            values,
            isSubmitting,
            handleSubmit,
            handleBlur,
            setFieldValue,
            setFieldTouched,
            errors,
            dirty
          }) => (
            <Form onSubmit={handleSubmit}>
              <Field 
                name="categories"
                component={SelectField}
                multiple
                labelKey="title"
                placeholder="Select some categories..." 
                options={categories}
                onSelect={setFieldValue}
                onBlur={handleBlur}
              />
              <Field
                name="content"
                component={EditorField}
                placeholder="Add some content for this topic!"
                editorState={values.content}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              />
              <Button 
                children={isSubmitting ? 'loading...' : 'EDIT TOPIC'}
                type="submit"
                disabled={isSubmitting || !isEmpty(errors)} 
              />
            </Form>
          )}
        />
      )}
    </Subscribe>
  )
}

export default TopicEdit