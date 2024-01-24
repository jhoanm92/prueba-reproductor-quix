package com.reproductor.api.repository;

import com.reproductor.api.entity.ListaReproduccion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListaReproduccionRepository extends JpaRepository<ListaReproduccion, Integer> {
}