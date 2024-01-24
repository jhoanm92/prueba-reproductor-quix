package com.reproductor.api.service;

import com.reproductor.api.entity.Cancion;
import com.reproductor.api.model.Generos;

import java.util.List;

public interface CancionService {

    Generos obtenerGeneros();
    List<Cancion> obtenerTodos();
    Cancion guardar (Cancion cancion);

    Cancion actualizar (Cancion cancion);

    Cancion obtenerPorId (Integer id);

    void eliminar (Integer id);
}
