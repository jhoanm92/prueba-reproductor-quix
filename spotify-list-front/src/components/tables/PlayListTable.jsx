import {
  Button,
  Link,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { MdCreate, MdDelete } from "react-icons/md";
import ModalDisplay from "../modal/Modal";
import { usePlaylist } from "../../providers/PlayListProvider";

function PlayListTable({ data, headers }) {
  const { deletePlaylist } = usePlaylist();

  const handleDelete = (id) => {
    if (confirm("Desea eliminar el registro: + " + id)) deletePlaylist(id);
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {headers.map((item) => (
              <Th>{item}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr>
              <Td>{item.id}</Td>
              <Td>{item.nombre}</Td>
              <Td>{item.descripcion}</Td>
              <Td>
                <Stack direction="row">
                  <Link href={`/lista-reproduccion/${item.id}`}>
                    <Button size="sm">
                      <MdCreate />
                    </Button>
                  </Link>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MdDelete />
                  </Button>
                  <ModalDisplay
                    nombre={item.nombre}
                    canciones={item.canciones}
                  />
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default PlayListTable;
