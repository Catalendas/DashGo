import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldErrors } from "react-hook-form";

interface InputProps extends ChakraInputProps {
    name: string
    label?: string
    errors?: FieldErrors
}

export const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps > = ({name, label, errors = null, ...rest}, ref) => {
    return(
        <FormControl isInvalid={!!errors}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput 
              name={name} 
              id={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bdGolor:'gray.900'
              }}
              ref={ref}
              size="lg"
              {...rest}
            />

            {!!errors && (
              <FormErrorMessage>
                {errors?.message}
              </FormErrorMessage>
            )}
          </FormControl>
    )
}

export const Input = forwardRef(InputBase)