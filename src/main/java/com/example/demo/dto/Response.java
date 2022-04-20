package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;


@Data

@ToString

@Table(name="ms")
public class Response {
    @Id

    private long id;

   @Column(name="mtr_no")
    private String mtr_no;

   @Column(name="mtr_name")
    private String mtr_name;

    @Column(name="mtr_max_stock")
   private int mtr_max_stock;
private int mtr_min_stock;

    public Response(Long id,String mtr_no, String mtr_name, int mtr_max_stock,int  mtr_min_stock) {
        this.id=id;
        this.mtr_no = mtr_no;
        this.mtr_name = mtr_name;
        this.mtr_max_stock = mtr_max_stock;
        this.mtr_min_stock = mtr_min_stock;

    }
    public Response(){

    }



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getMtr_min_stock() {
        return mtr_min_stock;
    }

    public void setMtr_min_stock(int mtr_min_stock) {
        this.mtr_min_stock = mtr_min_stock;
    }

    public String getMtr_no() {
        return mtr_no;
    }

    public void setMtr_no(String mtr_no) {
        this.mtr_no = mtr_no;
    }

    public String getMtr_name() {
        return mtr_name;
    }

    public void setMtr_name(String mtr_name) {
        this.mtr_name = mtr_name;
    }

    public int getMtr_max_stock() {
        return mtr_max_stock;
    }

    public void setMtr_max_stock(int mtr_max_stock) {
        this.mtr_max_stock = mtr_max_stock;
    }
}
