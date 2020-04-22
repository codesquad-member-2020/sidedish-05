package com.codesquad.sidedish5.domain;

import org.springframework.data.annotation.Id;

public class DetailImage {

    @Id
    private int id;

    private String imageUrl;

    public DetailImage(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
