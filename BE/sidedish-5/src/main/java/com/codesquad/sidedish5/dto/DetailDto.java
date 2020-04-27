package com.codesquad.sidedish5.dto;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class DetailDto {
    @JsonProperty("sidedish_id")
    private final String sidedishId;

    @JsonProperty("main_Image")
    private final String mainImage;

    @JsonProperty("thumb_image")
    private final List<String> thumbImage;

    @JsonProperty("detail_section")
    private List<String> detailSection;

    @JsonProperty("delivery_info")
    private final String deliveryInfo;

    @JsonProperty("delivery_fee")
    private final String deliveryFee;

    private final String description;

    private final String title;

    private final String point;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private final String n_price;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private final String s_price;

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
        private String sidedishId;
        private String title;
        private String description;
        private String mainImage;
        private List<String> thumbImage = new ArrayList<>();
        private String point;
        private String deliveryInfo;
        private String deliveryFee;
        private String n_price;
        private String s_price;
        private List<String> detailSection = new ArrayList<>();

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
