import React from "react";
import { Flex,  Button, Stack} from "@chakra-ui/react";
import { Input } from "../components/form/input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SigInFormData = {
  email: string
  password: string
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {

  const { register, handleSubmit, formState:{errors}, formState } = useForm<SigInFormData>({
    resolver: yupResolver(SignInFormSchema)
  })

  const handleSigIn: SubmitHandler<SigInFormData> = async (values) => {

    await new Promise(response => setTimeout(response, 2000))

    console.log(values)
  }

  return (
    <Flex 
      w="100vw"
     h="100vh" 
     align="center" 
     justify="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSigIn)}
      >

        <Stack spacing="4">

         <Input 
            type="email"
            name="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
         />
          
          
          <Input 
            type="password"
            name="password"
            label="Password"
            error={errors.password}
            {...register("password")}
          />
        </Stack>  
        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink" 
          size="lg" 
          isLoading={formState.isSubmitting}
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
