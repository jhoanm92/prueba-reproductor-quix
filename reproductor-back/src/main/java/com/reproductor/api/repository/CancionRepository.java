package com.reproductor.api.repository;

import com.reproductor.api.entity.Cancion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CancionRepository extends JpaRepository<Cancion, Integer> {
}