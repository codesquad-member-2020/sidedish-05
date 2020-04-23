package com.codesquad.sidedish5.service;

import com.codesquad.sidedish5.domain.Category;
import com.codesquad.sidedish5.domain.Sidedish;
import com.codesquad.sidedish5.repository.CategoryRepository;
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

@Service
public class ApiService {

    private static final Logger log = LoggerFactory.getLogger(ApiService.class);

    @Autowired
    CategoryRepository categoryRepository;

    RestTemplate restTemplate = new RestTemplate();
    ObjectMapper objectMapper = new ObjectMapper();

    private String api(String path, String hash) throws URISyntaxException {
        URI requestUrl = new URI("https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/baminchan/" + path + "/" + hash);
        return restTemplate.getForObject(requestUrl, String.class);
    }

    public void createCategory() throws URISyntaxException, JsonProcessingException {
        String[] categoryList = {"main", "soup", "side"};
        String[][] hashList = {
                {"HBDEF", "HDF73", "HF778", "HFB53", "H077F", "H4665", "H1AA9", "HEDFB" },
                {"H72C3", "HA6EE", "H8CD0", "HE2E9", "HAA47", "H3254", "H26C7", "HFFF9" },
                {"HBBCC", "H1939", "H8EA5", "H602F", "H9F0B", "H0FC6", "HCCFE", "HB9C1" }
        };

        for (int i = 0; i < categoryList.length; i++) {
            Category category = new Category(categoryList[i]);
            createSidedish(hashList[i], categoryList[i], category);
            categoryRepository.save(category);
        }
    }

    private void createSidedish(String[] hashList, String categoryList, Category category) throws URISyntaxException, JsonProcessingException {

        for (int j = 0; j < hashList.length; j++) {
            JsonNode dish = objectMapper.readTree(api(categoryList, hashList[j]));
            JsonNode dishDetail = objectMapper.readTree(api("detail", hashList[j]));

            category.addSidedish(new Sidedish(dish, dishDetail));
        }
    }
}
