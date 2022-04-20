package com.example.demo.repository;

import com.example.demo.dto.Expire;
import com.example.demo.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface StockRepository extends JpaRepository<Stock,Long> {

//    @Query("SELECT new com.example.demo.dto.Expire(s.stock_id,s.stock_name,s.expire_date,s.quantity) FROM Stock s JOIN s.stocks m")
//    public List<Expire> getExpireStockInfor();

//    @Query("SELECT new com.example.demo.dto.Expire(s.stock_id,s.stock_name,s.expire_date,s.quantity) FROM Stock")
//   public List<Expire> getExpireStockInfor();

}
