package com.codesquad.sidedish5.dto;

import java.util.List;

public class DetailDto {

    private final String sidedishId;
    private final String title;
    private final String description;
    private final String mainImage;
    private final String point;
    private final String deliveryInfo;
    private final String deliveryFee;
    private final String n_price;
    private final String s_price;
    private List<String> thumbImage;
    private List<String> detailSection;

    public DetailDto(Builder builder) {
        sidedishId = builder.sidedishId;
        title = builder.title;
        description = builder.description;
        mainImage = builder.mainImage;
        thumbImage = builder.thumbImage;
        point = builder.point;
        deliveryInfo = builder.deliveryInfo;
        deliveryFee = builder.deliveryFee;
        n_price = builder.n_price;
        s_price = builder.s_price;
        detailSection = builder.detailSection;
    }

    public static class Builder {
        private final String sidedishId;
        private String title;
        private String description;
        private String mainImage;
        private List<String> thumbImage;
        private String point;
        private String deliveryInfo;
        private String deliveryFee;
        private String n_price;
        private String s_price;
        private List<String> detailSection;

        public Builder(String sidedishId) {
            this.sidedishId = sidedishId;
        }

        public Builder title(String title) {
            this.title = title;
            return this;
        }

        public Builder description(String description) {
            this.description = description;
            return this;
        }

        public Builder mainImage(String mainImage) {
            this.mainImage = mainImage;
            return this;
        }

        public Builder thumbImage(List<String> thumbImage) {
            this.thumbImage = thumbImage;
            return this;
        }

        public Builder point(String point) {
            this.point = point;
            return this;
        }

        public Builder deliveryInfo(String deliveryInfo) {
            this.deliveryInfo = deliveryInfo;
            return this;
        }

        public Builder deliveryFee(String deliveryFee) {
            this.deliveryFee = deliveryFee;
            return this;
        }

        public Builder n_price(String n_price) {
            this.n_price = n_price;
            return this;
        }

        public Builder s_price(String s_price) {
            this.s_price = s_price;
            return this;
        }

        public Builder detailSection(List<String> detailSection) {
            this.detailSection = detailSection;
            return this;
        }

        public DetailDto build() {
            return new DetailDto(this);
        }
    }
}
