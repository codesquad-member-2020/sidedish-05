package com.codesquad.sidedish5.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;


public class CategoryDto {

    @JsonProperty("category_id")
    private int categoryId;

    @JsonProperty("category_name")
    private String categoryName;

    @JsonProperty("category_description")
    private String categoryDescription;

    @JsonProperty("sidedish")
    private List<Object> sidedish;

    public CategoryDto (Builder builder) {
        this.categoryId = builder.categoryId;
        this.categoryName = builder.categoryName;
        this.categoryDescription = builder.categoryDescription;
    }

    public static class Builder {
        private int categoryId;
        private String categoryName;
        private String categoryDescription;

        public Builder(int categoryId) {
            this.categoryId = categoryId;
        }

        public Builder categoryName(String categoryName) {
            this.categoryName = categoryName;
            return this;
        }

        public Builder categoryDescription(String categoryDescription) {
            this.categoryDescription = categoryDescription;
            return this;
        }

        public CategoryDto build() {
            return new CategoryDto(this);
        }
    }

    public void setSidedish(List<Object> sidedish) {
        this.sidedish = sidedish;
    }
}
