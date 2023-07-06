import React from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import './LoginForm.scss'
import Text from '../../atoms/Text/Text'
import { Anchor } from '@mantine/core'
import { useForm } from '@mantine/form'

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const form = useForm({
    initialValues: {
      password: '',
      email: '',
  },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <form
      className="login-form"
      onSubmit={form.onSubmit(() => {
        onSubmit(form.values)
      })}
    >
      <Input
        placeholder={'placeholder'}
        label={'Username'}
        type={'text'}
        {...form.getInputProps('email')}
      />
      <Input
        placeholder={'placeholder'}
        label={'Password'}
        type={'password'}
        {...form.getInputProps('password')}
      />
      <Anchor href={'/forget-password'}>
        <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
          Forget Password
        </Text>
      </Anchor>
      <div className="button-wrapper">
        <Button fullWidth type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
