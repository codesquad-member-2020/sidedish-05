package com.codesquad.sidedish5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class Sidedish5Application extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(Sidedish5Application.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(Sidedish5Application.class);
	}
}
