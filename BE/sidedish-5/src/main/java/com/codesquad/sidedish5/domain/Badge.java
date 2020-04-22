package com.codesquad.sidedish5.domain;

import org.springframework.data.annotation.Id;

public class Badge {

    @Id
    private int id;

    private String name;

    public Badge(String name) {
        this.name = name;
    }
}
