package com.codesquad.sidedish5.repository;

import com.codesquad.sidedish5.dto.CategoryDto;
import com.codesquad.sidedish5.dto.OverviewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class OverviewDao {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public OverviewDao(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public CategoryDto findCategory(int categoryId) {
        String sql = "SELECT c.id, c.name, c.description " +
                "FROM category c " +
                "WHERE id = ?";

        return jdbcTemplate.queryForObject(sql, new Object[] {categoryId}, ((rs, rowNum) -> {
            return new CategoryDto.Builder(rs.getInt("id"))
                    .categoryName(rs.getString("name"))
                    .categoryDescription(rs.getString("description"))
                    .build();
        }));
    }

    public List<Object> findSidedishList(int categoryId) {
        String sql = "SELECT s.id, s.title, s.description, s.main_image, s.n_price, s.s_price " +
                "FROM sidedish s " +
                "JOIN category c " +
                "ON c.id = s.category " +
                "WHERE c.id = ?";

        RowMapper<Object> sidedishRowMapper = (rs, rowNum) -> {
            OverviewDto overviewDto = new OverviewDto.Builder(rs.getString("id"))
                    .title(rs.getString("title"))
                    .alt(rs.getString("title"))
                    .description(rs.getString("description"))
                    .mainImage(rs.getString("main_image"))
                    .n_price(rs.getString("n_price"))
                    .s_price(rs.getString("s_price"))
                    .badge(findbadge(rs.getString("id")))
                    .deliveryType(findDeliveryType(rs.getString("id")))
                    .build();
            return overviewDto;
        };

        return jdbcTemplate.query(sql, new Object[] {categoryId}, sidedishRowMapper);
    }

    public List<Object> findSidedish(String sidedishId) {
        String sql = "SELECT id, title, description, main_image, n_price, s_price"
                + " FROM sidedish"
                + " WHERE id = ?";

        RowMapper<Object> sidedishRowMapper = (rs, rowNum) -> {
            OverviewDto overviewDto = new OverviewDto.Builder(rs.getString("id"))
                    .title(rs.getString("title"))
                    .alt(rs.getString("title"))
                    .description(rs.getString("description"))
                    .mainImage(rs.getString("main_image"))
                    .n_price(rs.getString("n_price"))
                    .s_price(rs.getString("s_price"))
                    .deliveryType(findDeliveryType(rs.getString("id")))
                    .build();
            return overviewDto;
        };

        return jdbcTemplate.query(sql, new Object[] {sidedishId}, sidedishRowMapper);
    }

    private List<String> findbadge(String sidedishId) {
        String sql = "SELECT b.name " +
                "FROM badge b " +
                "JOIN sidedish_badge sb " +
                "ON b.id = sb.badge " +
                "JOIN sidedish s " +
                "ON sb.sidedish = s.id " +
                "WHERE s.id = ?";

        return jdbcTemplate.query(sql, new Object[] {sidedishId}, ((rs, rowNum) -> {
            return rs.getString("name");
        }));
    }

    private List<String> findDeliveryType(String sidedishId) {
        String sql = "SELECT d.delivery_type " +
                "FROM delivery_type d " +
                "JOIN sidedish_delivery_type sd " +
                "ON d.id = sd.delivery_type " +
                "JOIN sidedish s " +
                "ON s.id = sd.sidedish " +
                "WHERE s.id = ?";

        return jdbcTemplate.query(sql, new Object[] {sidedishId}, ((rs, rowNum) -> {
            return rs.getString("delivery_type");
        }));
    }
}
