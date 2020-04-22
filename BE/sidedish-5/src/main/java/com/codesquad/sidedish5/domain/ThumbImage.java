package com.codesquad.sidedish5.domain;

import org.springframework.data.annotation.Id;

public class ThumbImage {

    @Id
    private int id;

    private String imageUrl;

    public ThumbImage(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
