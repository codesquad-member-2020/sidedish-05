package com.codesquad.sidedish5.domain;

import org.springframework.data.annotation.Id;

import java.util.List;
import java.util.Set;

public class Sidedish {

    @Id
    private String id;

    private String title;

    private String mainImage;

    private String description;

    private int point;

    private int n_price;

    private int s_price;

    private String deliveryType;

    private String deliveryInfo;

    private List<ThumbImage> thumbImages;

    private List<DetailImage> detailImages;

    private Set<SidedishBadge> sidedishBadges;

    public Sidedish(String title, String mainImage, String description, int point, int n_price, int s_price, String deliveryType, String deliveryInfo, List<ThumbImage> thumbImages, List<DetailImage> detailImages) {
        this.title = title;
        this.mainImage = mainImage;
        this.description = description;
        this.point = point;
        this.n_price = n_price;
        this.s_price = s_price;
        this.deliveryType = deliveryType;
        this.deliveryInfo = deliveryInfo;
        this.thumbImages = thumbImages;
        this.detailImages = detailImages;
    }
}
