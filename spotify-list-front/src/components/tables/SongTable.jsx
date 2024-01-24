import { Button, Link, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { MdCreate, MdDelete } from "react-icons/md";
import { useSongs } from "../../providers/CancionesProvider";

function SongTable({data, tableHeaders}) {

    const {deleteSong, listSongs} = useSongs();
    const handleDelete = (id) => {
        if(confirm(`Desea eliminar el registro: ${id}`)){
            deleteSong(id);
            listSongs();
        }
    }

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {tableHeaders.map((item) => (
              <Th>{item}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr>
              <Td>{item.id}</Td>
              <Td>{item.titulo}</Td>
              <Td>{item.artista}</Td>
              <Td>{item.album}</Td>
              <Td>{item.anno}</Td>
              <Td>{item.genero}</Td>
              <Td>
                <Stack direction="row">
                  <Link href={`/canciones/${item.id}`}>
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
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default SongTable;
