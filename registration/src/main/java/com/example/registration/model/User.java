package com.example.registration.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import javax.persistence.*;

@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;
    private String emailId;
    private String userName;
    private String passWord;

    public User(){}

    public User(int userid, String emailId, String userName, String passWord) {
        this.userid = userid;
        this.emailId = emailId;
        this.userName = userName;
        this.passWord = passWord;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }
}
