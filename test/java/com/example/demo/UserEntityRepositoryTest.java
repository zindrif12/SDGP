package com.example.demo;


import com.example.demo.controller.MaterialController;
import com.example.demo.model.Material;
import com.example.demo.repository.MaterialRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserEntityRepositoryTest {

    @Autowired
    private MaterialRepository materialRepository;

    @Autowired
    private MaterialController materialRepos;

    @Test
    public void testGetExpireStocks() {
        assertNotNull(materialRepository.getExpireStockInfor());

    }

    @Test
    public void testGetStockQuantity() {
        assertNotNull(materialRepository.getJoinInformation());

    }
}
