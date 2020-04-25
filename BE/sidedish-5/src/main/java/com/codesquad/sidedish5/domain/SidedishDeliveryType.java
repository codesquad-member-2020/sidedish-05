package com.codesquad.sidedish5.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class SidedishDeliveryType {
    private int deliveryType;

    public SidedishDeliveryType(int deliveryType) {
        this.deliveryType = deliveryType;
    }
}
