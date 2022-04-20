package com.example.demo;

import com.example.demo.controller.MaterialController;
import com.example.demo.model.Material;
import com.example.demo.repository.MaterialRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import sun.rmi.runtime.Log;

import javax.swing.plaf.synth.SynthEditorPaneUI;

public class MaterialTests {
        @Autowired
    private MaterialController materialRepos;

        private MaterialRepository matrepo;

    @Test
    public void createMaterialTest(){
//        Material material = new Material((long) 1,"am1","am","a",1000,100,2,1,"12b");//
//        materialRepos = new MaterialController();
//        materialRepos.createMaterial(material);
        matrepo.getExpireStockInfor();
    }

}


