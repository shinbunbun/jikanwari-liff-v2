/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react'
import { Input as ChakraInput, FormLabel as ChakraFormLabel, HStack } from '@chakra-ui/react'
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";

type InputFormProps = {
  label: string
  register: UseFormRegister<FieldValues>
}

export const InputForm: FC<InputFormProps> = ({ label, register }) => (
  <HStack
    paddingBottom="12px">
    <ChakraFormLabel>{label}</ChakraFormLabel>
    <ChakraInput
      {...register(label)}
      maxWidth="50%"
    />
  </HStack>
)

type FormProps = {
  labels: Array<string>
}

export const Form: FC<FormProps> = ({ labels }) => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data));
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      {labels.map((label) => <InputForm label={label} register={register} />)}
      {/* <ChakraInput type="submit" value="確定" /> */}
    </form>
  );
}
