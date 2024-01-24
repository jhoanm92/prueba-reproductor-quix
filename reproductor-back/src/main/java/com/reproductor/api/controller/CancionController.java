package com.reproductor.api.controller;

import com.reproductor.api.entity.Cancion;
import com.reproductor.api.model.Generos;
import com.reproductor.api.service.CancionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cancion")
public class CancionController {

    private static final Logger log = LoggerFactory.getLogger(CancionController.class);

    @Autowired
    private CancionService service;

    @GetMapping("/generos")
    public ResponseEntity<Generos> obtenerGeneros() {
        log.info("REST - ObtenerGeneros");
        return ResponseEntity.ok(service.obtenerGeneros());
    }

    @GetMapping()
    public ResponseEntity<List<Cancion>> obtenerTodos() {
        log.info("REST - ObtenerTodos");
        return ResponseEntity.ok(service.obtenerTodos());
    }

    @PostMapping()
    public ResponseEntity<Cancion> guardar(@RequestBody Cancion cancion) {
        log.info("REST - Guardar : {}", cancion);
        return ResponseEntity.ok(service.guardar(cancion));
    }

    @PatchMapping
    public ResponseEntity<Cancion> actualizar(@RequestBody Cancion cancion) {
        log.info("REST - Actualizar : {}", cancion);
        return new ResponseEntity<>(service.actualizar(cancion), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cancion> obtenerPorId(@PathVariable("id") Integer id) {
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
