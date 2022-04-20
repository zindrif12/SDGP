package com.example.registration.controller;

import com.example.registration.model.User;
import com.example.registration.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
    @Autowired
    private UserRepository userRepo;
    public User createUser(User user){
        return userRepo.save(user);
    }

    @GetMapping("/user")
    public List<User> getUsers(){
        return userRepo.findAll();
    }
    @GetMapping("/user/{user_id}")
    public ResponseEntity<User> getStocksById(@PathVariable Integer userid){

        User user=userRepo.findById(userid).orElseThrow(()->new ResourceNotFoundException("User not exists with id: "+userid));
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/stock/{stock_id}")
    public ResponseEntity<Map<String,Boolean>>deleteStock(@PathVariable Integer userid){
        User user=userRepo.findById(userid).orElseThrow(()->new ResourceNotFoundException("Stock not exists with id: "+userid));
        userRepo.delete(user);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted!",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
//
