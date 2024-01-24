package com.reproductor.api.exception;

public class ModeloNotFoundException extends RuntimeException{
    public ModeloNotFoundException(String mensaje){
        super(mensaje);
    }
}