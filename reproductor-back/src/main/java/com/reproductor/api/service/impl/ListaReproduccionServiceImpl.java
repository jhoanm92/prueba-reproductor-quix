package com.reproductor.api.service.impl;

import com.reproductor.api.entity.ListaReproduccion;
import com.reproductor.api.exception.ModeloNotFoundException;
import com.reproductor.api.repository.ListaReproduccionRepository;
import com.reproductor.api.service.ListaReproduccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListaReproduccionServiceImpl implements ListaReproduccionService {

    @Autowired
    private ListaReproduccionRepository repository;

    @Override
    public List<ListaReproduccion> obtenerTodos(){
        return repository.findAll();
    }

    @Override
    public ListaReproduccion guardar(ListaReproduccion listaReproduccion) {
        return repository.save(listaReproduccion);
    }

    @Override
    public ListaReproduccion actualizar(ListaReproduccion listaReproduccion) {
        this.obtenerPorId(listaReproduccion.getId());
        return repository.save(listaReproduccion);
    }

    @Override
    public ListaReproduccion obtenerPorId(Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> new ModeloNotFoundException("ID NO ENCONTRADO" + id));
    }

    @Override
    public void eliminar(Integer id) {
        this.obtenerPorId(id);
        repository.deleteById(id);
    }
}
