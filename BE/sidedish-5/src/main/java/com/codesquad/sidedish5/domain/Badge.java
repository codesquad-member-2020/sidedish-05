package com.codesquad.sidedish5.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.data.annotation.Id;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Badge {

    @Id
    private int id;

    private String name;

    public Badge(String name) {
        this.name = name;
    }
}
