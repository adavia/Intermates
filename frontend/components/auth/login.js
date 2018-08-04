import styled from 'styled-components'
import { Subscribe } from 'unstated'
import { Router } from '../../routes'
import AuthContainer from '../../containers/auth'
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
import { InputField } from '../layouts/fields'

const ModalBody = styled(base('div'))`
	margin: 1rem 1rem 3rem 1rem;
`

const ModalClose = styled(base('div'))`
  margin-left: auto;
  padding: 10px;
  cursor: pointer;
`

const Login = ({ toggleModal, forwardRoute }) => {
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
      <Subscribe to={[AuthContainer]}>
				{(authStore) => (
		      <Modal width={[1, 2/3]}>
						<Flex width={2/8} bg="#f9f9f9"></Flex>
						<Flex width={6/8} flexDirection="column">
							<ModalClose onClick={handleClick}>
								<Icon fontSize="20px" color="grey" className="fas fa-times" />
							</ModalClose>
							<ModalBody width={["auto", "auto", 2/3]}>
								<Image width={60} src="/static/intermates_nav.png" />
								<Text is="h1" fontSize={25} color="#222" my={3}>Sign In</Text>
								<Formik
				          initialValues={{
				            email: '', 
				            password: ''
				          }}
				          onSubmit={ async (
				            values, 
				            { setSubmitting }) 
				          => {
				            const response = await authStore.login(values)

				            if (response.status !== 200) {
				              console.log("Something went wrong")
				              setSubmitting(false)
				            } else {
				            	if (forwardRoute) {
				            		toggleModal()
				            		Router.pushRoute(forwardRoute)
				            	} else {
												toggleModal()
												Router.pushRoute('/')
				            	}
				            }
				          }}
				          render={({
				            values,
				            isSubmitting,
				            handleSubmit,
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
				                name="password"
				                height={["35", "40"]}
				                type="password"
				                autoComplete="off"
				                component={InputField}
				                placeholder="Password" 
				              />
			                <Button 
			                  children={isSubmitting ? 'loading...' : 'SIGN IN'}
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

export default Login