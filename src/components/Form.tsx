import { FC } from 'react'
import { Input as ChakraInput, FormLabel as ChakraFormLabel, HStack } from '@chakra-ui/react'
import { DeepRequired, FieldErrorsImpl, FieldValues, useForm, UseFormRegister } from "react-hook-form";

type InputFormProps = {
  label: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrorsImpl<DeepRequired<FieldValues>>
}

export const InputForm: FC<InputFormProps> = ({ label, register, errors }) => {
  return (
    <>
      <HStack
        paddingBottom="12px">
        <ChakraFormLabel>{label}</ChakraFormLabel>
        <ChakraInput
          {...register(label)}
          maxWidth="50%"
        />
      </HStack>
    </>
  );
}

type FormProps = {
  labels: Array<string>
}

export const Form: FC<FormProps> = ({ labels }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: unknown) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {labels.map((label) => <InputForm label={label} register={register} errors={errors} />)}
      {/* <ChakraInput type="submit" value="確定" /> */}
    </form>
  );
}
