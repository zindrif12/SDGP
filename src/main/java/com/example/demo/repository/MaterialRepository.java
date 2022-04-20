package com.example.demo.repository;

//import com.example.demo.dto.Response;
//import com.example.demo.dto.Response;

import com.example.demo.dto.Expire;
import com.example.demo.dto.Response;
import com.example.demo.model.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaterialRepository extends JpaRepository<Material,Long> {


    @Query("SELECT new com.example.demo.dto.Response(m.id,m.mtr_no,m.mtr_name,m.mtr_max_stock,m.mtr_min_stock) FROM Material m JOIN m.stocks s WHERE m.id=s.id AND m.mtr_min_stock>(SELECT SUM(s.quantity) FROM Stock s WHERE s.id=m.id GROUP BY s.id) GROUP BY m.id")
    public List<Response> getJoinInformation();

//        @Query("SELECT new com.example.demo.dto.Response(m.id,m.mtr_no,m.mtr_name,m.mtr_max_stock,m.mtr_min_stock,s.quantity) FROM Material m JOIN m.stocks s WHERE m.id=s.id AND m.mtr_min_stock>(SELECT SUM(s.quantity) FROM Stock s WHERE s.id=m.id GROUP BY s.id AS total) GROUP BY m.id")
//   public List<Response> getJoinInformation();



//    @Query("SELECT new com.example.demo.dto.Expire(s.stock_id,s.stock_name,s.expire_date,s.quantity) FROM Stock s JOIN m.stocks s WHERE m.id=s.id AND DATE_ADD(SELECT s.expire_date,INTERVAL -m.mtr_duration DAY)<=CURDATE()FROM Stock s WHERE s.id=m.id")

    @Query("SELECT new com.example.demo.dto.Expire(s.stock_id,s.stock_no,s.expire_date,s.quantity,m.mtr_name) FROM Material m JOIN m.stocks s WHERE m.id=s.id  AND CURDATE() > s.expire_date")
    public List<Expire> getExpireStockInfor();

   //    SELECT DATE_ADD(s.expire_date,INTERVAL -m.mtr_duration DAY) AS DateAdd,m.id,s.stock_id,s.expire_date,m.mtr_duration
//    FROM stock s JOIN material m
//    WHERE m.id=s.id AND DATE_ADD(s.expire_date,INTERVAL -m.mtr_duration DAY)<=CURDATE()

//Date.AddDays(#date(2011, 5, 14), 5)

}

