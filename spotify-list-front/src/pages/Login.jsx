import {
  Button,
  Card,
  Center,
  Container,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { instance } from "../http/axiosConfig";
import { useAuth } from "../providers/AuthProvider";

function Login() {
  const [loginData, setLoginData] = useState({});
  const { login } = useAuth();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginAction = async () => {
    if (!loginData) {
      alert("Ingresa datos en el formulario de login");
    }

    if (!loginData.username || !loginData.password)
      alert("Usuario y/o contraseña son obligatorios");
    else {
      login(loginData);
    }
  };

  return (
    <Container padding="12px">
      <Card padding="12px">
        <Stack spacing={3}>
          <Text fontSize="xl">Iniciar Sesion</Text>
          <Input
            placeholder="Usuario"
            name="username"
            onChange={handleChange}
          />
          <Input
            placeholder="Contraseña"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <Stack direction="row" flexDir="row-reverse">
            <Button colorScheme="teal" onClick={loginAction}>
              Login
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
}

export default Login;
