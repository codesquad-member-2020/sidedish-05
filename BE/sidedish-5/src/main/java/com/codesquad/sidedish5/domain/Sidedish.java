package com.codesquad.sidedish5.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Sidedish {

    @Id
    private String id;

    private String title;

    private String mainImage;

    private String description;

    private String point;

    private String n_price;

    private String s_price;

    private String deliveryInfo;

    private List<ThumbImage> thumbImages;

    private List<DetailImage> detailImages;

    private Set<SidedishBadge> sidedishBadges;
    private Set<SidedishDeliveryType> sidedishDeliveryType;

    public Sidedish() {}

    public Sidedish(JsonNode dish, JsonNode dishDetail) {
        this.id = dish.get("detail_hash").textValue();
        this.title = dish.get("title").textValue();
        //todo: DTO에서 상세페이지의 메인 이미지에는 썸네일.get(0)해서 반환해주기
        this.mainImage = dish.get("image").textValue();
        this.description = dish.get("description").textValue();
        this.point = dishDetail.get("data").get("point").textValue().replace("원", "");
        this.s_price = existPrice(dish, "s_price");
        this.n_price = existPrice(dish, "n_price");
        this.deliveryInfo = dishDetail.get("data").get("delivery_info").textValue();
        this.thumbImages = getThumbImages(dishDetail.get("data").get("thumb_images"));
        this.detailImages = getDetailImages(dishDetail.get("data").get("detail_section"));
    }

    private List<ThumbImage> getThumbImages (JsonNode thumbImagesArray) {
        List<ThumbImage> thumbImages = new ArrayList<>();
        for (int i = 0; i < thumbImagesArray.size(); i++) {
            thumbImages.add(new ThumbImage(thumbImagesArray.get(i).textValue()));
        }
        return thumbImages;
    }

    private List<DetailImage> getDetailImages (JsonNode detailImagesArray) {
        List<DetailImage> detailImages = new ArrayList<>();
        for (int i = 0; i < detailImagesArray.size(); i++) {
            detailImages.add(new DetailImage(detailImagesArray.get(i).textValue()));
        }
        return detailImages;
    }

    private String existPrice(JsonNode dish, String priceType) {
        if (dish.has(priceType)) {
            return dish.get(priceType).textValue().replace("원", "");
        }
        return "";
    }

    public void setBadge(Set<SidedishBadge> sidedishBadges) {
        this.sidedishBadges = sidedishBadges;
    }

    public void setDeliveryType(Set<SidedishDeliveryType> sidedishDeliveryTypes) {
        this.sidedishDeliveryType = sidedishDeliveryTypes;
    }

}
