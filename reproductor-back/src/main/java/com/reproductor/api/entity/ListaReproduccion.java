package com.reproductor.api.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "lista_reproducciones")
public class ListaReproduccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;

    private String descripcion;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "lista_reproduccion_cancion",
            joinColumns = @JoinColumn(name = "id_lista_reproduccion_fk", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "id_cancion_fk", referencedColumnName = "id"))
    List<Cancion> canciones;
}