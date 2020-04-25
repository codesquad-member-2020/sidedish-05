package com.codesquad.sidedish5.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.data.annotation.Id;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class DetailImage {

    @Id
    private int id;

    private String imageUrl;

    public DetailImage(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
