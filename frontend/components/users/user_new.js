import styled from 'styled-components'
import { object, string } from 'yup'
import { Subscribe } from 'unstated'
import moment from 'moment'
import { Router } from '../../routes'
import AuthContainer from '../../containers/auth'
import UserContainer from '../../containers/user'
import { 
	base, 
	Flex, 
	Modal, 
	Fixed, 
	Image, 
	Icon, 
	Text,
	Button
} from '../layouts'
import { Formik, Form, Field } from 'formik'
import { InputField, DateField, InputSelectField } from '../layouts/fields'

const ModalBody = styled(base('div'))`
	margin: 1rem 1rem 3rem 1rem;
`

const ModalClose = styled(base('div'))`
  margin-left: auto;
  padding: 10px;
  cursor: pointer;
`

const genderTypes = [
	{
		type: 'male',
		title: 'Male'
	},
	{
		type: 'female',
		title: 'Female'
	}
]

const UserNew = ({ toggleModal }) => {
	const handleClick = () => {
		toggleModal()
	}

	return (
		<Fixed
			px={3}
      top={0}
      right={0}
      bg="rgba(0, 0, 0, 0.5)"
      bottom={0}
      left={0}>
      <Subscribe to={[AuthContainer, UserContainer]}>
				{(authStore, userStore) => (
		      <Modal width={[1, 2/3]}>
						<Flex width={2/8} bg="#f9f9f9"></Flex>
						<Flex width={6/8} flexDirection="column">
							<ModalClose onClick={handleClick}>
								<Icon fontSize="20px" color="grey" className="fas fa-times" />
							</ModalClose>
							<ModalBody width={["auto", "auto", 2/3]}>
								<Image width={60} src="/static/intermates_nav.png" />
								<Text is="h1" fontSize={25} color="#222" my={3}>Registration</Text>
								<Formik
				          initialValues={{
				          	email: '', 
				          	username: '',
				            password: '',
				            password_confirmation: '',
				            profile: {
											gender: '',
				            	birthday: moment()
				            }
				          }}
				          validationSchema={
				            object().shape({
				              email: string()
									      .email('Invalid email address')
									      .required('Required field!'),
				              username: string()
									      .required('Required field!'),
									    password: string()
									      .required('Required field!')
									      .min(5, 'Must be greater than 5 characters')
    										.max(100, 'Must be less than 100 characters'),
									    password_confirmation: string()
									      .required('Required field!')
									      .test('match', 'Password not matching!', function(value) {
      										return value === this.options.parent.password
    										}),
									    profile: object().shape({
									    	gender: string()
										      .required('Required field!'),
										    birthday: string()
										      .required('Required field!')
										  })
				          })}
				          onSubmit={ async(
				            values, 
				            { setSubmitting }) 
				          => {
				            const response = await userStore.createUser(values, authStore)
										
										setSubmitting(false)
				            if (response.status !== 201) {
				              console.log("Something went wrong")
				              setSubmitting(false)
				            } else {
											toggleModal()
											Router.pushRoute('/')
				            }
				          }}
				          render={({
				            values,
				            isSubmitting,
				            handleSubmit,
				            handleChange,
				            handleBlur,
				            setFieldValue,
				            dirty
				          }) => (
				            <Form onSubmit={handleSubmit}>
				              <Field 
				                name="email"
				                height={["35", "40"]}
				                component={InputField}
				                autoComplete="off"
				                placeholder="Email" 
				              />
				              <Field 
				                name="username"
				                height={["35", "40"]}
				                component={InputField}
				                autoComplete="off"
				                placeholder="Username" 
				              />
				              <Field 
				                name="password"
				                height={["35", "40"]}
				                type="password"
				                autoComplete="off"
				                component={InputField}
				                placeholder="Password" 
				              />
				              <Field 
				                name="password_confirmation"
				                height={["35", "40"]}
				                type="password"
				                autoComplete="off"
				                component={InputField}
				                placeholder="Password Confirmation" 
				              />
				              <Field 
				                name="profile.gender"
				                height={["35", "40"]}
				                component={InputSelectField}
				                placeholder="Select your gender" 
				                options={genderTypes}
				              />
				              <Field
				              	name="profile.birthday"
				              	selected={values.profile.birthday}
				              	autoComplete="off"
				              	component={DateField}
        								onChange={date => setFieldValue('profile.birthday', date)}
    									/>
			                <Button 
			                  children={isSubmitting ? 'loading...' : 'SIGN UP'}
			                  type="submit"
			                  disabled={isSubmitting || !dirty} 
			                />
				            </Form>
				          )}
				        />
							</ModalBody>
						</Flex>
		      </Modal>
		    )}
			</Subscribe>
    </Fixed>
	)
}

export default UserNew