import {
  Button,
  Card,
  Container,
  Input,
  Link,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSongs } from "../providers/CancionesProvider";
import { useEffect, useState } from "react";
import { instance } from "../http/axiosConfig";
import { useParams } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function CancionesCrear() {
  const { id } = useParams();
  const [isEditable, setIsEditable] = useState(false);
  const [entity, setEntity] = useState({});
  const { getToken } = useAuth();
  const { genres, song, getGenres, getSong, createSong, updateSong, setSong } =
    useSongs();

  useEffect(() => {
    const loadData = () => {
      getGenres();
      if (id) {
        setIsEditable(!isEditable);
        instance.get(`/cancion/${id}`, {
            headers: {
              Authorization: getToken(),
            },
          }).then(data => setEntity(data.data));
      }      
    };

    loadData();
  }, []);

  const handleChange = (e) => {
    setEntity({
      ...entity,
      [e.target.name]: e.target.value,
    });
  };

  const saveSong = () => {
    createSong(entity);
  };

  const updSong = () => {
    updateSong(entity, id);
  };

  return (
    <Container padding="12px">
      <Card padding="12px">
        <Stack spacing={3}>
          <Text fontSize="xl">Crear nueva Cancion</Text>
          <Input
            placeholder="Titulo"
            value={isEditable ? entity.titulo : ""}
            onChange={handleChange}
            name="titulo"
          />
          <Input
            placeholder="Artista"
            value={isEditable ? entity.artista : ""}
            onChange={handleChange}
            name="artista"
          />
          <Input
            placeholder="Album"
            value={isEditable ? entity.album : ""}
            onChange={handleChange}
            name="album"
          />
          <Select onChange={handleChange} name="genero" value={isEditable ? entity.genero : ""}>
            <option>Selecciona una opcion</option>
            {genres.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Select>
          <Stack direction="row" flexDir="row-reverse">
            <Button
              colorScheme="teal"
              onClick={!isEditable ? saveSong : updSong}
            >
              {!isEditable ? "Crear Cancion" : "Actualizar Cancion"}
            </Button>
            <Link href="/canciones">
              <Button>Cancelar</Button>
            </Link>
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
}

export default CancionesCrear;
