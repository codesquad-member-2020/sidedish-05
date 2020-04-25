package com.codesquad.sidedish5.repository;

import com.codesquad.sidedish5.dto.OverviewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class OverviewDao {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public OverviewDao(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }
//    "LEFT OUTER JOIN badge b "
//    + "ON ....

    public OverviewDto findSidedish(String sidedishId) {
        String sql = "SELECT id, title, description, main_image, n_price, s_price"
                + " FROM sidedish"
                + " WHERE id = ?";

        RowMapper<OverviewDto> sidedishRowMapper = (rs, rowNum) -> {
            OverviewDto overviewDto = new OverviewDto.Builder(rs.getString("id"))
                    .title(rs.getString("title"))
                    .alt(rs.getString("title"))
                    .description(rs.getString("description"))
                    .mainImage(rs.getString("main_image"))
                    .n_price(rs.getString("n_price"))
                    .s_price(rs.getString("s_price"))
                    .build();
            return overviewDto;
        };

        return jdbcTemplate.queryForObject(sql, new Object[] {sidedishId}, sidedishRowMapper);
    }

}
