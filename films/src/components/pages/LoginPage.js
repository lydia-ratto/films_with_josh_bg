import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Input, Button, Text, Heading, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom'


function Login() {
  const {login} = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const creds = {
      user: {
        email: formData.email,
        password: formData.password,
      }
    }

    await login(creds);
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <Heading>Login</Heading>
      <Flex flexDirection="column" alignItems="center">
        <form onSubmit={handleSubmit}>
          <Flex flexDirection="column" alignItems="center">
            <Text variant="label">Email:</Text>
            <Input
              variant="filled"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Text variant="label">Password:</Text>
            <Input
              variant="filled"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Button
              variant="primaryForm"
              type="submit"
            >
              Login
            </Button>
          </Flex>
        </form>
          <Text
            mt="30px"
          >
            Don't have an account?{' '}
            <Link
              to='/register'
              className='register-link'
            >
                 Register here
            </Link>
          </Text>
      </Flex>
    </div>
  );
};

export default Login;
