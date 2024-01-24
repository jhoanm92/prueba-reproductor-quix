package com.reproductor.api.controller;

import com.reproductor.api.entity.ListaReproduccion;
import com.reproductor.api.service.ListaReproduccionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lista-reproduccion")
public class ListaReproduccionController {

    private static final Logger log = LoggerFactory.getLogger(CancionController.class);

    @Autowired
    private ListaReproduccionService service;

    @GetMapping()
    public ResponseEntity<List<ListaReproduccion>> obtenerTodos() {
        log.info("REST - ObtenerTodos");
        return ResponseEntity.ok(service.obtenerTodos());
    }

    @PostMapping()
    public ResponseEntity<ListaReproduccion> guardar(@RequestBody ListaReproduccion listaReproduccion) {
        log.info("REST - Guardar : {}", listaReproduccion);
        return ResponseEntity.ok(service.guardar(listaReproduccion));
    }

    @PatchMapping
    public ResponseEntity<ListaReproduccion> actualizar(@RequestBody ListaReproduccion listaReproduccion) {
        log.info("REST - Actualizar : {}", listaReproduccion);
        return new ResponseEntity<>(service.actualizar(listaReproduccion), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ListaReproduccion> obtenerPorId(@PathVariable("id") Integer id) {
        log.info("REST - ObtenerPorId : {}", id);
        return ResponseEntity.ok(service.obtenerPorId(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity eliminar(@PathVariable("id") Integer id) {
        log.info("REST - Eliminar: {}", id);
        service.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
