package com.codesquad.sidedish5.controller;

import com.codesquad.sidedish5.dto.ResponseDto;
import com.codesquad.sidedish5.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/banchan")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories/{categoryId}")
    public ResponseEntity<ResponseDto> showOverviewList(@PathVariable("categoryId") int categoryId) {
        ResponseDto responseDto = categoryService.getOverviewList(categoryId);
        return ResponseEntity.ok().body(responseDto);
    }

    @GetMapping("/categories/{categoryId}/sidedishes/{sidedishId}")
    public ResponseEntity<ResponseDto> showOverview(@PathVariable("categoryId") int categoryId, @PathVariable("sidedishId") String sidedishId) {
        ResponseDto responseDto = categoryService.getOverview(categoryId, sidedishId);
        return ResponseEntity.ok().body(responseDto);
    }

    @GetMapping("/detail/{sidedishId}")
    public ResponseEntity<ResponseDto> showDetail(@PathVariable("sidedishId") String sidedishId) {
        ResponseDto responseDto = categoryService.getDetail(sidedishId);
        return ResponseEntity.ok().body(responseDto);
    }

    @ExceptionHandler(EmptyResultDataAccessException.class)
    public ResponseEntity<ResponseDto> exceptionHandler() {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto(404, "찾을 수 없습니다."));
    }
}
