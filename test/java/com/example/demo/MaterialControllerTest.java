package com.example.demo;


import com.example.demo.controller.MaterialController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@RunWith(SpringRunner.class)
@WebMvcTest(MaterialController.class)
public class MaterialControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void getAllMaterials() throws Exception
    {
        mvc.perform( MockMvcRequestBuilders
                .get("/material")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print());
//                .andExpect(status().isOk())
//                .andExpect(MockMvcResultMatchers.jsonPath("$.employees").exists())
//                .andExpect(MockMvcResultMatchers.jsonPath("$.employees[*].employeeId").isNotEmpty());
    }

}
