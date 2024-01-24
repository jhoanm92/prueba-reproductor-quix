import { createContext, useContext, useMemo, useState } from "react";
import { instance } from "../http/axiosConfig";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const PlayListContext = createContext();

export const PLaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [playlist, setPlaylist] = useState({});
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const getAllPlaylist = () => {
    instance
      .get(`/lista-reproduccion`, {
        headers: {
          Authorization: getToken(),
        },
      })
      .then((data) => setPlaylists(data.data));
  };

  const getPlaylist = async (id) => {
    const data = await instance.get(`/lista-reproduccion/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });

    setPlaylist(data.data);
  };

  const updatePlayList = async (list, id) => {        
    const data = await instance.patch(`/lista-reproduccion`, list, {
      headers: {
        Authorization: getToken(),
      },
    });

    if (data.status == 201) navigate("/lista-reproduccion");
    else {
      alert("No se ha podido actualizar la cancion");
    }
  };

  const deletePlaylist = async (id) => {
    const data = await instance.delete(`/lista-reproduccion/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });

    if (data.status != 204) alert("No se ha podido eliminar la cancion");
    else console.log(data.data);
  };

  const createPlaylist = async (song) => {
    const data = await instance.post(`/lista-reproduccion`, song, {
      headers: {
        Authorization: getToken(),
      },
    });

    if (data.status == 200) navigate("/lista-reproduccion");
    else {
      alert("No se ha podido crear la cancion");
    }
  };

  const values = useMemo(() => ({
    playlist,
    playlists,
    getAllPlaylist,
    getPlaylist,
    updatePlayList,
    deletePlaylist,
    createPlaylist,
  }));

  return (
    <PlayListContext.Provider value={values}>
      {children}
    </PlayListContext.Provider>
  );
};

export const usePlaylist = () => {
  return useContext(PlayListContext);
};
