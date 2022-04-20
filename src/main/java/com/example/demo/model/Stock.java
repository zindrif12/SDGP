package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Data
//@AllArgsConstructor
//@NoArgsConstructor
@ToString

@Entity
@Table(name="stock")
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long stock_id;

    @Column(name="stock_no")
    private String stock_no;

    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name="mtr_no")
    private String mtr_no;

    @Column(name="received_date")
    private Date received_date;

    @Column(name="manufacture_date")
    private Date manufacture_date;

    @Column(name="quantity")
    private int quantity;

    @Column(name="expire_date")
    private Date expire_date;




    public Stock(long stock_id, String stock_no, String mtr_no, Date received_date, Date manufacture_date, int quantity, Date expire_date) {
        this.stock_id = stock_id;
        this.stock_no = stock_no;
        this.mtr_no = mtr_no;
        this.received_date = received_date;
        this.manufacture_date = manufacture_date;
        this.quantity = quantity;
        this.expire_date = expire_date;
    }

    public Stock(){

    }

    public String getMtr_no() {
        return mtr_no;
    }

    public void setMtr_no(String mtr_no) {
        this.mtr_no = mtr_no;
    }

    public long getStock_id() {
        return stock_id;
    }

    public void setStock_id(long stock_id) {
        this.stock_id = stock_id;
    }


    public String getStock_no() {
        return stock_no;
    }

    public void setStock_no(String stock_no) {
        this.stock_no = stock_no;
    }

    public Date getReceived_date() {
        return received_date;
    }

    public Date getManufacture_date() {
        return manufacture_date;
    }

    public void setManufacture_date(Date manufacture_date) {
        this.manufacture_date = manufacture_date;
    }

    public void setReceived_date(Date received_date) {
        this.received_date = received_date;
    }

    public Date getExpire_date() {
        return expire_date;
    }

    public void setExpire_date(Date expire_date) {
        this.expire_date = expire_date;
    }



    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }






}
