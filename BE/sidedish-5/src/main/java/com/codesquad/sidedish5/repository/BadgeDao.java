package com.codesquad.sidedish5.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class BadgeDao {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public BadgeDao(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public int findIdByName(String name) {
        String sql = "SELECT id FROM badge WHERE name = ?";
        //Todo: NullPoint 예외처리 해야 함
        return jdbcTemplate.queryForObject(sql, new Object[]{name}, Integer.class);
    }

}
