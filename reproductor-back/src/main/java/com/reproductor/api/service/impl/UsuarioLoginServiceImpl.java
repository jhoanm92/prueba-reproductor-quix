package com.reproductor.api.service.impl;

import com.reproductor.api.entity.Usuario;
import com.reproductor.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioLoginServiceImpl implements UserDetailsService {

    @Autowired
    private UsuarioRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = repository.findOneByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("Usuario no existe", username)));

        return User.builder()
                .username(usuario.getUsername())
                .password(usuario.getPassword())
                .authorities(List.of(new SimpleGrantedAuthority("ADMIN")))
                .accountExpired(false)
                .accountLocked(false)
                .build();
    }
}
