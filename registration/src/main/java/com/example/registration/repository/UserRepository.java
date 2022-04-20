package com.example.registration.repository;

import com.example.registration.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
//    public User findByEmailId(String emailId);
//    public User findByEmailIdAndPassword(String emailI, String password);
}
