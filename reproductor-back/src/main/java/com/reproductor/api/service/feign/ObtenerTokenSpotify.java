package com.reproductor.api.service.feign;

import com.reproductor.api.dto.LoginSpotifyDto;
import com.reproductor.api.model.Token;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "token",
        url ="https://accounts.spotify.com")
public interface ObtenerTokenSpotify {

    @PostMapping(value = "/api/token", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    Token obtenerToken(@RequestBody LoginSpotifyDto loginSpotify);
}
