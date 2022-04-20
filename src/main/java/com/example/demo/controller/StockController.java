package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Stock;
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
public class StockController {


    @Autowired
    private StockRepository stockRep;
    //get all products
    @GetMapping("/stock")
    public List<Stock> getStocks(){
        return stockRep.findAll();
    }

    //create product rest api
    @PostMapping("/stock")
    public Stock createStocks(@RequestBody Stock stock){
        return stockRep.save(stock);
    }
    //get product by id rest api
    @GetMapping("/stock/{stock_id}")
    public ResponseEntity<Stock> getStocksById(@PathVariable Long stock_id){

        Stock stock=stockRep.findById(stock_id).orElseThrow(()->new ResourceNotFoundException("Stock not exists with id: "+stock_id));
        return ResponseEntity.ok(stock);
    }
    //update product rest api
    @PutMapping("/stock/{stock_id}")
    public ResponseEntity<Stock>updateStocks(@PathVariable Long stock_id,@RequestBody Stock stockDetails){
        Stock stock=stockRep.findById(stock_id).orElseThrow(()->new ResourceNotFoundException("Stock not exists with id: "+stock_id));

        stock.setStock_no(stockDetails.getStock_no());
        stock.setMtr_no(stockDetails.getMtr_no());
        stock.setReceived_date(stockDetails.getReceived_date());
        stock.setQuantity(stockDetails.getQuantity());
        stock.setManufacture_date(stockDetails.getManufacture_date());
        stock.setExpire_date(stockDetails.getExpire_date());


        Stock updatedStock=stockRep.save(stock);
        return ResponseEntity.ok(updatedStock);

    }
    //delete product rest api
    @DeleteMapping("/stock/{stock_id}")
    public ResponseEntity<Map<String,Boolean>>deleteStock(@PathVariable Long stock_id){
        Stock stock=stockRep.findById(stock_id).orElseThrow(()->new ResourceNotFoundException("Stock not exists with id: "+stock_id));
        stockRep.delete(stock);
        Map<String,Boolean>response=new HashMap<>();
        response.put("deleted!",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
