package com.codesquad.sidedish5.service;

import com.codesquad.sidedish5.dto.CategoryDto;
import com.codesquad.sidedish5.dto.DetailDto;
import com.codesquad.sidedish5.dto.ResponseDto;
import com.codesquad.sidedish5.repository.DetailDao;
import com.codesquad.sidedish5.repository.OverviewDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    @Autowired
    private OverviewDao overviewDao;

    @Autowired
    private DetailDao detailDao;

    public ResponseDto getOverviewList(int categoryId) {
        CategoryDto categoryDto = overviewDao.findCategory(categoryId);
        categoryDto.setSidedish(overviewDao.findSidedishList(categoryId));
        return new ResponseDto(200, "성공", categoryDto);
    }

    public ResponseDto getOverview(int categoryId, String sidedishId) {
        CategoryDto categoryDto = overviewDao.findCategory(categoryId);
        categoryDto.setSidedish(overviewDao.findSidedish(sidedishId));
        return new ResponseDto(200, "성공", categoryDto);
    }

    public ResponseDto getDetail(String sidedishId) {
        DetailDto detailDto = detailDao.findDetailSidedish(sidedishId);
        return new ResponseDto(200, "성공", detailDto);
    }
}
