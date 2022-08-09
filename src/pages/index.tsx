import React from "react";
import { Flex,  Button, Stack} from "@chakra-ui/react";
import { Input } from "../components/form/input";
import { SubmitHandler, useForm } from "react-hook-form";

type SigInFormData = {
  email: string
  password: string
}

export default function SignIn() {

  const { register, handleSubmit, formState:{errors}, formState } = useForm()

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
            errors={errors.email}
            {...register("email", { required: "Email Address is required" })}
         />
          
          
          <Input 
            type="password"
            name="password"
            label="Password"
            errors={errors.password}
            {...register("password", { required: "Password Address is required" })}
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
