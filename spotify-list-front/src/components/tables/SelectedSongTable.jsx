import { Button, Card, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

function SelectedSongTable({ data, setSongs, song, setSelectedSong }) {
  const [songSelected, setSongSelected] = useState([]);
  useEffect(() => {
    setSongSelected([...songSelected, song]);        
  }, [song]);

  const handleDeleteSong = (id) => {    
    setSongs(data.filter((i) => Number(i.id) !== Number(id)));
  };

  return (

    <div>
      {data?.map((item) => (
        <Stack>
          <Card padding={"12px"}>
            <Stack direction="row" justifyContent="space-between">
              <Text fontWeight="600">{item.id + " - " + item.titulo}</Text>
              <Button
                ml={4}
                colorScheme="red"
                size="sm"
                onClick={() => handleDeleteSong(item.id)}
              >
                <MdDelete />
              </Button>
            </Stack>
          </Card>
        </Stack>
      ))}
    </div>
  );
}

export default SelectedSongTable;
