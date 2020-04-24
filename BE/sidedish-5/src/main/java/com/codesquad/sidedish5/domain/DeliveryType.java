package com.codesquad.sidedish5.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.data.annotation.Id;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class DeliveryType {

    @Id
    private int id;

    private String deliveryType;

    public DeliveryType(String deliveryType) {
        this.deliveryType = deliveryType;
    }
}
