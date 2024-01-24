package com.reproductor.api.service.feign;

import com.reproductor.api.model.Generos;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "genders",
        url ="https://api.spotify.com")
public interface ObtenerGeneros {

    @GetMapping("/v1/artists/0TnOYISbd1XYRBk9myaseg")
    Generos obtenerGeneros(@RequestHeader("Authorization") String token);
}
