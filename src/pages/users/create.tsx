import { Box,  Button,  Divider,  Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "../../components/form/input";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
    name: string
    email: string
    password: string
    password_confirmation: string
  }

const CreateUserSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail invalido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No minimo 6 caracteres'),
    password_confirmation:  yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})


export default function CreateUser() {

    const { register, handleSubmit, formState:{errors}, formState} = useForm<CreateUserFormData>({
        resolver: yupResolver(CreateUserSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async(values) => {

        await new Promise(response => setTimeout(response, 2000))

        console.log(values)
    }

    return(
        <Box>
            <Header/>

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box 
                    as="form" 
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" 
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid 
                            minChildWidth="240px" 
                            spacing={["6", "8"]}
                            w="100%"
                        >
                            <Input 
                                name="name" 
                                label="Nome completo"
                                {...register('name')}
                                error={errors.name}
                            />

                            <Input 
                                name="email" 
                                type="email" 
                                label="E-mail"
                                error={errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid 
                            minChildWidth="240px" 
                            spacing={["6", "8"]}
                            w="100%"
                        >
                            <Input 
                                name="password" 
                                type="password" 
                                label="Senha"
                                error={errors.password}
                                {...register('password')}
                            />
                            <Input 
                                name="password_confirmation"
                                type="password" 
                                label="Confirmação da senha"
                                error={errors.password_confirmation}
                                {...register('password_confirmation')}
                            />

                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button> 
                            </Link>
                          <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button> 
                        </HStack>

                    </Flex>
                </Box>
            </Flex>    
        </Box>
    )
}