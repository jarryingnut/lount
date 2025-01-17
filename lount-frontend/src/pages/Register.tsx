import React, {useState} from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { BiUserCircle, BiImageAdd } from 'react-icons/bi'
import {FcLock} from 'react-icons/fc'
import {SiMinutemailer} from 'react-icons/si'

import { REGISTER_USER } from '../queries'
import {useFormik} from 'formik'
import {
	Input,
	Stack,
	InputGroup,
	InputLeftElement,
	Button,
	FormControl,
	Text,
  FormLabel,
  VStack,
  Image,
  useToast
} from '@chakra-ui/react';
import {register, registerVariables} from '../generated/register'


const Register = () => {

    interface Values{
        email: string,
        username: string,
        password: string,
        confirmPassword: string,
        imageUrl: string
    }

  const [errors, setErrors] = useState<Values>()
  const history = useHistory()
  const toast = useToast()

    const [registerUser, { loading }] = useMutation<register, registerVariables>(REGISTER_USER, {
        update: (_, __) => {  history.push('/login') 
        toast({
          title: "Account created.",
          description: "We've created your account for you. Login and start chatting",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      },
        onError: (err: any) => {
          setErrors(err.graphQLErrors[0].extensions.errors)
          toast({
            title: "Bad inputs",
            position: "bottom-right",
            description: "Check your credentials and try again",
            status: "error",
            duration: 3000,
            isClosable: true,
            })
        },
    })

    const formik = useFormik<Values>({
        initialValues: {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        imageUrl: ''
        },
        onSubmit: async ({username, password, email, confirmPassword, imageUrl}, {resetForm}) => {
        
        try {
            await registerUser({variables: {email, username, password, confirmPassword, imageUrl}})
            resetForm()
        } catch (err) {
            console.log({error: err})
        }
        },
    })

     return (
      <VStack spacing="5" p="10" pt="5" margin="20">
        <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3} bg="orange.100"
        w='350px'
        p={5}
        boxShadow='m'
        rounded='lg'>
          					<Image src="LountWithText.png" mx='auto' mt={5} mb={5} width="30%" />

          <FormControl isRequired >
            <InputGroup>
              <InputLeftElement children={<BiUserCircle/>} />
              <Input 
                type='text' name='username' 
                placeholder='username' 
                area-label='username' 
                onChange={formik.handleChange} 
                value={formik.values.username}
                bg='white'
                borderColor={errors?.username ? 'red.400': 'whiteAlpha.200'}
                />
            </InputGroup>
            {errors?.username && <FormLabel color="red.400" fontSize="xs">{errors?.username}</FormLabel>}
          </FormControl>
          <FormControl isRequired>
                <InputGroup>
                    <InputLeftElement children={<SiMinutemailer />} />
                    <Input
                    type='text'
                    name='email'
                    placeholder='Email'
                    aria-label='Email'
                    onChange={formik.handleChange} 
                    value={formik.values.email}
                    bg='white'
                    borderColor={errors?.email ? 'red.400': 'whiteAlpha.200'}
                    />
                </InputGroup>
              {errors?.email && <FormLabel color="red.400" fontSize="xs">{errors?.email}</FormLabel>}
            </FormControl>
          <FormControl isRequired >
            <InputGroup>
              <InputLeftElement children={<FcLock/>} />
                <Input
                  type='password'
                  placeholder='Password'
                  aria-label='Password'
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  bg='white'
                  borderColor={errors?.password ? 'red.400': 'whiteAlpha.200'}
                />
            </InputGroup>
            {errors?.password && <FormLabel color="red.400" fontSize="xs">{errors?.password}</FormLabel>}

          </FormControl>
        <FormControl isRequired>
                <InputGroup>
                    <InputLeftElement children={<FcLock />} />
                    <Input
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    aria-label='confirmPassword'
                    onChange={formik.handleChange} 
                    value={formik.values.confirmPassword}
                    bg='white'
                    borderColor={errors?.confirmPassword ? 'red.400': 'whiteAlpha.200'}
                    />
                </InputGroup>
                {errors?.confirmPassword && <FormLabel color="red.400" fontSize="xs">{errors?.confirmPassword}</FormLabel>}
          </FormControl>
          <FormControl >
                <InputGroup>
                    <InputLeftElement children={<BiImageAdd />} />
                    <Input
                    type='text'
                    name='imageUrl'
                    placeholder='Profile picture URL'
                    aria-label='imageUrl'
                    onChange={formik.handleChange} 
                    value={formik.values.imageUrl }
                    bg='white'
                    />
                </InputGroup>
          </FormControl>
        
          <Button
            type='submit'
            boxShadow='sm'
            _hover={{ boxShadow: 'md' }}
            _active={{ boxShadow: 'lg' }}
            width="100"
            disabled={loading}
            bg="orange.200"
            color="orange.500"
            >
            {loading ? 'loading..' : 'Register'}
          </Button>
          <Text fontSize="sm" textAlign="center" color="teal.500">Created by Jarryingnut 👨‍💻</Text>
        </Stack>
      </form>
      </VStack>
      )
      
}

export default Register
