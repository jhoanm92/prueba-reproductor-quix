package com.reproductor.api.service.impl;

import com.reproductor.api.entity.Usuario;
import com.reproductor.api.repository.UsuarioRepository;
import com.reproductor.api.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private BCryptPasswordEncoder bcrypt;

    public Usuario registrarEncriptado(Usuario usuario){
        usuario.setPassword(bcrypt.encode(usuario.getPassword()));
        return repository.save(usuario);
    }
}
