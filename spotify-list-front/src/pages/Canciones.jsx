import { Button, Container, Link, Stack, list } from "@chakra-ui/react";
import { useSongs } from "../providers/CancionesProvider";
import SongTable from "../components/tables/SongTable";
import { useEffect } from "react";

function Canciones() {
  const { songs, listSongs } = useSongs();
  useEffect(() => {
    listSongs();
  }, []);
  const songHeaders = [
    "id",
    "titulo",
    "artista",
    "album",
    "año",
    "genero",
    "acciones",
  ];
  return (
    <Stack spacing={4} align="stretch" padding="12px">
      <Container maxW="xxl">
        <Link href="/canciones/crear">
          <Button colorScheme="teal">Crear nueva cancion</Button>
        </Link>
      </Container>
      <SongTable data={songs} tableHeaders={songHeaders} />
    </Stack>
  );
}

export default Canciones;
