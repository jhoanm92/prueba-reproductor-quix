import { Box, Button, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import { useAuth } from "../../providers/AuthProvider";

function Navbar() {
  const { isLogged, logout } = useAuth();
  
  const handleLogOut = () => {
    logout();
  }

  return (
    <Flex p={4} bg="teal.500" align="center">      
      <Spacer />
      {isLogged && (
        <Box>          
          <Link href="/canciones" color="white" mr={4}>
            Canciones
          </Link>  
          <Link href="/lista-reproduccion" color="white" mr={4}>
            Lista de reproduccion
          </Link>          
          <Button ml={4} onClick={handleLogOut}>Cerrar Sesion</Button>
        </Box>        
      ) }
    </Flex>
  );
}

export default Navbar;
