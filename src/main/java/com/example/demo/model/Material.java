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
@Table(name="material")
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name="id")
    private Long id;

    @Column(name="mtr_no")
    private String mtr_no;

    @Column(name="mtr_name")
    private String mtr_name;

    @Column(name="mtr_vendor")
    private String mtr_vendor;

    @Column(name="mtr_max_stock")
    private int mtr_max_stock;

    @Column(name="mtr_min_stock")
    private int mtr_min_stock;

    @Column(name="mtr_duration")
    private int mtr_duration;

    @Column(name="mtr_status")
    private int mtr_status;

    @Column(name="mtr_bin")
    private String mtr_bin;

   @OneToMany(cascade = CascadeType.ALL)
   @JoinColumn(name="id",referencedColumnName = "id")
   private List<Stock>stocks;

    public List<Stock> getStocks() {
        return stocks;
    }

    public void setStocks(List<Stock> stocks) {
        this.stocks = stocks;
    }

    public Material(){

    }

    public Material(Long id, String mtr_no, String mtr_name, String mtr_vendor, int mtr_max_stock, int mtr_min_stock, int mtr_duration, int mtr_status, String mtr_bin) {
        this.id = id;
        this.mtr_no = mtr_no;
        this.mtr_name = mtr_name;
        this.mtr_vendor = mtr_vendor;
        this.mtr_max_stock = mtr_max_stock;
        this.mtr_min_stock = mtr_min_stock;
        this.mtr_duration = mtr_duration;
        this.mtr_status = mtr_status;
        this.mtr_bin = mtr_bin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getMtr_vendor() {
        return mtr_vendor;
    }

    public void setMtr_vendor(String mtr_vendor) {
        this.mtr_vendor = mtr_vendor;
    }

    public int getMtr_max_stock() {
        return mtr_max_stock;
    }

    public void setMtr_max_stock(int mtr_max_stock) {
        this.mtr_max_stock = mtr_max_stock;
    }

    public int getMtr_min_stock() {
        return mtr_min_stock;
    }

    public void setMtr_min_stock(int mtr_min_stock) {
        this.mtr_min_stock = mtr_min_stock;
    }


    public int getMtr_duration() {
        return mtr_duration;
    }

    public void setMtr_duration(int mtr_duration) {
        this.mtr_duration = mtr_duration;
    }

    public int getMtr_status() {
        return mtr_status;
    }

    public void setMtr_status(int mtr_status) {
        this.mtr_status = mtr_status;
    }

    public String getMtr_bin() {
        return mtr_bin;
    }

    public void setMtr_bin(String mtr_bin) {
        this.mtr_bin = mtr_bin;
    }
}

