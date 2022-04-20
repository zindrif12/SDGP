package com.example.demo.controller;

import com.example.demo.dto.Expire;
//import com.example.demo.dto.Response;
//import com.example.demo.dto.Response;
//import com.example.demo.dto.Response;
import com.example.demo.dto.Response;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Material;

import com.example.demo.model.Stock;


import com.example.demo.repository.MaterialRepository;
import com.example.demo.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class MatStockController {
    @Autowired
    private MaterialRepository materialRepo;
    @Autowired
    private StockRepository stockRepo;
//    @Autowired
//    private ExpireRepository expireRepo;

    @GetMapping("/findAll")
    public List<Material>findAll(){
        return materialRepo.findAll();
    }

    @GetMapping("/getInfo")
    public List<Response>getJoinInformation(){
        return materialRepo.getJoinInformation();
    }

    @DeleteMapping("/getInfo/{id}")
    public ResponseEntity<Map<String,Boolean>>deleteStock(@PathVariable Long id){
        Material mate=materialRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Material not exists with id: "+id));
        materialRepo.delete(mate);
        Map<String,Boolean>response=new HashMap<>();
        response.put("deleted!",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/getExpireInfo")
    public List<Expire> getExpireStockInfor(){
        return materialRepo.getExpireStockInfor();
    }

    @DeleteMapping("/getExpireInfo/{stock_id}")
    public ResponseEntity<Map<String,Boolean>>deleteEx(@PathVariable Long stock_id){
       Stock stock=stockRepo.findById(stock_id).orElseThrow(()->new ResourceNotFoundException("Material not exists with id: "+stock_id));
        stockRepo.delete(stock);
       Map<String,Boolean>response=new HashMap<>();
       response.put("deleted!",Boolean.TRUE);
        return ResponseEntity.ok(response);
   }
//@DeleteMapping("/getExpireInfo/{stock_id}")
// public Map<String,Boolean>deleteEx(@PathVariable Long stock_id){
//       Expire ex=expireRepo.findById(stock_id).orElseThrow(()->new ResourceNotFoundException("Material not exists with id: "+stock_id));
//        expireRepo.delete(ex);
//       Map<String,Boolean>response=new HashMap<>();
//       response.put("deleted!",Boolean.TRUE);
//        return response;
//   }






//    @GetMapping("/getExpireInfo/{stock_id}")
//    public ResponseEntity<Stock> getEXStocksById(@PathVariable Long stock_id){
//
//        Stock stock=stockRepo.findById(stock_id).orElseThrow(()->new ResourceNotFoundException("Stock not exists with id: "+stock_id));
//        return ResponseEntity.ok(stock);
//    }



}
