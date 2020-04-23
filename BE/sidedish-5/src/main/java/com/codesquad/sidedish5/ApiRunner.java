package com.codesquad.sidedish5;

import com.codesquad.sidedish5.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ApiRunner implements CommandLineRunner {

    @Autowired
    ApiService apiService;

    @Override
    public void run(String... args) throws Exception {
        apiService.createCategory();
    }
}
