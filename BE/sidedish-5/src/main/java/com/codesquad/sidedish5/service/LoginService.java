package com.codesquad.sidedish5.service;

import com.codesquad.sidedish5.domain.GithubToken;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

public class LoginService {

    private static final Logger log = LoggerFactory.getLogger(LoginService.class);
    private String url = "https://github.com/login/oauth/access_token";
    private String clientId = "1b7982028f6ef8e3a91a";
    private String clientSecret = "f8105f27f69964629df83c7c6151cb1c29091380";

    public GithubToken getAccessToken(String code) throws JsonProcessingException {
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        Map<String, String> header = new HashMap<>();
        header.put("Accept", "application/json");
        headers.setAll(header);

        MultiValueMap<String, String> requestPayloads = new LinkedMultiValueMap<>();
        Map requestPayload = new HashMap<String, String>();
        requestPayload.put("client_id", clientId);
        requestPayload.put("client_secret", clientSecret);
        requestPayload.put("code", code);
        requestPayloads.setAll(requestPayload);

        HttpEntity<?> request = new HttpEntity<>(requestPayloads, headers);
        ResponseEntity<?> response = new RestTemplate().postForEntity(url, request, GithubToken.class);
        return (GithubToken) response.getBody();
    }
}
