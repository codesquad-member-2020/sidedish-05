package com.codesquad.sidedish5.dto;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class OverviewDto {

    @JsonProperty("sidedish_id")
    private final String sidedishId;

    @JsonProperty("main_image")
    private final String mainImage;

    @JsonProperty("delivery_type")
    private final List<String> deliveryType;

    private final String title;

    private final String description;

    private final String alt;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private final String n_price;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private final String s_price;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private final List<String> badge;

    public OverviewDto(Builder builder) {
        sidedishId = builder.sidedishId;
        title = builder.title;
        mainImage = builder.mainImage;
        description = builder.description;
        n_price = builder.n_price;
        s_price = builder.s_price;
        alt = builder.alt;
        deliveryType = builder.deliveryType;
        badge = builder.badge;
    }

    public static class Builder {
        private String sidedishId;
        private String title;
        private String description;
        private String mainImage;
        private String alt;
        private String n_price;
        private String s_price;
        private List<String> deliveryType = new ArrayList<>();
        private List<String> badge = new ArrayList<>();

        public Builder(String sidedishId) {
            this.sidedishId = sidedishId;
        }

        public Builder title(String title) {
            this.title = title;
            return this;
        }

        public Builder mainImage(String mainImage) {
            this.mainImage = mainImage;
            return this;
        }

        public Builder description(String description) {
            this.description = description;
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

        public Builder alt(String alt) {
            this.alt = alt;
            return this;
        }

        public Builder deliveryType(List<String> deliveryType) {
            this.deliveryType = deliveryType;
            return this;
        }

        public Builder badge(List<String> badge) {
            this.badge = badge;
            return this;
        }

        public OverviewDto build() {
            return new OverviewDto(this);
        }
    }
}
