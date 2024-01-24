import {
  Button,
  Card,
  Container,
  Input,
  Link,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { useSongs } from "../providers/CancionesProvider";
import { MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import { instance } from "../http/axiosConfig";
import { useParams } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { usePlaylist } from "../providers/PlayListProvider";
import SelectedSongTable from "../components/tables/SelectedSongTable";

function ListaReproduccionCrear() {
  const [isEditable, setIsEditable] = useState(false);
  const { id } = useParams();
  const [songPlaylist, setSongPlayList] = useState([]);
  const [selectSong, setSelectSong] = useState(null);
  const [selecteObjectSong, setSelectedObjectSong] = useState({});
  const [entity, setEntity] = useState({});
  const { listSongs, songs } = useSongs();
  const [load, setLoad] = useState(true);
  const { createPlaylist, getPlaylist, playlist, updatePlayList } = usePlaylist();
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    const update = async () => {
      if (id) {
        await getPlaylist(id);
        setEntity(playlist);
        setIsEditable(true);
        setSongPlayList(playlist.canciones);
        setLoad(false);
      }
    };
    update();
    listSongs();
  }, [load]);

  const handleChange = (e) => {
    setEntity({
      ...playlist,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectSong = (e) => {
    setSelectSong(e.target.value);
  };

  const handleAddSong = (e) => {
    if (!songPlaylist.some((i) => i.id === selectSong) && selectSong !== "") {
      setSongPlayList([
        ...songPlaylist,
        {
          id: selectSong,
          titulo: songs.find((i) => i.id === Number(selectSong)).titulo,
        },
      ]);
      setSelectSong(0);
    } else alert("esta cancion ya esta agregada");
  };

  const savePlaylist = () => {
    const body = {
      ...playlist,
      canciones: songPlaylist,
    };

    createPlaylist(body);
  };


  const updPlayList = () => {
    const body = {
      ...playlist,
      id,
      canciones: songPlaylist,
    };

    console.log(body);
    updatePlayList(body);
  };

  return (
    <Container padding="12px">
      <Card padding="12px">
        <Stack spacing={3}>
          <Text fontSize="xl">
            {isEditable ? "Actualizar playlist" : "Crear nuevo Playlist"}{" "}
          </Text>
          <Input
            placeholder="Nombre"
            value={isEditable ? entity?.nombre : null}
            onChange={handleChange}
            name="nombre"
          />
          <Input
            placeholder="Descripcion"
            value={isEditable ? entity?.descripcion : null}
            onChange={handleChange}
            name="descripcion"
          />
          <Stack direction="row">
            <Select
              onChange={handleSelectSong}
              name="canciones"
              value={selectSong}
            >
              <option>Selecciona una opcion</option>
              {songs.map((item) => (
                <option value={item.id}>{item.titulo}</option>
              ))}
            </Select>
            <Button onClick={handleAddSong}>
              <MdAdd />
            </Button>
          </Stack>
          <Stack direction="row" flexDir="row-reverse">
            <Button
              colorScheme="teal"
              onClick={!isEditable ? savePlaylist : updPlayList}
              value={songPlaylist}
            >
              {!isEditable ? "Crear Playlist" : "Actualizar Playlist"}
            </Button>
            <Link href="/lista-reproduccion">
              <Button>Cancelar</Button>
            </Link>
          </Stack>
          <SelectedSongTable
            data={songPlaylist}
            song={selecteObjectSong}
            setSongs={setSongPlayList}
            setSelectedSong={setSelectedObjectSong}
          />
        </Stack>
      </Card>
    </Container>
  );
}

export default ListaReproduccionCrear;
