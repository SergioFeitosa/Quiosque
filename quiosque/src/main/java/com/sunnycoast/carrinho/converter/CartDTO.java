package com.sunnycoast.carrinho.converter;

import lombok.Data;

@Data

public class CartDTO {
    
    private Long id;
    private Long telefone;
    private String local;
    private String observacao;
    private Long quantidade;
    private String isencao;
    private String releaseDate;
    private String enviado;
    private Long productId;
}
