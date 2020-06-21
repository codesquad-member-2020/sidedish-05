package com.codesquad.sidedish5.controller;

import com.codesquad.sidedish5.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;
import java.io.IOException;

@RestController
public class LoginController {
    private static final Logger log = LoggerFactory.getLogger(LoginController.class);

    @GetMapping("/githublogin")
    public ResponseEntity<String> githubLogin(@PathParam("code") String code, HttpServletResponse response) throws IOException {
        log.debug("code : {}", code);
        Cookie setCookie = new Cookie("jwt", "value");
        setCookie.setMaxAge(60 * 5);
        response.addCookie(setCookie);
        response.sendRedirect("http://13.209.106.36/");
        return ResponseEntity.ok("login 성공");
    }
}
