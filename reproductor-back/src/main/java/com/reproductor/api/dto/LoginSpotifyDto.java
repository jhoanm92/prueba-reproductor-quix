package com.reproductor.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginSpotifyDto {

    private String grant_type;
    private String client_id;
    private String client_secret;

}
