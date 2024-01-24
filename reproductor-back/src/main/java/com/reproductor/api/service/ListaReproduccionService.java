package com.reproductor.api.service;

import com.reproductor.api.entity.ListaReproduccion;

import java.util.List;

public interface ListaReproduccionService {

    List<ListaReproduccion> obtenerTodos();
    ListaReproduccion guardar (ListaReproduccion listaReproduccion);

    ListaReproduccion actualizar (ListaReproduccion listaReproduccion);

    ListaReproduccion obtenerPorId (Integer id);

    void eliminar (Integer id);
}
