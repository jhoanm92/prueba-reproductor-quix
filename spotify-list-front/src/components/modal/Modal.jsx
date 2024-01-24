import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdPanoramaFishEye } from "react-icons/md";

function ModalDisplay({ nombre, canciones }) {
  const { isOpen, onOpen, onClose } = useDisclosure();  
  return (
    <>
      <Button onClick={onOpen} size="sm">
        <MdPanoramaFishEye />
      </Button>

      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{nombre}</ModalHeader>
          <ModalBody>
            <Stack spacing={3}>
              {canciones.map((item) => (
                <Text>{`${item.titulo} - ${item.artista}`}</Text>
              ))}
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalDisplay;
