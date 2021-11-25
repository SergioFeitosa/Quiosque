package com.sunnycoast.produto.converter;

import lombok.Data;

@Data

public class productDTO {
    
    private Long id;
    private String name;
    private String description;
    private String category;
    private String code;
    private Float price;
    private String imageUrl;
    private String preparationTime;
    private Float rating;
    private String releaseDate;
}
