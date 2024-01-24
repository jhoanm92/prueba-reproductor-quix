import { useState, useMemo, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../http/axiosConfig";
import { useAuth } from "./AuthProvider";

const CancionesContext = createContext();

export const CancionesProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState({});
  const [genres, setGenres] = useState([]);
  const { getToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    listSongs();    
    getGenres();
  }, []);

  const listSongs = async () => {
    const data = await instance.get("/cancion", {
      headers: {
        Authorization: getToken(),
      },
    });

    setSongs(data.data);    
  };

  const getSong = (id) => {
    instance.get(`/cancion/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    }).then(data => setSong(data.data));    
  };

  const getGenres = async () => {
    const data = await instance.get(`/cancion/generos`, {
      headers: {
        Authorization: getToken(),
      },
    });

    setGenres(data.data.genres);    
  };

  const updateSong = async (song, id) => {
    const entity = {
      ...song,
      id      
    }
    const data = await instance.patch(`/cancion`, entity, {
      headers: {
        Authorization: getToken(),
      },
    });

    if (data.status == 201) navigate("/canciones");
    else {
      alert("No se ha podido actualizar la cancion");
    }
  };

  const deleteSong = async (id) => {
    const data = await instance.delete(`/cancion/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });

    if (data.status != 200) alert("No se ha podido eliminar la cancion");
  };

  const createSong = async (song) => {
    const data = await instance.post(`/cancion`, song, {
      headers: {
        Authorization: getToken(),
      },
    });

    if (data.status == 200) navigate("/canciones");
    else {
      alert("No se ha podido crear la cancion");
    }
  };

  const value = useMemo(() => ({
    songs,
    listSongs,
    song,
    getSong,
    genres,
    getGenres,
    updateSong,
    createSong,
    deleteSong,
    setSong
  }));
  return (
    <CancionesContext.Provider value={value}>
      {children}
    </CancionesContext.Provider>
  );
};

export const useSongs = () => {
  return useContext(CancionesContext);
};
