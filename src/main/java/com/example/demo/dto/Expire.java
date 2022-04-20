package com.example.demo.dto;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;


@Data
@ToString
//@Entity
@Table(name="ex")
public class Expire {

    private Long stock_id;
    private String stock_no;

    private Date expire_date;
    private int quantity;
private String mtr_name;
    public Expire(Long stock_id, String stock_no, Date expire_date, int quantity,String mtr_name) {

        this.stock_id = stock_id;
        this.stock_no = stock_no;
        this.expire_date = expire_date;
        this.quantity = quantity;
        this.mtr_name=mtr_name;
    }
public Expire(){

}
    public Long getStock_id() {
        return stock_id;
    }

    public void setStock_id(Long stock_id) {
        this.stock_id = stock_id;
    }

    public String getMtr_name() {
        return mtr_name;
    }

    public void setMtr_name(String mtr_name) {
        this.mtr_name = mtr_name;
    }

    public String getStock_no() {
        return stock_no;
    }

    public void setStock_no(String stock_no) {
        this.stock_no = stock_no;
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
