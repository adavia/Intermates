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

const TopicNew = () => {
  const contentState = {
    entityMap: {},
    blocks: [
      {
        text: '',
        key: 'editor',
        type: 'unstyled',
        entityRanges: []
      },
    ]
  }

  return (
    <Subscribe to={[TopicContainer, CategoryContainer]}>
      {({ createTopic }, { state: { categories }}) => (
        <Formik
          initialValues={{
            categories: [],
            content: EditorState.createWithContent(convertFromRaw(contentState))
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
            
            const response = await createTopic(topic)
            
            if (response.status !== 201) {
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
                children={isSubmitting ? 'loading...' : 'CREATE NEW TOPIC'}
                type="submit"
                disabled={isSubmitting || !dirty || !isEmpty(errors)} 
              />
            </Form>
          )}
        />
      )}
    </Subscribe>
  )
}

export default TopicNew