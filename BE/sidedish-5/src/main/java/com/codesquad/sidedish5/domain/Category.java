package com.codesquad.sidedish5.domain;

import org.springframework.data.annotation.Id;

import java.util.HashSet;
import java.util.Set;

public class Category {

    @Id
    private int id;

    private String name;

    private Set<Sidedish> sidedishes = new HashSet<>();

    public Category(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public void addSidedish(Sidedish sidedish) {
        sidedishes.add(sidedish);
    }
}
