package com.codesquad.sidedish5.service;

import com.codesquad.sidedish5.domain.Category;
import com.codesquad.sidedish5.domain.Sidedish;
import com.codesquad.sidedish5.domain.SidedishBadge;
import com.codesquad.sidedish5.domain.SidedishDeliveryType;
import com.codesquad.sidedish5.repository.BadgeDao;
import com.codesquad.sidedish5.repository.CategoryRepository;
import com.codesquad.sidedish5.repository.DeliveryTypeDao;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashSet;
import java.util.Set;

@Service
public class ApiService {

    private static final Logger log = LoggerFactory.getLogger(ApiService.class);

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private BadgeDao badgeDao;

    @Autowired
    private DeliveryTypeDao deliveryTypeDao;

    RestTemplate restTemplate = new RestTemplate();
    ObjectMapper objectMapper = new ObjectMapper();

    private String api(String path, String hash) throws URISyntaxException {
        URI requestUrl = new URI("https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/baminchan/" + path + "/" + hash);
        return restTemplate.getForObject(requestUrl, String.class);
    }

    public void createCategory() throws URISyntaxException, JsonProcessingException {
        String[] categoryList = {"main", "soup", "side"};
        String[] categoryNames = {"든든한 반찬", "국·찌개", "밑반찬"};
        String[] categoryDescriptions = {"언제 먹어도 든든한 반찬", "김이 모락모락 국, 찌개", "담기만 하면 완성되는 밑반찬"};
        String[][] hashList = {
                {"HBDEF", "HDF73", "HF778", "HFB53", "H077F", "H4665", "H1AA9", "HEDFB" },
                {"H72C3", "HA6EE", "H8CD0", "HE2E9", "HAA47", "H3254", "H26C7", "HFFF9" },
                {"HBBCC", "H1939", "H8EA5", "H602F", "H9F0B", "H0FC6", "HCCFE", "HB9C1" }
        };

        for (int i = 0; i < categoryList.length; i++) {
            Category category = new Category(categoryNames[i], categoryDescriptions[i]);
            createSidedish(hashList[i], categoryList[i], category);
            categoryRepository.save(category);
        }
    }

    private void createSidedish(String[] hashList, String categoryList, Category category) throws URISyntaxException, JsonProcessingException {

        for (int j = 0; j < hashList.length; j++) {
            JsonNode dish = objectMapper.readTree(api(categoryList, hashList[j]));
            JsonNode dishDetail = objectMapper.readTree(api("detail", hashList[j]));
            Sidedish sidedish = new Sidedish(dish, dishDetail);
            if (dish.has("badge")) {
                sidedish.setBadge(createBadge(dish.get("badge")));
            }
            if (dish.has("delivery_type")) {
                sidedish.setDeliveryType(createDeliveryType(dish.get("delivery_type")));
            }

            category.addSidedish(sidedish);
        }
    }

    private Set<SidedishDeliveryType> createDeliveryType(JsonNode deliverTypes) {
        Set<SidedishDeliveryType> deliveryTypeSet = new HashSet<>();
        for (JsonNode deliveryType : deliverTypes) {
            deliveryTypeSet.add(new SidedishDeliveryType(deliveryTypeDao.findIdByName(deliveryType.textValue())));
        }
        return deliveryTypeSet;
    }

    private Set<SidedishBadge> createBadge(JsonNode badges) {
        Set<SidedishBadge> badgeSet = new HashSet<>();
        for (JsonNode badge : badges) {
            badgeSet.add(new SidedishBadge(badgeDao.findIdByName(badge.textValue())));
        }
        return badgeSet;
    }
}
