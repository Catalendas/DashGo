import { Box, Text, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { Header } from "../../components/header";
import { Pagination } from "../../components/pagination";
import { Sidebar } from "../../components/sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUser";

export default function UserList() {

    const [page, setPage] = useState(1)

    const {data, isLoading, isFetching, error} = useUsers(page)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
        <Box>
            <Header/>

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            { !isLoading && isFetching && <Spinner color="gray.500" ml="4" size="sm" fontSize="20" />}
                            </Heading>

                        <Link href="/users/create" passHref>         
                            <Button as="a" size="sm" fontSize="20"  colorScheme="pink" leftIcon={<Icon as={RiAddLine} />}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner/>
                        </Flex>
                    ) : error ? (
                        <Flex>
                            <Text>
                                Erro ao carregar os dados dos usuarios
                            </Text>
                        </Flex>
                    ) : (
                        <>
                                <Table colorScheme="whiteAlpha">
                                    <Thead>
                                        <Tr>
                                            <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                                <Checkbox colorScheme="pink" />
                                            </Th>
                                            <Th>Usuário</Th>
                                            {isWideVersion && <Th>Data de cadastro</Th> }
                                            <Th width="8"></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {data.users.map(user => (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">{user.name}</Text>
                                                        <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion && <Td>{user.createdAt}</Td> }
                                                {isWideVersion && <Td>
                                                    <Button as="a" size="sm" fontSize="16" colorScheme="purple" leftIcon={<Icon as={RiPencilLine}/>}>
                                                        Editar
                                                    </Button>
                                                </Td>}
                                            </Tr>
                                        ))}
                                        
                                    </Tbody>
                                </Table>

                            <Pagination 
                                totalCountOfRegisters={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                            />
                        </>
                    ) }
                </Box>
            </Flex>    
        </Box>
    )
}