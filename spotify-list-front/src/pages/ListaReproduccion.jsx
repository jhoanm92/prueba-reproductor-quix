import { Button, Container, Link, Stack } from "@chakra-ui/react";
import PlayListTable from "../components/tables/PlayListTable";
import { useEffect } from "react";
import { usePlaylist } from "../providers/PlayListProvider";

function ListaReproduccion() {
  const { getAllPlaylist,playlists } = usePlaylist();
  useEffect(() => {
    getAllPlaylist();
  }, []);

  const headers = [
    "id",
    "nombre",
    "titulo",
    "acciones"    
  ]
  return (
    <Stack spacing={4} align="stretch" padding="12px">
      <Container maxW="xxl">
        <Link href="/lista-reproduccion/crear">
          <Button colorScheme="teal">Crear nueva cancion</Button>
        </Link>
      </Container>
      <PlayListTable data={playlists} headers={headers}/>
    </Stack>
  );
}

export default ListaReproduccion;
