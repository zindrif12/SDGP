package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Material;
import com.example.demo.model.Material;
import com.example.demo.repository.MaterialRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
/*import products.model.Product;*/

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

@RequestMapping("/api/v1/")
public class MaterialController {
    @Autowired
    private MaterialRepository materialRep;
    //get all materials
    @GetMapping("/material")
    public List<Material>getMaterials(){
        return materialRep.findAll();
    }
    //create material rest api
    @PostMapping("/material")
    public Material createMaterial(@RequestBody Material material){
        return materialRep.save(material);
    }

    //get material by id rest api
    @GetMapping("/material/{id}")
    public ResponseEntity<Material>getMaterialById(@PathVariable Long id){

        Material material=materialRep.findById(id).orElseThrow(() ->new ResourceNotFoundException("Material not exists with id: "+id));
        return ResponseEntity.ok(material);
    }
    //update material rest api
    @PutMapping("/material/{id}")
    public ResponseEntity<Material>updateMaterial(@PathVariable Long id,@RequestBody Material materialDetails){
        Material material=materialRep.findById(id).orElseThrow(() ->new ResourceNotFoundException("Material not exists with id: "+id));

        material.setMtr_no(materialDetails.getMtr_no());
        material.setMtr_name(materialDetails.getMtr_name());
        material.setMtr_vendor(materialDetails.getMtr_vendor());
        material.setMtr_max_stock(materialDetails.getMtr_max_stock());
        material.setMtr_min_stock(materialDetails.getMtr_min_stock());
        material.setMtr_duration(materialDetails.getMtr_duration());
        material.setMtr_status(materialDetails.getMtr_status());
        material.setMtr_bin(materialDetails.getMtr_bin());

        Material updatedMaterial=materialRep.save(material);
        return ResponseEntity.ok(updatedMaterial);

    }
    //delete material rest api
    @DeleteMapping("/material/{id}")
    public ResponseEntity<Map<String,Boolean>>deleteMaterial(@PathVariable Long id){
        Material material=materialRep.findById(id).orElseThrow(()->new ResourceNotFoundException("Material not exists with id: "+id));
        materialRep.delete(material);
        Map<String,Boolean>response=new HashMap<>();
        response.put("deleted!",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }






}
