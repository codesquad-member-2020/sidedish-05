package com.codesquad.sidedish5.controller;

import com.codesquad.sidedish5.dto.DetailDto;
import com.codesquad.sidedish5.dto.OverviewDto;
import com.codesquad.sidedish5.repository.DetailDao;
import com.codesquad.sidedish5.repository.OverviewDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/banchan")
public class CategoryController {
    @Autowired
    OverviewDao overviewDao;

    @Autowired
    DetailDao detailDao;

    @GetMapping("/categories/{categoryId}")
    public List<OverviewDto> showOverviewList(@PathVariable("categoryId") int categoryId) {
        return overviewDao.findCategory(categoryId);
    }

    @GetMapping("/categories/{categoryId}/sidedishes/{sidedishId}")
    public OverviewDto showOverview(@PathVariable("categoryId") int categoryId, @PathVariable("sidedishId") String sidedishId) {
        return overviewDao.findSidedish(categoryId, sidedishId);
    }

    @GetMapping("/detail/{sidedishId}")
    public DetailDto showDetail(@PathVariable("sidedishId") String sidedishId) {
        return detailDao.findDetailSidedish(sidedishId);
    }
}
