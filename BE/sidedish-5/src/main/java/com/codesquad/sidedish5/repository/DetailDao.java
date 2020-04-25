package com.codesquad.sidedish5.repository;

import com.codesquad.sidedish5.dto.DetailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class DetailDao {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public DetailDao(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public DetailDto findDetailSidedish(String detailSidedishId) {
        String sql = "SELECT id, title, description, main_image, point, delivery_info, delivery_fee, n_price, s_price"
                + " FROM sidedish"
                + " WHERE id = ?";

        RowMapper<DetailDto> detailSidedishRowMapper = (rs, rowNum) -> {
            DetailDto detailDto = new DetailDto.Builder(rs.getString("id"))
                    .title(rs.getString("title"))
                    .description(rs.getString("description"))
                    .mainImage(rs.getString("main_image"))
                    .point(rs.getString("point"))
                    .deliveryInfo(rs.getString("delivery_info"))
                    .deliveryFee(rs.getString("delivery_fee"))
                    .n_price(rs.getString("n_price"))
                    .s_price(rs.getString("s_price"))
                    .build();
            return detailDto;
        };

        return jdbcTemplate.queryForObject(sql, new Object[] {detailSidedishId}, detailSidedishRowMapper);
    }
}
