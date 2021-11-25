package com.sunnycoast.produto.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data

@Entity
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String code;

    @Column(nullable = false)
    private Float price;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    private String preparationTime;

    @Column(nullable = false)
    private Float rating;

    @Column(nullable = false)
    private String releaseDate;


}
